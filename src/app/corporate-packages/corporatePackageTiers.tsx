import Image from 'next/image';

export default function CorporatePackageTiers() {
  const packages = [
    {
      image: 'cor.png',
      icon: 'cor4.svg',
      title: 'Team Building',
      participants: '10-20 People',
      description: 'Perfect for small teams looking to enhance collaboration through shared adrenaline experiences and competitive spirit.',
      features: [
        'Go-kart racing sessions',
        'Team challenge competitions',
        'Light refreshments included'
      ],
      price: 'PKR 50,000',
      buttonText: 'Select Package',
      buttonStyle: 'bg-red-600 text-white hover:bg-red-700'
    },
    {
      image: 'cor1.png',
      icon: 'cor5.svg',
      title: 'Executive Package',
      participants: '20-30 People',
      description: 'Comprehensive experience combining professional racing with strategic team development and entertainment.',
      features: [
        'Multi-discipline racing experience',
        'Private track sessions',
        'Premium catering & networking'
      ],
      price: 'PKR 100,000',
      buttonText: 'Select Package',
      buttonStyle: 'bg-red-600 text-white hover:bg-red-700'
    },
    {
      image: 'cor2.png',
      icon: 'cor6.svg',
      title: 'Premium Corporate',
      participants: '50+ People',
      description: 'Ultimate corporate experience with full facility access, professional pit crew support, and customizable event programming.',
      features: [
        'Full facility exclusive access',
        'Professional photography & videography',
        'Luxury catering & hospitality'
      ],
      price: 'PKR 200,000',
      buttonText: 'Select Package',
      buttonStyle: 'bg-red-600 text-white hover:bg-red-700'
    },
    {
      image: 'cor3.png',
      icon: 'cor7.svg',
      title: 'Custom Events',
      participants: 'Quote Based',
      description: 'Completely bespoke racing experiences tailored to your specific corporate objectives, timelines, and budget requirements.',
      features: [
        'Fully customized experience design',
        'Flexible location & schedules',
        'Dedicated event coordinators'
      ],
      price: null,
      buttonText: 'Get Quote',
      buttonStyle: 'bg-red-600 text-white hover:bg-red-700'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold button-font text-gray-900 mb-3">
            Corporate Package Tiers
          </h1>
          <p className="text-gray-600 button-font text-lg">
            Choose the perfect experience for your team size and objectives
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={`/assets/images/${pkg.image}`}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-3">
                 
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

                {/* Participants */}
                <p className="text-base button-font text-gray-500 mb-4">
                  {pkg.participants}
                </p>

                {/* Description */}
                <p className="text-gray-700 text-base button-font leading-relaxed mb-4">
                  {pkg.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <span className="text-red-600 text-lg leading-none mt-0.5">•</span>
                      <span className="text-gray-700 text-base button-font">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price and Button */}
                <div className="flex items-center  justify-between">
                  {pkg.price ? (
                    <span className="text-2xl button-font font-bold text-red-600">
                      {pkg.price}
                    </span>
                  ) : (
                    <span className="text-2xl font-bold button-font text-red-600">
                      Custom Quote
                    </span>
                  )}
                  <button className={`${pkg.buttonStyle} font-semibold py-2 px-6 button-font rounded-lg transition-colors`}>
                    {pkg.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}