const Community = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-tuyd-teal/80"></div>
      </div>

      {/* Quote Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl">
          <svg
            className="w-16 h-16 text-tuyd-orange mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
          </svg>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-tuyd-text-primary leading-relaxed mb-4">
            At TUYD, your voice matters. Mistakes are welcome.
          </blockquote>
          <p className="text-lg sm:text-xl text-tuyd-text-secondary mt-6">
            Join a community where growth is celebrated, not judged.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;

