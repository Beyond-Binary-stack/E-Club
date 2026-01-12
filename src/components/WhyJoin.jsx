const WhyJoin = () => {
  const benefits = [
    {
      icon: '💪',
      title: 'Confidence Building',
      description: 'Overcome your fears and speak English with confidence in a supportive environment.',
    },
    {
      icon: '👥',
      title: 'Meet New People',
      description: 'Connect with like-minded students and build lasting friendships.',
    },
    {
      icon: '🌱',
      title: 'Improve English Naturally',
      description: 'Learn through real conversations, not textbooks. Practice makes perfect.',
    },
    {
      icon: '🎯',
      title: 'Leadership & Teamwork',
      description: 'Develop leadership skills and learn to work effectively in teams.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-tuyd-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-tuyd-text-primary text-center mb-12">
          Why Join TUYD?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-6 items-start bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-tuyd-text-primary mb-2 flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-tuyd-emerald"
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
                <p className="text-tuyd-text-secondary leading-relaxed">
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

