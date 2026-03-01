'use client'
import Image from 'next/image'

export default function TimeAttackExperience() {
  const features = [
    {
      icon: '/assets/images/icon11.svg',
      title: 'Session Duration',
      description:
        '20 minutes of pure racing intensity with professional timing systems.',
    },
    {
      icon: '/assets/images/icon12.svg',
      title: 'Track Access',
      description:
        'Full access to our professional racing circuit with live timing data.',
    },
    {
      icon: '/assets/images/icon13.svg',
      title: 'Leaderboards',
      description:
        'Real-time leaderboard tracking with comprehensive lap time analysis.',
    },
    {
      icon: '/assets/images/icon14.svg',
      title: 'Safety Briefing Included',
      description:
        'Every session begins with a comprehensive safety briefing covering track rules, emergency procedures, and optimal racing lines. Professional safety equipment and certified instructors ensure maximum protection throughout your experience.',
    },
  ]

  return (
    <section className="w-full bg-[#F5F5F5] py-20 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl button-font font-bold text-gray-900 mb-3">
          Time Attack Experience
        </h2>
        <p className="text-gray-600 button-font text-base md:text-lg">
          Everything you need to know about your racing session
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-start gap-4 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex-shrink-0">
              {/* 🔴 The icon already includes the red background box */}
              <Image
                src={item.icon}
                alt={item.title}
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-gray-900 button-font font-semibold text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 button-font text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Last Wide Card */}
      <div className="max-w-6xl mx-auto mt-6">
        <div className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow duration-300">
          <div className="flex-shrink-0">
            <Image
              src={features[3].icon}
              alt={features[3].title}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-gray-900 button-font font-semibold text-lg mb-1">
              {features[3].title}
            </h3>
            <p className="text-gray-600 button-font text-base leading-relaxed">
              {features[3].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
