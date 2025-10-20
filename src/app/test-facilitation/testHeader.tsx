'use client'

export default function TestHeader() {
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
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/assets/images/test.png')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between py-4">
          <button className="p-2">
            <img
              src="/assets/images/hamburger.svg"
              alt="Menu"
              className="w-30 h-30 md:w-30 md:h-30"
            />
          </button>
          <div className="flex-1 flex justify-center">
            <img
              src="/assets/images/Logo.png"
              alt="Vroom Logo"
              className="h-8 md:h-10"
            />
          </div>
          <div className="text-[#E8E7E7] text-base md:text-lg tracking-normal">
            Leaderboard
          </div>
        </header>

        {/* Headline */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-3xl button-font md:text-5xl font-semibold mb-3">
         Track Testing Registration
          </h1>
          <p className="text-white/85 max-w-3xl button-font text-sm md:text-base">
          Access our professional-grade facility for vehicle testing, tuning, and development with
state-of-the-art equipment.
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
