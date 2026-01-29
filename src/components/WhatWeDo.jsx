const WhatWeDo = () => {
  const activities = [
    {
      icon: '👫',
      title: 'Bring Your Friends',
      description: 'Speak freely and improve together in a relaxed, social atmosphere.',
    },
    {
      icon: '💬',
      title: 'Casual Conversations',
      description: 'Have fun, informal talks with friends to build natural fluency.',
    },
    {
      icon: '🎙️',
      title: 'Mini-Broadcasts',
      description: 'Host short broadcasts together and practice speaking for an audience.',
    },
    {
      icon: '🔥',
      title: 'Hot Topics',
      description: 'Debate trending topics and discuss interesting ideas that matter to you.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-linguavibe-text-primary text-center mb-12">
          What We Do
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-linguavibe-bg rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-linguavibe-orange"
            >
              <div className="text-6xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-semibold text-linguavibe-text-primary mb-3">
                {activity.title}
              </h3>
              <p className="text-linguavibe-text-secondary leading-relaxed">
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

