import Image from 'next/image';

export default function SafetyRequirements() {
  const mandatoryRequirements = [
    { icon: 't3.svg', text: 'Valid driving license required' },
    { icon: 't4.svg', text: 'Minimum age 18 years' },
    { icon: 't3.svg', text: 'Closed-toe shoes mandatory' },
    { icon: 't5.svg', text: 'Safety briefing attendance' },
    { icon: 't6.svg', text: 'Medical fitness declaration' }
  ];

  const safetyEquipment = [
    { icon: 't9.svg', text: 'Professional racing helmets' },
    { icon: 't7.svg', text: 'Fire-resistant racing suits' },
    { icon: 't8.svg', text: 'Safety harness systems' },
    { icon: 't9.svg', text: 'Track-side medical support' },
    { icon: 't10.svg', text: 'Emergency response team' }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl button-font font-bold text-gray-900 mb-3">
            Safety Requirements
          </h1>
          <p className="text-gray-600 button-font">
            Your safety is our top priority
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mandatory Requirements Card */}
          <div className="bg-[#F5F5F5] rounded-lg shadow-sm p-8">
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-6">
             
                <Image
                  src="/assets/images/t1.svg"
                  alt="shield icon"
                  width={30}
                  height={30}
                  className=""
                />
              <h2 className="text-xl font-bold button-font text-gray-900">
                Mandatory Requirements
              </h2>
            </div>

            {/* Requirements List */}
            <ul className="space-y-4">
              {mandatoryRequirements.map((requirement, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                  <Image
                    src={`/assets/images/${requirement.icon}`}
                    alt="icon"
                    width={20}
                    height={20}
                    className="flex-shrink-0"
                  />
                  <span className="text-gray-700 button-font">{requirement.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety Equipment Provided Card */}
          <div className="bg-[#F5F5F5] rounded-lg shadow-sm p-8">
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-6">
  
                <Image
                  src="/assets/images/t2.svg"
                  alt="shield icon"
                  width={30}
                  height={30}
                  className=""
                />
          
              <h2 className="text-xl font-bold button-font text-gray-900">
                Safety Equipment Provided
              </h2>
            </div>

            {/* Equipment List */}
            <ul className="space-y-4">
              {safetyEquipment.map((equipment, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                  <Image
                    src={`/assets/images/${equipment.icon}`}
                    alt="icon"
                    width={20}
                    height={20}
                    className="flex-shrink-0"
                  />
                  <span className="text-gray-700 button-font">{equipment.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}