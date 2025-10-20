import Image from 'next/image';

export default function ExperienceDetails() {
  const details = [
    {
      icon: 'k1.svg',
      title: 'Session Duration',
      description: 'Each go-karting session lasts for 15 minutes of pure adrenaline-filled racing action on our professional track.',
      items: [
        '15-minute high-speed sessions',
        'Pre-race briefing included'
      ]
    },
    {
      icon: 'k2.svg',
      title: 'Safety Gear Provided',
      description: 'Professional-grade safety equipment is provided to ensure maximum protection during your racing experience.',
      items: [
        'Racing helmets',
        'Racing suits & gloves',
        'Safety briefing'
      ]
    },
    {
      icon: 'k3.svg',
      title: 'Kart Specifications',
      description: 'High-performance karts designed for safety and speed, suitable for drivers of different weights and skill levels.',
      items: [
        '200cc racing engines',
        'Adjustable for different weights',
        'Advanced safety features'
      ]
    },
    {
      icon: 'k4.svg',
      title: 'Track Layout Briefing',
      description: 'Comprehensive briefing on our professionally designed track layout to maximize your racing experience and safety.',
      items: [
        'Professional track design',
        'Multiple challenging turns',
        'Safety barriers throughout'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold button-font text-gray-900 mb-3">
            Experience Details
          </h1>
          <p className="text-gray-600 text-lg button-font">
            Everything you need to know about our go-karting experience
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {details.map((detail, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-8">
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-4">
            
                  <Image
                    src={`/assets/images/${detail.icon}`}
                    alt={`${detail.title} icon`}
                    width={33}
                    height={33}
                  />
          
                <h2 className="text-xl button-font font-bold text-gray-900">
                  {detail.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-700 button-font text-base leading-relaxed mb-6">
                {detail.description}
              </p>

              {/* Items List */}
              <ul className="space-y-3">
                {detail.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg 
                        className="w-3 h-3 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={3} 
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-800 button-font text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}