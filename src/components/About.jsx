const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-linguavibe-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-linguavibe-text-primary mb-6">
          Community Vision
        </h2>
        
        <div className="flex justify-center mb-8">
          <div className="flex gap-4 text-6xl">
            <span className="text-linguavibe-teal">💬</span>
            <span className="text-linguavibe-emerald">🌟</span>
            <span className="text-linguavibe-orange">🚀</span>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-linguavibe-teal mb-4">Mission</h3>
            <p className="text-lg sm:text-xl text-linguavibe-text-secondary leading-relaxed">
              Linguavibe is an English-speaking community for students who want to speak confidently without fear or embarrassment.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-linguavibe-emerald mb-4">Philosophy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-linguavibe-teal">
                <p className="text-linguavibe-text-secondary">Focus on real communication, not exams or pressure.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-linguavibe-emerald">
                <p className="text-linguavibe-text-secondary">Mistakes are welcome; progress matters more than perfection.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

