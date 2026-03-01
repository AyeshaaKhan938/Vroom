import Image from 'next/image';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl button-font font-bold text-gray-900">
            Terms & Conditions
          </h1>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          {/* Booking Policy */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/images/ts1.svg"
                alt="booking icon"
                width={20}
                height={20}
              />
              <h2 className="text-xl font-bold button-font text-gray-900">
                Booking Policy
              </h2>
            </div>
            <p className="text-gray-700 button-font leading-relaxed">
              All bookings must be made at least 24 hours in advance. A 50% deposit is required to secure your slot, with the balance due on arrival. Cancellations made 48 hours before the session receive a full refund.
            </p>
          </div>

          {/* Liability & Insurance */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/images/ts2.svg"
                alt="liability icon"
                width={20}
                height={20}
              />
              <h2 className="text-xl button-font font-bold text-gray-900">
                Liability & Insurance
              </h2>
            </div>
            <p className="text-gray-700 button-font leading-relaxed">
              Participants acknowledge the inherent risks of motorsport activities. Comprehensive insurance coverage is provided, but participants must sign a liability waiver. Personal injury or property damage not covered by our insurance remains the participant's responsibility.
            </p>
          </div>

          {/* Code of Conduct */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/images/ts3.svg"
                alt="conduct icon"
                width={20}
                height={20}
              />
              <h2 className="text-xl font-bold button-font text-gray-900">
                Code of Conduct
              </h2>
            </div>
            <p className="text-gray-700 button-font leading-relaxed">
              All participants must follow track rules and instructor guidance. Dangerous driving, alcohol consumption, or failure to comply with safety requirements will result in immediate session termination without refund.
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-[#F5F5F5] p-6 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                 <Image
                src="/assets/images/ts4.svg"
                alt="conduct icon"
                width={26}
                height={26}
              />
              </div>
              <p className="text-gray-800 button-font text-sm leading-relaxed">
                By proceeding with registration, you acknowledge that you have read, understood, and agree to all terms and conditions. You confirm that you meet all safety requirements and accept full responsibility for your participation in the time attack session.
              </p>
            </div>
          </div>

          {/* Checkbox Agreement */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms-agreement"
              className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
              required
            />
            <label htmlFor="terms-agreement" className="text-gray-900 button-font cursor-pointer">
              I have read and agree to the Terms & Conditions
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}