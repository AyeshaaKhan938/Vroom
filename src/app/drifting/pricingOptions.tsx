import Image from 'next/image';

export default function PricingOptions() {
  const packages = [
    {
      icon: 'k5.svg',
      title: 'Beginner Drift',
      description: 'Perfect introduction to drifting with basic techniques and safety fundamentals',
      price: 'PKR 1,500',
      features: [
        '15-minute session',
        'Basic drift techniques',
        'Safety briefing',
               'Modified drift car'
      ]
    },
    {
      icon: 'k6.svg',
      title: 'Advanced Session',
      description: 'Enhanced training for experienced drivers with advanced techniques and performance analysis',
      price: 'PKR 4,000',
      features: [
        '45-minute sessions',
        'Advanced techniques',
               'Performance analysis',
        'Video recording included'
      ]
    },
    {
      icon: 'k7.svg',
      title: 'Pro Coaching',
      description: 'Intensive one-on-one coaching with professional drivers for serious skill development',
      price: 'PKR 5,500',
      features: [
        '60-minute session',
        'One-on-one coaching',
               'Professional techniques',
        'Detailed performance report'
      ]
    },
    {
      icon: 'k8.svg',
      title: 'Drift Day Pass',
      description: 'Full day access with multiple sessions, meals, and comprehensive drift experience',
      price: 'PKR 12,000',
      features: [
        'Full day access',
        'Multiple sessions',
               'Meals included',
        'Professional video package'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold button-font text-gray-900 mb-3">
            Choose Your Experience
          </h1>
          <p className="text-gray-600 button-font text-lg">
           Select the perfect drifting package for your skill level
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
                      src="/assets/images/Container.svg"
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
              <button className="w-full cursor-pointer bg-red-600 button-font hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors">
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}