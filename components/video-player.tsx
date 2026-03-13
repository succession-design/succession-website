'use client';

import { useState } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  title?: string;
  description?: string;
}

export function VideoPlayer({ videoUrl, title, description }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Video Container */}
      <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl aspect-video">
        <video
          src={videoUrl}
          className="w-full h-full object-cover"
          controls
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Title and Description */}
      {(title || description) && (
        <div className="mt-4 text-center">
          {title && <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>}
          {description && <p className="text-gray-600">{description}</p>}
        </div>
      )}
    </div>
  );
}
