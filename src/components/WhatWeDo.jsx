const WhatWeDo = () => {
  const activities = [
    {
      icon: '🗣️',
      title: 'Debate & Discussions',
      description: 'Engage in lively debates and meaningful discussions on topics that matter to you.',
    },
    {
      icon: '🎤',
      title: 'Public Speaking Practice',
      description: 'Build confidence and master the art of speaking in front of audiences.',
    },
    {
      icon: '🎬',
      title: 'Movie & Talk Nights',
      description: 'Watch movies together and discuss themes, stories, and ideas in a relaxed setting.',
    },
    {
      icon: '✍️',
      title: 'Writing & Creativity',
      description: 'Express yourself through creative writing, poetry, and storytelling workshops.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-tuyd-text-primary text-center mb-12">
          What We Do
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-tuyd-bg rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-tuyd-orange"
            >
              <div className="text-6xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-semibold text-tuyd-text-primary mb-3">
                {activity.title}
              </h3>
              <p className="text-tuyd-text-secondary leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

