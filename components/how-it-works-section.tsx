export function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Start Your Interview',
      description: 'Select your business type and answer industry-specific questions in a guided voice interview.',
    },
    {
      number: '2',
      title: 'AI Transcription',
      description: 'Your voice is automatically transcribed and analyzed by our AI to extract key information.',
    },
    {
      number: '3',
      title: 'Generate Document',
      description: 'Succession automatically structures your knowledge into a professional handover document.',
    },
    {
      number: '4',
      title: 'Review & Share',
      description: 'Review your document, make updates, and share with advisors, brokers, or potential buyers.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From interview to professional document in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-amber-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -ml-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
