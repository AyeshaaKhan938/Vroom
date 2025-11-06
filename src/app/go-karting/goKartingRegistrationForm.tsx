import Image from 'next/image';

export default function GoKartingRegistrationForm() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]  py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold button-font text-gray-900 mb-3">
            Registration Form
          </h1>
          <p className="text-gray-600 text-lg button-font">
            Fill out the details below to complete your go-karting registration
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 mb-8">
          <form>
            {/* Row 1: Full Name and Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm button-font font-semibold text-gray-900 mb-2">
                  Full Name <span className="text-gray-900">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full button-font px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] "
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
                  placeholder="+92 300 1234567"
                  className="w-full px-4 button-font py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] "
                  required
                />
              </div>
            </div>

            {/* Row 2: Email Address and Age */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Email Address */}
              <div>
                <label className="block text-sm font-semibold button-font text-gray-900 mb-2">
                  Email Address <span className="text-gray-900">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full button-font px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] "
                  required
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-semibold button-font text-gray-900 mb-2">
                  Age <span className="text-gray-900">*</span>
                </label>
                <input
                  type="number"
                  placeholder="18"
                  className="w-full button-font px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] "
                  required
                />
              </div>
            </div>

            {/* Row 3: Weight and Group Size */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Weight */}
              <div>
                <label className="block text-sm button-font font-semibold text-gray-900 mb-2">
                  Weight (kg) <span className="text-gray-900">*</span>
                </label>
                <input
                  type="number"
                  placeholder="70"
                  className="w-full button-font px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] "
                  required
                />
                <p className="text-xs text-gray-500 button-font mt-1">Required for kart selection</p>
              </div>

              {/* Group Size */}
              <div>
                <label className="block text-sm font-semibold button-font text-gray-900 mb-2">
                  Group Size
                </label>
                <input
                  type="number"
                  placeholder="1"
                  className="w-full px-4 button-font py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] "
                />
              </div>
            </div>

            {/* Row 4: Session Preference and Preferred Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Session Preference */}
              <div>
                <label className="block text-sm font-semibold button-font text-gray-900 mb-2">
                  Session Preference
                </label>
                <select
                  className="w-full px-4 py-3 border button-font border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none bg-[#F5F5F5] "
                >
                  <option value="">Morning (9:00 - 12:00)</option>
                  <option value="afternoon">Afternoon (12:00 - 4:00)</option>
                  <option value="evening">Evening (4:00 - 8:00)</option>
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block button-font text-sm font-semibold text-gray-900 mb-2">
                  Preferred Date <span className="text-gray-900">*</span>
                </label>
                <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  className="w-full px-4 button-font py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] "
                  required
                />
              </div>
            </div>

            {/* Special Requirements */}
            <div className="mb-6">
              <label className="block text-sm button-font font-semibold text-gray-900 mb-2">
                Special Requirements
              </label>
              <textarea
                rows={4}
                placeholder="Please mention any dietary restrictions, accessibility needs, or other special requirements..."
                className="w-full button-font px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]  resize-none"
              ></textarea>
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
              width={32}
              height={32}
            />
          </button>
        </div>
      </div>
    </div>
  );
}