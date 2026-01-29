const CallToAction = () => {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-linguavibe-teal to-linguavibe-emerald">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Ready to Find Your Voice?
        </h2>
        <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed">
          Join Linguavibe today and become part of a community that believes in your potential. 
          Every conversation is a step forward, every word is progress.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#"
            className="px-10 py-5 bg-white text-linguavibe-teal text-xl font-bold rounded-lg hover:bg-linguavibe-yellow hover:text-linguavibe-text-primary transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl w-full sm:w-auto"
          >
            Become Part of Linguavibe
          </a>
          <a
            href="#"
            className="px-10 py-5 bg-linguavibe-orange text-white text-xl font-bold rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl w-full sm:w-auto"
          >
            Speak. Share. Grow.
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

