export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
      <div className="absolute top-20 left-0 right-0 z-20 text-center px-4">
        <p className="text-white/90 text-sm sm:text-lg font-light tracking-widest uppercase py-6 my-0 pt-1.5 mb-6">
          Invest Smart, Live Elite
        </p>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0 parallax-bg shadow-md">
        <img
          src="/images/hero-footer-bg.jpg"
          alt="Welcome to Abuja - Nigerian gate"
          className="w-full h-full object-cover object-center opacity-20 transition-all duration-700 ease-in-out sm:hover:scale-110 sm:hover:opacity-30 min-h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 fade-in">
        <h1 className="text-3xl lg:text-7xl font-bold text-white mb-6 text-balance slide-in-up mt-7 leading-tight text-center sm:text-5xl py-0 pt-6">
          {"Secure Your Future with Trusted Land Investments"}  
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty slide-in-up leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          {"At Elite Cycle Homes, we make land ownership in Abuja simple, secure, and profitable. From prime serviced plots to high-growth estate opportunities , we help you build a lasting legacy."}
        </p>

        {/* Company Slogan */}
      </div>
    </section>
  )
}
