import Image from 'next/image';

export default function PricingOptions() {
  const packages = [
    {
      icon: 'k5.svg',
      title: 'Half Day',
      description: '4 hours of track access with basic timing and technical support',
      price: 'PKR 1,500',
      features: [
        '4 hours track access',
        'Basic timing system',
        'Pit area access',
             
      ]
    },
    {
      icon: 'k6.svg',
      title: 'Full Day',
      description: '8 hours of comprehensive testing with full technical support',
      price: 'PKR 4,000',
      features: [
        '8 hours track access',
        'Advanced timing & data logging',
               'Full technical support',
        'Tire warming stations'
      ]
    },
    {
      icon: 'k7.svg',
      title: 'Weekly Pass',
      description: 'Unlimited access for 7 days with priority booking',
      price: 'PKR 5,500',
      features: [
        'Unlimited track access',
        'Priority booking',
               'All facilities included',
     
      ]
    },
    {
      icon: 'k8.svg',
      title: 'Monthly Membership',
      description: 'Premium membership with exclusive benefits and dedicated support',
      price: 'PKR 12,000',
      features: [
        'Unlimited premium access',
        'Dedicated engineer support',
               'Custom testing programs',
   
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold button-font text-gray-900 mb-3">
            Testing Packages
          </h1>
          <p className="text-gray-600 button-font text-lg">
           Choose the package that fits your testing requirements
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