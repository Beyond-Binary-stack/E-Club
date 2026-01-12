const ActivitiesPreview = () => {
  const activityTypes = [
    {
      period: 'Weekly',
      activities: [
        'Group Discussions',
        'Public Speaking Sessions',
        'Writing Workshops',
        'Language Exchange',
      ],
      color: 'bg-tuyd-teal',
      textColor: 'text-white',
    },
    {
      period: 'Monthly',
      activities: [
        'Debate Competitions',
        'Movie Nights',
        'Guest Speaker Events',
        'Creative Showcases',
      ],
      color: 'bg-tuyd-emerald',
      textColor: 'text-white',
    },
    {
      period: 'Annual',
      activities: [
        'Annual Conference',
        'Awards & Recognition',
        'Community Projects',
        'Special Events',
      ],
      color: 'bg-tuyd-orange',
      textColor: 'text-white',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-tuyd-text-primary text-center mb-12">
          Our Activities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activityTypes.map((type, index) => (
            <div
              key={index}
              className={`${type.color} ${type.textColor} rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <h3 className="text-3xl font-bold mb-6 text-center">
                {type.period}
              </h3>
              <ul className="space-y-4">
                {type.activities.map((activity, activityIndex) => (
                  <li
                    key={activityIndex}
                    className="flex items-center gap-3 text-lg"
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesPreview;

