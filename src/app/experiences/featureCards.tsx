'use client'
import Image from 'next/image'

export default function FeatureCards() {
  const features = [
    {
      icon: '/assets/images/icon5.svg',
      title: 'Safety First',
      description:
        'Professional safety equipment and certified instructors ensure maximum protection.',
    },
    {
      icon: '/assets/images/icon6.svg',
      title: 'Professional Track',
      description:
        'Pakistan’s first dedicated drifting and racing circuit built to international standards.',
    },
    {
      icon: '/assets/images/icon7.svg',
      title: 'Expert Guidance',
      description:
        'Learn from professional drivers and experienced instructors at every level.',
    },
  ]

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-6 py-12 px-6 bg-white">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-[#F5F5F5] shadow-sm rounded-xl p-6 w-full md:w-1/3 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex-shrink-0">
              <Image
                src={item.icon}
                alt={item.title}
                width={56}
                height={56}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-gray-900 button-font font-semibold text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-gray-500 button-font text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
