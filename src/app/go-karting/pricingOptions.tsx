import Image from 'next/image';

export default function PricingOptions() {
  const packages = [
    {
      icon: 'k5.svg',
      title: 'Single Race',
      description: 'Perfect for first-time racers or those looking for a quick adrenaline rush.',
      price: 'PKR 1,500',
      features: [
        '15-minute session',
        'Safety gear included',
        'Track briefing'
      ]
    },
    {
      icon: 'k6.svg',
      title: '3-Race Package',
      description: 'Best value for racing enthusiasts wanting multiple sessions to improve their lap times.',
      price: 'PKR 4,000',
      features: [
        '3 x 15-minute sessions',
        'Lap time tracking',
        'Performance analysis'
      ]
    },
    {
      icon: 'k7.svg',
      title: 'Family Package',
      description: 'Perfect for families wanting to enjoy racing together with special group pricing.',
      price: 'PKR 5,500',
      features: [
        '4 people included',
        'Group race session',
        'Family photo included'
      ]
    },
    {
      icon: 'k8.svg',
      title: 'Birthday Party Package',
      description: 'Complete birthday celebration with racing, refreshments, and special arrangements.',
      price: 'PKR 12,000',
      features: [
        'Up to 8 participants',
        'Private party area',
        'Refreshments included'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold button-font text-gray-900 mb-3">
            Pricing Options
          </h1>
          <p className="text-gray-600 button-font text-lg">
            Choose the perfect package for your racing experience
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-4">
               
                  <Image
                    src={`/assets/images/${pkg.icon}`}
                    alt={`${pkg.title} icon`}
                    width={33}
                    height={33}
                    
                  />
             
                <h2 className="text-xl font-bold button-font text-gray-900">
                  {pkg.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-base button-font leading-relaxed mb-6">
                {pkg.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold button-font text-red-600">
                  {pkg.price}
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Image
                      src="/assets/images/green.svg"
                      alt="checkmark"
                      width={20}
                      height={20}
                      className="flex-shrink-0"
                    />
                    <span className="text-gray-800 button-font text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Select Button */}
              <button className="w-full bg-red-600 button-font hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors">
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}