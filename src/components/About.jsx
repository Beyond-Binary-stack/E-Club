const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-tuyd-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-tuyd-text-primary mb-6">
          About TUYD
        </h2>
        
        <div className="flex justify-center mb-8">
          <div className="flex gap-4 text-6xl">
            <span className="text-tuyd-teal">💬</span>
            <span className="text-tuyd-emerald">🌟</span>
            <span className="text-tuyd-orange">🚀</span>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-tuyd-text-secondary leading-relaxed mb-6">
          <strong className="text-tuyd-text-primary">Talk Until You Drop (TUYD)</strong> is a vibrant, 
          welcoming English-speaking community designed specifically for university students. 
          We believe that language learning happens best when you feel safe, supported, and inspired.
        </p>
        
        <p className="text-lg sm:text-xl text-tuyd-text-secondary leading-relaxed">
          At TUYD, we focus on three core values: <strong className="text-tuyd-teal">confidence</strong>, 
          {' '}<strong className="text-tuyd-emerald">communication</strong>, and{' '}
          <strong className="text-tuyd-orange">creativity</strong>. Here, every mistake is a 
          stepping stone, every conversation is an opportunity, and every voice has power.
        </p>
      </div>
    </section>
  );
};

export default About;

