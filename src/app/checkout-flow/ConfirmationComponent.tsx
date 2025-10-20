"use client";

import Image from "next/image";

export default function ConfirmationComponent() {
  return (
    <div className="min-h-screen button-font bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Hamburger Menu */}
            <button className="p-2">
              <div className="flex-1 flex justify-center">
                <img
                  src="/assets/images/hamburger-black.svg"
                  alt="Vroom Logo"
                  className="h-3"
                />
              </div>
            </button>

            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="flex-1 flex justify-center">
                  <img
                    src="/assets/images/Logo.png"
                    alt="Vroom Logo"
                    className="h-8"
                  />
                </div>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="text-gray-800 font-medium">Leaderboard</div>
          </div>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-400">Cart</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-400">Billing</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-400">Payment</span>
            <span className="text-gray-400">&gt;</span>
            <div className="flex items-center">
              <span className="text-green-600 font-semibold">Confirmation</span>
              <div className="flex-1 flex justify-center">
                <img
                  src="/assets/images/green-circle.svg"
                  alt="Vroom Logo"
                  className="h-4 ml-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Payment Successful Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20   mb-6">
            <Image
              src="/assets/images/Vector.svg"
              alt="Time Attack Car"
              width={72}
              height={72}
            />
          </div>
          <h1 className="text-4xl font-bold text-[#00C851] mb-4">
            Payment Successful!
          </h1>
          <p className="text-lg text-[#000000B2] mb-6">
            Your booking has been confirmed
          </p>
          <div className="inline-block bg-[#E8F5E8] rounded-lg px-6 py-3">
            <span className="text-[#00C851] font-semibold">
              Booking Reference: VRC-2024-15789
            </span>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Booking Details Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Booking Details
              </h2>

              {/* Event Info */}
              <div className="flex items-start space-x-4 mb-6">
                <Image
                  src="/assets/images/Order5.png"
                  alt="Time Attack Car"
                  width={70}
                  height={50}
                  className="rounded"
                />

                <div className="w-full">
                  <h3 className="font-semibold text-gray-900">
                    Time Attack VIP Package
                  </h3>

                  <div className="mt-3 space-y-2 text-sm text-gray-600 w-full">
                    <div className="flex justify-between w-full">
                      <span className="w-1/2 text-gray-700">Date & Time:</span>
                      <span className="w-1/2 text-right text-gray-800 font-medium">
                        March 15, 2024 - 2:00 PM
                      </span>
                    </div>

                    <div className="flex justify-between w-full">
                      <span className="w-1/2 text-gray-700">Duration:</span>
                      <span className="w-1/2 text-right text-gray-800 font-medium">
                        60 minutes
                      </span>
                    </div>

                    <div className="flex justify-between w-full">
                      <span className="w-1/2 text-gray-700">Participants:</span>
                      <span className="w-1/2 text-right text-gray-800 font-medium">
                        2 Adults
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Participant Information */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Participant Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[#F5F5F5] text-sm rounded-lg">
                  {/* Column 1 */}
                  <div>
                    <p className="text-gray-600 font-medium">
                      Primary Participant:
                    </p>
                    <p className="text-gray-900">John Anderson</p>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <p className="text-gray-600 font-medium">Contact:</p>
                    <p className="text-gray-900">+92 300 1234567</p>
                  </div>

                  {/* Column 3 */}
                  <div>
                    <p className="text-gray-600 font-medium">Email:</p>
                    <p className="text-gray-900">john.anderson@email.com</p>
                  </div>

                  {/* Column 4 */}
                  <div>
                    <p className="text-gray-600 font-medium">
                      Emergency Contact:
                    </p>
                    <p className="text-gray-900">+92 300 7664321</p>
                  </div>
                </div>
              </div>

              {/* Venue Address */}
              <div className="mb-6 p-2 bg-[#F5F5F5]">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Venue Address
                </h3>
                <div className="text-sm text-gray-600">
                  <div className="font-medium text-gray-900 mb-1">
                    Vroom Racing Circuit
                  </div>
                  <div className="mb-2">
                    GT Road, Near Kallar Kahar, Chakwal District, Punjab,
                    Pakistan
                  </div>
                  <button className="flex items-center text-red-600 hover:text-red-700">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View on Map
                  </button>
                </div>
              </div>

              {/* What to Bring */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  What to Bring
                </h3>
                <div className="grid grid-cols-1 p-4 bg-[#F5F5F5] sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  {[
                    "Valid CNIC or Passport",
                    "Long pants recommended",
                    "Closed-toe shoes",
                    "Confirmation email",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Image
                        src="/assets/images/green-circle.svg"
                        alt="Time Attack Car"
                        width={20}
                        height={20}
                        className="rounded"
                      />
                      <span className="text-gray-700 ml-2">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment Receipt Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Payment Receipt
              </h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    Time Attack VIP Package (1x)
                  </span>
                  <span className="text-gray-900">PKR 12,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Service Fee</span>
                  <span className="text-gray-900">PKR 500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">GST (17%)</span>
                  <span className="text-gray-900">PKR 2,125</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">
                    Total Paid
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    PKR 14,625
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Payment Method: **** **** 3456
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Transaction ID: TXN-2024-15789-VRC
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Payment Date: March 10, 2024 at 3:45 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions Card */}
            <div className="bg-[#F5F5F5] rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center">
                  <Image
                    src="/assets/images/download.svg"
                    alt="Time Attack Car"
                    width={24}
                    height={24}
                    className="rounded"
                  />
                  Download Receipt
                </button>
                <button className="w-full bg-white border border-red-600 text-red-600 py-3 px-4 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center">
                  <Image
                    src="/assets/images/calendar.svg"
                    alt="Time Attack Car"
                    width={24}
                    height={24}
                    className="rounded"
                  />
                  Add to Calendar
                </button>
                <button className="w-full border bg-white border-red-600 text-red-600 py-3 px-4 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                  Share Booking
                </button>
              </div>
            </div>

            {/* Next Steps Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Next Steps
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Confirmation Email
                    </div>
                    <div className="text-sm text-gray-600">
                      Check your inbox for detailed booking confirmation
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Arrive 30 Minutes Early
                    </div>
                    <div className="text-sm text-gray-600">
                      Complete registration and safety briefing
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Enjoy Your Experience
                    </div>
                    <div className="text-sm text-gray-600">
                      Get ready for the ultimate racing thrill!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="bg-[#F5F5F5] rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Need Help?
              </h2>
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">
                    Call Support
                  </div>
                  <div className="text-[#000000B2] font-medium">
                    +92 300 VROOM-DI
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">
                    Email Support
                  </div>
                  <div className="text-[#000000B2] font-medium">
                    support@vroomracing.pk
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex items-center text-sm">
                    <Image
                      src="/assets/images/times.svg"
                      alt="Time Attack Car"
                      width={24}
                      height={24}
                      className="rounded"
                    />
                    <span className="font-semibold text-gray-900">
                      Modify Booking
                    </span>
                  </div>
                  <div className="text-sm text-[#000000B2] mt-1">
                    Up to 24 hours before
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
