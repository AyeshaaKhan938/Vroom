import Image from 'next/image';

export default function ProfessionalTesting() {
  const benefits = [
    {
      icon: 'test1.svg',
      title: 'Private Track Access',
      description: 'Exclusive access to our professional racing circuit with various track configurations for comprehensive testing.'
    },
    {
      icon: 'test2.svg',
      title: 'Timing Systems',
      description: 'Professional-grade timing equipment with lap analysis and sector timing for precise performance measurement.'
    },
    {
      icon: 'test3.svg',
      title: 'Data Logging',
      description: 'Advanced telemetry and data acquisition systems for comprehensive vehicle performance analysis.'
    },
    {
      icon: 'test4.svg',
      title: 'Technical Support',
      description: 'Expert technical team available for setup assistance, troubleshooting, and performance optimization.'
    },
    {
      icon: 'test5.svg',
      title: 'Tire Warming',
      description: 'Professional tire warming stations to ensure optimal tire temperatures for accurate testing results.'
    },
    {
      icon: 'test6.svg',
      title: 'Pit Area Access',
      description: 'Fully equipped pit areas with tools, air compressors, and workspace for vehicle preparation and maintenance.'
    }
  ];

  return (
    <div className="min-h-screen h-full bg-[#F5F5F5] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold button-font text-gray-900 mb-3">
           Professional Testing Facilities
          </h1>
          <p className="text-gray-600 button-font text-lg">
            World-class equipment and services for comprehensive vehicle testing
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white  rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
               
                  <Image
                    src={`/assets/images/${benefit.icon}`}
                    alt={`${benefit.title} icon`}
                    width={45}
                    height={45}
             
                  />
             

                {/* Content */}
                <div>
                  <h2 className="text-lg font-bold button-font text-gray-900 mb-3">
                    {benefit.title}
                  </h2>
                  <p className="text-gray-700 text-base button-font leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}