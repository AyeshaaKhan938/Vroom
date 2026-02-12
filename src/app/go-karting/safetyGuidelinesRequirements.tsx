import Image from 'next/image';

export default function SafetyGuidelinesRequirements() {
  return (
    <div className=" bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold button-font text-gray-900 mb-3">
            Safety Guidelines & Requirements
          </h1>
          <p className="text-gray-600 button-font text-base">
            Important information for a safe and enjoyable racing experience
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Safety Guidelines Card */}
          <div className="bg-[#F5F5F5] rounded-lg p-8">
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-6">
             
                <Image
                  src="/assets/images/k9.svg"
                  alt="shield icon"
                  width={33}
                  height={33}

                />
        
              <h2 className="text-xl font-bold button-font text-gray-900">
                Safety Guidelines
              </h2>
            </div>

            {/* Guidelines List */}
            <ul className="space-y-4 text-gray-700">
              <li className="text-base button-font leading-relaxed">
                 All participants must attend mandatory safety briefing
              </li>
              <li className="text-base button-font leading-relaxed">
                 Proper safety gear must be worn at all times on track
              </li>
              <li className="text-base button-font leading-relaxed">
                 Follow track marshall instructions and flag signals
              </li>
              <li className="text-base button-font leading-relaxed">
                 Reckless driving or aggressive behavior will result in session termination
              </li>
              <li className="text-base button-font leading-relaxed">
                 No alcohol or drugs allowed before or during racing
              </li>
            </ul>
          </div>

          {/* Age & Requirements Card */}
          <div className="bg-[#F5F5F5] rounded-lg p-8">
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-6">
            
                <Image
                  src="/assets/images/k10.svg"
                  alt="user icon"
                  width={33}
                  height={33}
          
                />
          
              <h2 className="text-xl button-font font-bold text-gray-900">
                Age & Requirements
              </h2>
            </div>

            {/* Requirements List */}
            <ul className="space-y-4 text-gray-700">
              <li className="text-base button-font leading-relaxed">
                 All participants must be at least 12 years old
              </li>
              <li className="text-base button-font leading-relaxed">
                 Participants under 18 require parental consent form
              </li>
              <li className="text-base button-font leading-relaxed">
                 Weight range: 40kg - 120kg for optimal kart performance
              </li>
              <li className="text-base button-font leading-relaxed">
                 Basic physical fitness required for safe vehicle operation
              </li>
              <li className="text-base button-font leading-relaxed">
                 Closed-toe shoes mandatory - no sandals or flip-flops
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}