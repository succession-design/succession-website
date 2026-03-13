export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'Founder & CEO, Tech Solutions Inc',
      quote: 'Succession helped me document 15 years of business knowledge in just a few hours. My buyer was impressed with how organized and comprehensive everything was.',
      image: '👩‍💼',
    },
    {
      name: 'Michael Rodriguez',
      title: 'Owner, Manufacturing Co',
      quote: 'I was worried about losing institutional knowledge when I retired. This tool made it easy to capture everything my team needed to know. Worth every penny.',
      image: '👨‍💼',
    },
    {
      name: 'Jennifer Park',
      title: 'Business Broker',
      quote: 'My clients love Succession. It dramatically speeds up due diligence and shows buyers exactly what they\'re getting. It\'s become essential to my process.',
      image: '👩‍💼',
    },
    {
      name: 'David Thompson',
      title: 'Owner, Service Business',
      quote: 'The AI-generated document was surprisingly accurate and professional. I only needed to make minor edits. This is how business handovers should work.',
      image: '👨‍💼',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Business Owners & Brokers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our users are saying about Succession.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">
                2,500+
              </div>
              <p className="text-gray-600">
                Business owners have captured their knowledge
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">
                4.9/5
              </div>
              <p className="text-gray-600">
                Average rating from users
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">
                $2.3M+
              </div>
              <p className="text-gray-600">
                In successful business transitions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
