'use client';

import { useEffect, useRef, useState } from 'react';
import { Mic, Square, Pause, Play, Trash2, Download } from 'lucide-react';

interface VoiceRecorderProps {
  onRecordingComplete?: (audioBlob: Blob, duration: number) => void;
  onTranscriptGenerated?: (transcript: string) => void;
  maxDuration?: number; // in seconds
}

interface Recording {
  id: string;
  blob: Blob;
  duration: number;
  timestamp: Date;
  transcript?: string;
  isTranscribing?: boolean;
}

export function VoiceRecorder({
  onRecordingComplete,
  onTranscriptGenerated,
  maxDuration = 3600, // 1 hour default
}: VoiceRecorderProps) {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [duration, setDuration] = useState(0);
  const [waveformData, setWaveformData] = useState<number[]>([]);
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [selectedRecording, setSelectedRecording] = useState<Recording | null>(null);
  const [isPlayingBack, setIsPlayingBack] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Initialize audio context and start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Setup audio context for waveform visualization
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioContextRef.current = audioContext;

      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      analyserRef.current = analyser;

      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);

      // Setup media recorder
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        chunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const recording: Recording = {
          id: `rec_${Date.now()}`,
          blob: audioBlob,
          duration,
          timestamp: new Date(),
        };
        setRecordings((prev) => [recording, ...prev]);
        setSelectedRecording(recording);
        onRecordingComplete?.(audioBlob, duration);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setDuration(0);

      // Start waveform visualization
      visualizeWaveform();
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Unable to access microphone. Please check permissions.');
    }
  };

  // Visualize audio waveform
  const visualizeWaveform = () => {
    const canvas = canvasRef.current;
    if (!canvas || !analyserRef.current) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      animationFrameRef.current = requestAnimationFrame(draw);

      analyserRef.current!.getByteFrequencyData(dataArray);

      // Clear canvas
      ctx.fillStyle = 'rgb(240, 240, 240)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw waveform
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgb(168, 85, 247)';
      ctx.beginPath();

      const sliceWidth = (canvas.width * 1.0) / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
    };

    draw();
  };

  // Stop recording
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    }
  };

  // Pause recording
  const pauseRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
    }
  };

  // Resume recording
  const resumeRecording = () => {
    if (mediaRecorderRef.current && isPaused) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
    }
  };

  // Delete recording
  const deleteRecording = (id: string) => {
    setRecordings((prev) => prev.filter((rec) => rec.id !== id));
    if (selectedRecording?.id === id) {
      setSelectedRecording(null);
    }
  };

  // Download recording
  const downloadRecording = (recording: Recording) => {
    const url = URL.createObjectURL(recording.blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `recording_${recording.timestamp.getTime()}.webm`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Playback recording
  const playRecording = (recording: Recording) => {
    const audio = new Audio(URL.createObjectURL(recording.blob));
    audio.onended = () => setIsPlayingBack(false);
    audio.play();
    setIsPlayingBack(true);
  };

  // Transcribe recording
  const transcribeRecording = async (recording: Recording) => {
    setRecordings((prev) =>
      prev.map((rec) =>
        rec.id === recording.id ? { ...rec, isTranscribing: true } : rec
      )
    );

    try {
      const formData = new FormData();
      formData.append('audio', recording.blob, 'audio.webm');

      const response = await fetch('/api/transcribe', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Transcription failed');

      const data = await response.json();
      const transcript = data.transcript;

      setRecordings((prev) =>
        prev.map((rec) =>
          rec.id === recording.id
            ? { ...rec, transcript, isTranscribing: false }
            : rec
        )
      );

      onTranscriptGenerated?.(transcript);
    } catch (error) {
      console.error('Transcription error:', error);
      alert('Failed to transcribe audio');
      setRecordings((prev) =>
        prev.map((rec) =>
          rec.id === recording.id ? { ...rec, isTranscribing: false } : rec
        )
      );
    }
  };

  // Update duration
  useEffect(() => {
    if (!isRecording) return;

    const interval = setInterval(() => {
      setDuration((prev) => {
        if (prev >= maxDuration) {
          stopRecording();
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRecording, maxDuration]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 p-6 bg-white rounded-lg border border-gray-200">
      {/* Recording Controls */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Record Your Business Knowledge</h3>
        <p className="text-sm text-gray-600">
          Share insights about your business operations, customers, financials, and succession plans.
          Your voice will be transcribed and compiled into your deal package.
        </p>

        {/* Waveform Canvas */}
        <canvas
          ref={canvasRef}
          width={500}
          height={100}
          className="w-full border border-gray-300 rounded-lg bg-gray-50"
        />

        {/* Duration Display */}
        <div className="text-center">
          <p className="text-3xl font-mono font-bold text-purple-600">{formatTime(duration)}</p>
          <p className="text-xs text-gray-500 mt-1">Max duration: {formatTime(maxDuration)}</p>
        </div>

        {/* Control Buttons */}
        <div className="flex gap-3 justify-center">
          {!isRecording ? (
            <button
              onClick={startRecording}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              <Mic size={20} />
              Start Recording
            </button>
          ) : (
            <>
              {!isPaused ? (
                <button
                  onClick={pauseRecording}
                  className="flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                >
                  <Pause size={20} />
                  Pause
                </button>
              ) : (
                <button
                  onClick={resumeRecording}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  <Play size={20} />
                  Resume
                </button>
              )}
              <button
                onClick={stopRecording}
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                <Square size={20} />
                Stop
              </button>
            </>
          )}
        </div>
      </div>

      {/* Recordings List */}
      {recordings.length > 0 && (
        <div className="space-y-3 border-t pt-6">
          <h4 className="font-semibold text-gray-900">Your Recordings</h4>
          <div className="space-y-2">
            {recordings.map((recording) => (
              <div
                key={recording.id}
                className={`p-4 border rounded-lg cursor-pointer transition ${
                  selectedRecording?.id === recording.id
                    ? 'bg-purple-50 border-purple-300'
                    : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedRecording(recording)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">
                      {recording.timestamp.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">{formatTime(recording.duration)}</p>
                    {recording.transcript && (
                      <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                        {recording.transcript}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playRecording(recording);
                      }}
                      className="p-2 hover:bg-gray-200 rounded transition"
                      title="Play"
                    >
                      <Play size={18} className="text-blue-600" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        downloadRecording(recording);
                      }}
                      className="p-2 hover:bg-gray-200 rounded transition"
                      title="Download"
                    >
                      <Download size={18} className="text-green-600" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteRecording(recording.id);
                      }}
                      className="p-2 hover:bg-gray-200 rounded transition"
                      title="Delete"
                    >
                      <Trash2 size={18} className="text-red-600" />
                    </button>
                  </div>
                </div>

                {/* Transcribe Button */}
                {!recording.transcript && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      transcribeRecording(recording);
                    }}
                    disabled={recording.isTranscribing}
                    className="mt-3 w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition disabled:opacity-50"
                  >
                    {recording.isTranscribing ? 'Transcribing...' : 'Transcribe Recording'}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
