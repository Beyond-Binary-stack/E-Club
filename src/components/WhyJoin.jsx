const WhyJoin = () => {
  const benefits = [
    {
      icon: '🗣️',
      title: 'Speak Confidently',
      description: 'Overcome your fears and speak English with confidence in a supportive environment.',
    },
    {
      icon: '🌍',
      title: 'Improve Real-life English',
      description: 'Focus on communication that matters in the real world, not just textbooks.',
    },
    {
      icon: '🤝',
      title: 'Friendly Environment',
      description: 'Learn and practice in a space that is welcoming, fun, and inclusive.',
    },
    {
      icon: '😌',
      title: 'No Pressure, No Judgment',
      description: 'Mistakes are welcome here. Progress matters more than perfection.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linguavibe-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-linguavibe-text-primary text-center mb-12">
          Why Join Linguavibe?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-6 items-start bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-linguavibe-text-primary mb-2 flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-linguavibe-emerald"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {benefit.title}
                </h3>
                <p className="text-linguavibe-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;

