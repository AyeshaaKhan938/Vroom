'use client'

export default function CorporateHeader() {
  const handleScrollDown = () => {
    const section = document.getElementById('experiences-content')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    } else {
      // fallback: scroll down a bit if section not found
      window.scrollTo({
        top: window.innerHeight * 0.8,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/assets/images/Section.png')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col">
        {/* Headline */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-3xl button-font md:text-5xl font-semibold mb-3">
      Corporate Event Registration
          </h1>
          <p className="text-white/85 max-w-3xl button-font text-sm md:text-base">
         Transform your team dynamics with premium racing experiences designed for
corporate excellence and professional relationship building.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="pb-6 flex items-center justify-center">
          <button
            onClick={handleScrollDown}
            className="flex items-center gap-2 text-white/90 text-sm md:text-base button-font hover:text-white transition-colors"
          >
            Explore 
            <img
              src="/assets/images/margin.svg"
              alt="Scroll down"
              className="w-8 h-8 md:w-8 md:h-8 animate-bounce"
            />
          </button>
        </div>
      </div>
    </section>
  )
}
