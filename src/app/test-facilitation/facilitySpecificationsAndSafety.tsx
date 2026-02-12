import Image from 'next/image';

export default function FacilitySpecificationsAndSafety() {
  const facilitySpecs = [
    {
      icon: 'icon47.svg',
      title: 'Track Length',
      description: '2.5km professional racing circuit with multiple configurations'
    },
    {
      icon: 'icon48.svg',
      title: 'Timing Accuracy',
      description: '±0.001 second precision with sector timing and speed traps'
    },
    {
      icon: 'icon49.svg',
      title: 'Data Acquisition',
      description: '32-channel telemetry system with real-time monitoring'
    },
    {
      icon: 'icon50.svg',
      title: 'Power Supply',
      description: '110V/220V power outlets available in all pit areas'
    }
  ];

  const safetyProtocols = [
    {
      icon: 'icon51.svg',
      title: 'Safety Equipment',
      description: 'FIA-approved helmets, HANS devices, and fire extinguishers required'
    },
    {
      icon: 'icon52.svg',
      title: 'Medical Support',
      description: 'On-site medical team and ambulance during all testing sessions'
    },
    {
      icon: 'icon53.svg',
      title: 'Vehicle Inspection',
      description: 'Mandatory technical inspection before track access'
    },
    {
      icon: 'icon54.svg',
      title: 'Safety Briefing',
      description: 'Comprehensive safety briefing mandatory for all participants'
    }
  ];

  const minimumCoverage = [
    { text: 'Vehicle damage: PKR 5,000,000', checked: true },
    { text: 'Third party liability: PKR 10,000,000', checked: true },
    { text: 'Personal accident: PKR 2,000,000', checked: true }
  ];

  const requiredDocumentation = [
    { text: 'Valid insurance certificate', icon: 'icon55.svg' },
    { text: 'Vehicle registration documents', icon: 'icon55.svg' },
    { text: "Driver's license and racing license", icon: 'icon55.svg' }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Section: Facility Specifications & Safety Protocols */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Facility Specifications */}
          <div>
            <h2 className="text-2xl font-bold button-font text-gray-900 mb-6">
              Facility Specifications
            </h2>
            <div className="space-y-6">
              {facilitySpecs.map((spec, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <Image
                      src={`/assets/images/${spec.icon}`}
                      alt={spec.title}
                      width={20}
                      height={20}
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold button-font text-gray-900 mb-1">
                      {spec.title}
                    </h3>
                    <p className="text-sm text-gray-600 button-font leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Protocols */}
          <div>
            <h2 className="text-2xl font-bold button-font text-gray-900 mb-6">
              Safety Protocols
            </h2>
            <div className="space-y-6">
              {safetyProtocols.map((protocol, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <Image
                      src={`/assets/images/${protocol.icon}`}
                      alt={protocol.title}
                      width={20}
                      height={20}
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold button-font text-gray-900 mb-1">
                      {protocol.title}
                    </h3>
                    <p className="text-sm button-font text-gray-600 leading-relaxed">
                      {protocol.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Insurance Requirements */}
        <div className="bg-[#F5F5F5] rounded-lg p-8">
          <h2 className="text-2xl button-font font-bold text-gray-900 mb-6">
            Insurance Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Minimum Coverage */}
            <div>
              <h3 className="text-base button-font font-bold text-gray-900 mb-4">
                Minimum Coverage
              </h3>
              <ul className="space-y-3">
                {minimumCoverage.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Image
                      src="/assets/images/green.svg"
                      alt="check"
                      width={18}
                      height={18}
                      className="flex-shrink-0 mt-0.5"
                    />
                    <span className="text-base button-font text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Required Documentation */}
            <div>
              <h3 className="text-base button-font font-bold text-gray-900 mb-4">
                Required Documentation
              </h3>
              <ul className="space-y-3">
                {requiredDocumentation.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Image
                      src={`/assets/images/${item.icon}`}
                      alt="document"
                      width={18}
                      height={18}
                      className="flex-shrink-0 mt-0.5"
                    />
                    <span className="text-base button-font text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}