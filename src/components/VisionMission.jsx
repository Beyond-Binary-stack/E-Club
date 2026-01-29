const VisionMission = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linguavibe-bg">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-linguavibe-teal rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-linguavibe-text-primary">
                Vision
              </h2>
            </div>
            <p className="text-lg text-linguavibe-text-secondary leading-relaxed">
              To build a vibrant, confident, and creative English-speaking community at Unity University where students grow in communication.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-linguavibe-emerald rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-linguavibe-text-primary">
                Mission
              </h2>
            </div>
            <p className="text-lg text-linguavibe-text-secondary leading-relaxed">
              Linguavibe is an English-speaking community for students who want to speak confidently without fear or embarrassment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;


