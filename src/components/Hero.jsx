import logo from '../Images/logo.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - African Muslim students talking - Responsive */}
      <div className="absolute inset-0 z-0 bg-linguavibe-teal">
        {/* Mobile image */}
        <div 
          className="block sm:hidden absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=640&auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        {/* Tablet image */}
        <div 
          className="hidden sm:block lg:hidden absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1024&auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        {/* Desktop image */}
        <div 
          className="hidden lg:block absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 z-[1]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-20 max-w-5xl mx-auto">
        <div className="flex justify-center mb-6 animate-fade-in">
          <img src={logo} alt="Linguavibe Logo" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-linguavibe-yellow shadow-xl object-cover" />
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 animate-fade-in">
          Linguavibe
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-linguavibe-yellow mb-6 animate-fade-in">
          Speak the World's Language
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up">
          Join a safe, fun English-speaking community where confidence grows, 
          communication flows, and every voice matters.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <a
            href="#cta"
            className="px-8 py-4 bg-linguavibe-teal text-white text-lg font-semibold rounded-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            Let’s Talk
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-white text-linguavibe-teal text-lg font-semibold rounded-lg hover:bg-linguavibe-yellow hover:text-linguavibe-text-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            Practice English With Confidence
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

