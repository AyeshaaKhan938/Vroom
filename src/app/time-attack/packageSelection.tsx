import Image from 'next/image';

export default function PackageSelection() {
  const packages = [
    {
      name: 'Practice Session',
      price: 'PKR 3,000',
      description: 'Perfect for beginners and casual drivers',
      features: [
        '20-minute track session',
        'Basic timing system',
        'Safety briefing included',
        'Personal lap times'
      ],
      popular: false
    },
    {
      name: 'Competitive Session',
      price: 'PKR 4,500',
      description: 'For serious drivers seeking competition',
      features: [
        '20-minute track session',
        'Advanced timing system',
        'Live leaderboard tracking',
        'Sector time analysis',
        'Performance data export'
      ],
      popular: true
    },
    {
      name: 'VIP Package',
      price: 'PKR 7,000',
      description: 'Premium experience with full analysis',
      features: [
        '30-minute track session',
        'Professional timing systems',
        'Complete timing data analysis',
        'Personal racing coach',
        'Video analysis session',
        'Performance improvement report'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold button-font text-gray-900 mb-3">
            Choose Your Package
          </h1>
          <p className="text-gray-600 text-lg button-font">
            Select the perfect time attack experience for your skill level
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg button-font shadow-sm ${
                pkg.popular ? 'border-2 border-red-600' : 'border border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-600 text-white button-font text-xs font-semibold px-4 py-1 rounded-md">
                    POPULAR
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Package Name */}
                <h2 className="text-xl font-bold button-font text-gray-900 text-center mb-2">
                  {pkg.name}
                </h2>

                {/* Price */}
                <div className="text-center mb-4">
                  <span className="text-4xl button-font font-bold text-red-600">
                    {pkg.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-base text-gray-600 button-font text-center mb-6">
                  {pkg.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Image
                        src="/assets/images/Container.svg"
                        alt="tick"
                        width={20}
                        height={20}
                        className="mt-1 flex-shrink-0"
                      />
                      <span className="text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Select Button */}
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded transition-colors flex items-center justify-center gap-2">
                  <Image
                    src="/assets/images/arrow.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                  <span className='button-font'>Select Package</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}