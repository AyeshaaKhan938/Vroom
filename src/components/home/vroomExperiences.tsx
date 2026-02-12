'use client'

import { useRouter } from 'next/navigation'

export default function VroomExperiences() {
  const router = useRouter()

  const experiences = [
    { name: 'Time Attack', path: '/time-attack' },
    { name: 'Go Karting', path: '/go-karting' },
    { name: 'Drifting', path: '/drifting' },
    { name: 'Corporate Packages', path: '/corporate-packages' },
    { name: 'Test Facilitation', path: '/test-facilitation' },
  ]

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/videos/vroom-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-start justify-between px-6 md:px-12 lg:px-20 py-16 md:py-24">
        {/* Left Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-[#E8E7E7] text-3xl md:text-3xl lg:text-5xl font-normal mb-4">
            Experiences
          </h2>
          <div className="w-90 h-0.5 bg-red-600 mb-8"></div>

          <p className="text-[#E8E7E7] text-base md:text-lg leading-relaxed button-font max-w-lg">
            Discover the thrill of driving like never before. From the precision of Time Attack to the rush of Go Karting, the excitement of Drifting, exclusive Corporate Packages, and full access to our state-of-the-art Test Facility, Vroom brings experiences that fuel passion and performance for everyone.
          </p>
        </div>

        {/* Right Section - Experience Links */}
        <div className="w-full md:w-auto flex flex-col mt-64 space-y-2 md:space-y-2">
          {experiences.map((experience, index) => (
            <div
              key={index}
              onClick={() => router.push(experience.path)}
              className="text-[#E8E7E7] text-xl md:text-2xl lg:text-3xl font-normal hover:text-red-500 transition-colors cursor-pointer"
            >
              {experience.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
