import Image from 'next/image';

export default function TestingRegistrationForm() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold button-font text-gray-900 mb-2">
            Testing Registration Form
          </h1>
          <p className="text-gray-600 text-lg button-font">
            Complete your registration for professional track testing
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <form>
            {/* Applicant Type */}
            <div className="mb-6">
              <label className="block text-base button-font font-semibold text-gray-900 mb-3">
                Applicant Type
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="applicantType"
                    value="individual"
                    className="w-4 h-4 button-font text-red-600 border-gray-300 focus:ring-red-600"
                    defaultChecked
                  />
                  <span className="text-base button-font text-gray-700">Individual</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="applicantType"
                    value="organization"
                    className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-600"
                  />
                  <span className="text-base button-font text-gray-700">Organization</span>
                </label>
              </div>
            </div>

            {/* Contact Person and Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-base button-font font-semibold text-gray-900 mb-2">
                  Contact Person
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border button-font border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-base button-font font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+92 300 1234567"
                  className="w-full px-4 py-3 border button-font border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="mb-6">
              <label className="block text-base button-font font-semibold text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border button-font border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50"
              />
            </div>

            {/* Vehicle Details */}
            <div className="mb-6">
              <h3 className="text-base button-font font-semibold text-gray-900 mb-4">
                Vehicle Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block button-font text-sm text-gray-700 mb-2">
                    Make
                  </label>
                  <input
                    type="text"
                    placeholder="Toyota"
                    className="w-full px-4 py-2 border button-font border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm button-font text-gray-700 mb-2">
                    Model
                  </label>
                  <input
                    type="text"
                    placeholder="Supra"
                    className="w-full px-4 py-2 button-font border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm button-font text-gray-700 mb-2">
                    Year
                  </label>
                  <input
                    type="text"
                    placeholder="2024"
                    className="w-full px-4 py-2 button-font border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50"
                  />
                </div>
              </div>
            </div>

            {/* Testing Purpose */}
            <div className="mb-6">
              <label className="block text-base button-font font-semibold text-gray-900 mb-2">
                Testing Purpose
              </label>
              <select
                className="w-full px-4 py-3 button-font border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none bg-gray-50"
              >
                <option value="">Performance Testing</option>
                <option value="durability">Durability Testing</option>
                <option value="safety">Safety Testing</option>
                <option value="emissions">Emissions Testing</option>
              </select>
            </div>

            {/* Required Equipment */}
            <div className="mb-6">
              <label className="block text-base button-font font-semibold text-gray-900 mb-3">
                Required Equipment
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-red-600 button-font border-gray-300 rounded focus:ring-red-600"
                  />
                  <span className="text-base button-font text-gray-700">Timing System</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
                  />
                  <span className="text-base button-font text-gray-700">Data Logging</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
                  />
                  <span className="text-base button-font text-gray-700">Tire Warming</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
                  />
                  <span className="text-base button-font text-gray-700">Technical Support</span>
                </label>
              </div>
            </div>

            {/* Insurance Certificate Upload */}
            <div className="mb-6">
              <label className="block text-base button-font font-semibold text-gray-900 mb-2">
                Insurance Certificate
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-red-600 transition-colors cursor-pointer">
                <div className="flex flex-col items-center gap-2">
                  <div className="text-red-600">
                     <img
              src="/assets/images/browse.svg"
              alt="Menu"
              className="w-24 h-24 md:w-24 md:h-24"
            />
                  </div>
                  <p className="text-base button-font text-gray-700">Upload your insurance certificate</p>
                  <p className="text-sm button-font text-red-600">Browse Files</p>
                </div>
              </div>
            </div>

            {/* Technical Requirements */}
            <div className="mb-6">
              <label className="block text-base button-font font-semibold text-gray-900 mb-2">
                Technical Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Describe any specific technical requirements or equipment needs for your testing session..."
                className="w-full px-4 button-font py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50 resize-none"
              ></textarea>
            </div>

            {/* Preferred Start Date and Duration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-base button-font font-semibold text-gray-900 mb-2">
                  Preferred Start Date
                </label>
                <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  className="w-full px-4 py-3 button-font border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-base button-font font-semibold text-gray-900 mb-2">
                  Duration
                </label>
                <select
                  className="w-full px-4 py-3 button-font border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none bg-gray-50"
                >
                  <option value="">Half Day (4 hours)</option>
                  <option value="full">Full Day (8 hours)</option>
                  <option value="multi">Multiple Days</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full cursor-pointer bg-red-600 button-font hover:bg-red-700 text-white font-semibold py-4 rounded-lg transition-colors"
            >
              Book Testing Session
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}