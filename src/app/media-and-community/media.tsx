'use client'

export default function Media() {
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
    <section className="relative w-full bg-[#F5F5F5]  overflow-hidden">
     
     

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between py-4">
          <button className="p-2">
            <img
              src="/assets/images/hamburger-black.svg"
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
          <div className="text-black text-base md:text-lg tracking-normal">
            Leaderboard
          </div>
        </header>

 
 <div className="min-h-screen ">
      {/* Header */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold">Media And Community</h1>
      </div>

      {/* Racing Highlights Section */}
      <div className="px-6 py-12 button-font md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">RACING HIGHLIGHTS</h2>
        <p className="text-gray-700 mb-8">
          Relive the most exciting moments from our track with professionally captured racing footage and driver interviews
        </p>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large Video Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative">
              <img 
                src="/assets/images/md1.png" 
                alt="Championship Finals 2024" 
                className="w-full h-80 object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
               
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Championship Finals 2024</h3>
              <p className="text-gray-600 text-sm mb-4">
                Watch the thrilling finale of our annual championship series featuring the top drivers competing for ultimate glory
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>15:30 min</span>
                <span>•</span>
                <span>125K views</span>
                <span>•</span>
                <span>2 days ago</span>
              </div>
            </div>
          </div>

          {/* Right Column - Two Smaller Videos */}
          <div className="flex flex-col gap-6">
            {/* Video Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <img 
                  src="/assets/images/md2.png" 
                  alt="Driver Spotlight: Marcus Chen" 
                  className="w-full h-48 object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                 
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Driver Spotlight: Marcus Chen</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Exclusive interview with our championship leader
                </p>
                <div className="text-xs text-gray-500">8:45 min</div>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <img 
                  src="/assets/images/md3.png" 
                  alt="Behind the Scenes" 
                  className="w-full h-48 object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                 
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Behind the Scenes</h3>
                <p className="text-gray-600 text-sm mb-3">
                  See what happens in the pit before race day
                </p>
                <div className="text-xs text-gray-500">12:20 min</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
      </div>
    </section>
  )
}
