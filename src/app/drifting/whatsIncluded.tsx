import Image from 'next/image';

export default function WhatsIncluded() {
  const features = [
    {
      icon: 'ic.svg',
      title: '30-Minute Sessions',
      description: 'Focused drift training sessions designed to maximize skill development and track time'
    },
    {
      icon: 'ic1.svg',
      title: 'Professional Instruction',
      description: 'Learn from certified drift instructors with years of competitive experience'
    },
    {
      icon: 'ic2.svg',
      title: 'Modified Drift Cars',
      description: 'Purpose-built drift vehicles with enhanced safety features and performance modifications'
    },
    {
      icon: 'ic3.svg',
      title: 'Tire Sets Included',
      description: 'Fresh tire sets provided for optimal grip and performance during your session'
    },
    {
      icon: 'ic4.svg',
      title: 'Video Recording',
      description: 'Professional video recording of your session for analysis and memories'
    },
    {
      icon: 'ic5.svg',
      title: 'Safety Equipment',
      description: 'Full safety gear including helmets, racing suits, and protective equipment'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold button-font text-gray-900 mb-3">
            What's Included
          </h1>
          <p className="text-gray-600 text-lg button-font">
            Everything you need for an authentic drifting experience
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
              
                  <Image
                    src={`/assets/images/${feature.icon}`}
                    alt={`${feature.title} icon`}
                    width={40}
                    height={40}
           
                  />
    
              </div>

              {/* Title */}
              <h2 className="text-lg font-bold button-font text-gray-900 mb-3">
                {feature.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-base button-font leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}