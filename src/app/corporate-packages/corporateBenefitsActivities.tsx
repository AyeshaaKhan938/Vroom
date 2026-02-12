import Image from 'next/image';

export default function CorporateBenefitsActivities() {
  const benefits = [
    {
      icon: 'icon41.svg',
      title: 'Team Building Activities',
      description: 'Collaborative challenges designed to strengthen communication and trust through shared adrenaline experiences.'
    },
    {
      icon: 'icon42.svg',
      title: 'Private Track Access',
      description: 'Exclusive use of our professional racing circuit for focused team development without external distractions.'
    },
    {
      icon: 'icon43.svg',
      title: 'Premium Catering',
      description: 'Professional catering services with customizable menu options to fuel your team throughout the experience.'
    },
    {
      icon: 'icon44.svg',
      title: 'Professional Photography',
      description: 'High-quality documentation of your corporate event for marketing materials and team memories.'
    },
    {
      icon: 'icon45.svg',
      title: 'Custom Event Planning',
      description: 'Dedicated event coordinators to design experiences aligned with your corporate objectives and culture.'
    },
    {
      icon: 'icon46.svg',
      title: 'Performance Analytics',
      description: 'Detailed performance tracking and team analytics to measure improvement and competitive dynamics.'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold button-font text-gray-900 mb-3">
            Corporate Benefits & Activities
          </h1>
          <p className="text-gray-600 button-font text-lg">
            Comprehensive team building through motorsport excellence
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-[#F5F5F5]  rounded-lg p-6 hover:shadow-md transition-shadow"
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