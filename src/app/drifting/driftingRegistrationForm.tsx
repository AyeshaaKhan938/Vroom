import Image from 'next/image';

export default function DriftingRegistrationForm() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold button-font text-gray-900 mb-3">
            Registration Form
          </h1>
          <p className="text-gray-600 text-lg button-font">
            Complete your drifting experience booking
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 mb-8">
          <form>
            {/* Row 1: Full Name and Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold button-font text-gray-900 mb-2">
                  Full Name <span className="text-gray-900">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border button-font border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold button-font text-gray-900 mb-2">
                  Phone Number <span className="text-gray-900">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border button-font border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                  required
                />
              </div>
            </div>

            {/* Row 2: Email Address and Driving License Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Email Address */}
              <div>
                <label className="block text-sm button-font font-semibold text-gray-900 mb-2">
                  Email Address <span className="text-gray-900">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border button-font border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                  required
                />
              </div>

              {/* Driving License Number */}
              <div>
                <label className="block text-sm button-font font-semibold text-gray-900 mb-2">
                  Driving License Number <span className="text-gray-900">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter license number"
                  className="w-full px-4 py-3 button-font border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                  required
                />
              </div>
            </div>

            {/* Row 3: Experience Level and Manual Transmission Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Experience Level */}
              <div>
                <label className="block text-sm  button-font font-semibold text-gray-900 mb-2">
                  Experience Level <span className="text-gray-900">*</span>
                </label>
                <select
                  className="w-full px-4 py-3 border button-font border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none bg-[#F5F5F5]"
                  required
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="professional">Professional</option>
                </select>
              </div>

              {/* Manual Transmission Experience */}
              <div>
                <label className="block text-sm button-font font-semibold text-gray-900 mb-2">
                  Manual Transmission Experience <span className="text-gray-900">*</span>
                </label>
                <select
                  className="w-full px-4 py-3 button-font border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none bg-[#F5F5F5]"
                  required
                >
                  <option value="">Select option</option>
                  <option value="yes">Yes - Experienced</option>
                  <option value="some">Some Experience</option>
                  <option value="no">No Experience</option>
                </select>
              </div>
            </div>

            {/* Previous Drift Experience */}
            <div className="mb-6">
              <label className="block text-sm button-font font-semibold text-gray-900 mb-2">
                Previous Drift Experience
              </label>
              <textarea
                rows={4}
                placeholder="Describe any previous drifting or motorsport experience (optional)"
                className="w-full px-4 py-3 button-font border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] resize-none"
              ></textarea>
            </div>

            {/* Row 4: Preferred Session Date and Preferred Time Slot */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Preferred Session Date */}
              <div>
                <label className="block text-sm button-font font-semibold text-gray-900 mb-2">
                  Preferred Session Date <span className="text-gray-900">*</span>
                </label>
                <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  className="w-full px-4 py-3 button-font border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                  required
                />
              </div>

              {/* Preferred Time Slot */}
              <div>
                <label className="block text-sm button-font font-semibold text-gray-900 mb-2">
                  Preferred Time Slot <span className="text-gray-900">*</span>
                </label>
                <select
                  className="w-full px-4 py-3 button-font border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none bg-[#F5F5F5]"
                  required
                >
                  <option value="">Select time slot</option>
                  <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (12:00 PM - 3:00 PM)</option>
                  <option value="evening">Evening (3:00 PM - 6:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Insurance Information */}
            <div className="mb-6">
              <label className="block text-sm button-font font-semibold text-gray-900 mb-2">
                Insurance Information
              </label>
              <input
                type="text"
                placeholder="Insurance company and policy number (if available)"
                className="w-full px-4 py-3 button-font border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
              />
            </div>
          </form>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-600 cursor-pointer hover:bg-red-700 button-font text-white font-semibold py-4 px-8 rounded-lg transition-colors flex items-center gap-3 shadow-lg"
          >
            Complete Registration
            <Image
              src="/assets/images/arrow.svg"
              alt="arrow"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </div>
  );
}