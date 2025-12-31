import React from 'react';
import Image from 'next/image';

const RacingExperiences = () => {
  const experiences = [
    {
      id: 1,
      title: 'Time Attack',
      image: '/assets/images/exp1.png',
      icon: '/assets/images/Background.svg',
      description: 'Push your Stark Camgate Kit to the limit on the track with timed laps and a chance to show off your speed.',
      price: 'From PKR 14,000',
      buttonText: 'View More'
    },
    {
      id: 2,
      title: 'Go Karting',
      image: '/assets/images/exp2.png',
      icon: '/assets/images/icon1.svg',
      description: 'Experience the thrill of speed on your fierce. Perfect for friends and families seeking an authentic and exciting adrenaline rush.',
      price: 'From PKR 2,000',
      buttonText: 'View More'
    },
    {
      id: 3,
      title: 'Drifting',
      image: '/assets/images/exp3.png',
      icon: '/assets/images/icon2.svg',
      description: 'Master the art of controlled chaos. Learn to drive sideways and slide through corners with style, skill, and precision.',
      price: 'From PKR 8,000',
      buttonText: 'View More'
    },
    {
      id: 4,
      title: 'Corporate Packages',
      image: '/assets/images/exp4.png',
      icon: '/assets/images/icon3.svg',
      description: 'Transform your next team building event with our corporate packages. Bring employees to build their team spirit, bond and energize.',
      price: 'Custom Pricing',
      buttonText: 'View More'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
      <h2 className="text-3xl font-bold button-font text-gray-900 dark:text-white mb-2">
  Racing Experiences
</h2>

        <p className="text-[#000000B2] button-font">Discover pure adrenaline adventure</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Image */}
            <div className="relative h-48 w-full">
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 relative flex-shrink-0">
                  <Image
                    src={exp.icon}
                    alt={`${exp.title} icon`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold button-font text-gray-900">{exp.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm button-font mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Price and Button */}
              <div className="flex items-center justify-between">
                <span className="text-red-600 button-font font-semibold">{exp.price}</span>
                <button className="bg-red-600 cursor-pointer button-font hover:bg-red-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors">
                  {exp.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Test Facility - Full Width */}
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative h-64 w-full">
          <Image
            src="/assets/images/exp5.png"
            alt="Test Facility"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 relative flex-shrink-0">
              <Image
                src="/assets/images/icon4.svg"
                alt="Test Facility icon"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl button-font font-bold text-gray-900">Test Facility</h3>
          </div>

          <p className="text-gray-600 button-font text-sm mb-6 leading-relaxed">
            Experience a professional grade facility for comprehensive vehicle testing, tuning, racing testing, and analysis of high-speed testing. Perfect for automotive enthusiasts and test drives enthusiasts.
          </p>

          <div className="flex items-center justify-between">
            <span className="text-red-600 button-font font-semibold">From PKR 12,000/Day</span>
            <button className="bg-red-600 cursor-pointer hover:bg-red-700 button-font text-white px-6 py-2 rounded text-sm font-medium transition-colors">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RacingExperiences;