import Image from 'next/image';

export default function SafetyAndLicensingRequirements() {
  const safetyRequirements = [
    'All participants must complete a safety briefing before the session',
    'Professional safety equipment is mandatory and provided',
    'Medical clearance may be required for certain health conditions',
    'Participants must follow all instructor guidelines and track rules',
    'Closed-toe shoes and appropriate clothing required'
  ];

  const licensingRequirements = [
    'Minimum 2 years of driving experience recommended',
    'International licenses accepted with proper documentation',
    'License verification required at check-in'
  ];

  return (
    <div className=" bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Safety Requirements */}
          <div>
            <h2 className="text-3xl font-bold button-font text-gray-900 mb-8">
              Safety Requirements
            </h2>
            <ul className="space-y-4">
              {safetyRequirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Image
                    src="/assets/images/red.svg"
                    alt="warning"
                    width={28}
                    height={28}
                  />
                  <span className="text-gray-700 text-base button-font leading-relaxed">
                    {requirement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Licensing Requirements */}
          <div>
            <h2 className="text-3xl font-bold button-font text-gray-900 mb-8">
              Licensing Requirements
            </h2>

            {/* Valid License Mandatory Box */}
            <div className="bg-[#F5F5F5] rounded-lg p-8 mb-6 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                
                  <Image
                    src="/assets/images/triangle.svg"
                    alt="warning"
                    width={48}
                    height={48}
                  />
       
                <h3 className="text-lg font-bold button-font text-gray-900 mt-2">
                  Valid License Mandatory
                </h3>
              </div>
              <p className="text-gray-700 text-base button-font leading-relaxed">
                A valid driving license is absolutely required for all drifting experiences. This is non-negotiable for safety and legal reasons.
              </p>
            </div>

            {/* Additional Requirements List */}
            <ul className="space-y-4">
              {licensingRequirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Image
                    src="/assets/images/red.svg"
                    alt="requirement"
                    width={28}
                    height={28}
                  />
                  <span className="text-gray-700 text-base button-font leading-relaxed">
                    {requirement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
