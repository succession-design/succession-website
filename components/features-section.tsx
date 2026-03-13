export function FeaturesSection() {
  const features = [
    {
      icon: '🎤',
      title: 'Voice-Guided Interviews',
      description: 'Industry-specific questions tailored to your business type. Record your knowledge in your own words.',
    },
    {
      icon: '🤖',
      title: 'AI-Powered Documents',
      description: 'Automatic transcription and structured document generation. Your knowledge becomes a professional handover manual.',
    },
    {
      icon: '📊',
      title: 'Buyer-Ready Format',
      description: 'Professional formatting that impresses buyers and advisors. Organized sections for customers, operations, finances, and more.',
    },
    {
      icon: '📝',
      title: 'Version Control',
      description: 'Track changes over time. Update your playbook as your business evolves before the handover.',
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your business information is encrypted and stored securely. You control who has access.',
    },
    {
      icon: '📥',
      title: 'Easy Export',
      description: 'Download as PDF, share with advisors, or grant broker access. Multiple distribution options.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Succession is designed to make capturing and organizing your business knowledge simple and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
