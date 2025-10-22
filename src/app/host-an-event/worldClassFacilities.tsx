import Image from 'next/image';

export default function WorldClassFacilities() {
  const facilities = [
    {
      icon: 'host1.svg',
      title: 'Professional Circuit',
      description: 'FIA-grade 2.4km racing circuit with multiple track configurations'
    },
    {
      icon: 'host2.svg',
      title: 'Event Spaces',
      description: 'Premium hospitality suites and conference facilities for up to 500 guests'
    },
    {
      icon: 'host3.svg',
      title: 'Catering Services',
      description: 'Full-service catering with gourmet options and custom menus'
    },
    {
      icon: 'host4.svg',
      title: 'Safety & Support',
      description: '24/7 medical support, professional safety crew, and event coordination'
    }
  ];

  return (
    <div className=" bg-[#F5F5F5] button-font py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            World-Class Facilities
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our state-of-the-art racing circuit offers premium amenities and professional-grade facilities for unforgettable events.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="text-center">
              {/* Icon Box */}
              <div className="flex justify-center mb-6">
             
                  <Image
                    src={`/assets/images/${facility.icon}`}
                    alt={facility.title}
                    width={42}
                    height={42}
              
                  />
           
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {facility.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}