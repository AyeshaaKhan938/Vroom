import Image from 'next/image';

export default function BookingConfirmationTicket() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6 text-center">
          <h1 className="text-4xl font-bold button-font text-red-600 mb-3">
            Thank You for Your Booking!
          </h1>
          <p className="text-gray-600 text-lg inter-font mb-6">
            Your racing experience has been confirmed
          </p>
          <button className="bg-red-600 inter-font hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 mx-auto">
           <Image
                              src="/assets/images/booking.svg"
                              alt="Time Attack Car"
                              width={27}
                              height={27}
                            />
            Print This Confirmation
          </button>
        </div>

        {/* Check-In Code Section */}
       <div className="bg-[#F5F5F5] rounded-lg p-8 mb-6 text-center">
  <h2 className="text-2xl font-bold button-font text-gray-900">
    Check-In Code
  </h2>

  <div className="inline-block p-8 rounded-lg mb-4">
    <div className="p-2">
      <Image
        src="/assets/images/QR.png"
        alt="QR Code"
        width={120}
        height={120}
      />
    </div>
  </div>

  <p className="text-xl font-bold w-[20%] mx-auto bg-[#E8F5E8] inter-font text-[#00C851] mb-2 text-center rounded-md py-2">
    VRC-2024-15789
  </p>

  <p className="text-base inter-font text-gray-600">
    Show this QR code at check-in
  </p>
</div>


        {/* Booking Details Section */}
        <div className="bg-[#F5F5F5] rounded-lg  p-8 mb-6">
          <h2 className="text-3xl font-bold button-font text-gray-900 mb-6">
            Booking Details
          </h2>
          
          <div className="flex justify-between inter-font items-center pb-4 mb-6 border-b border-gray-200">
            <span className="text-lg font-semibold text-gray-700">Reference Number:</span>
            <span className="text-lg font-bold text-red-600">VRC-2024-15789</span>
          </div>

          {/* Package Info */}
          <div className="mb-6 inter-font">
            <h3 className="text-base font-bold text-gray-900 mb-2">
              Time Attack VIP Package
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Ultimate racing experience with professional guidance
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-600 mb-1">Date & Time:</p>
                <p className="text-sm font-semibold text-gray-900">March 15, 2024 - 2:00 PM</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Duration:</p>
                <p className="text-sm font-semibold text-gray-900">60 minutes</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Participants:</p>
                <p className="text-sm font-semibold text-gray-900">2 Adults</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Total Paid:</p>
                <p className="text-sm font-bold text-green-600">PKR 14,625</p>
              </div>
            </div>
          </div>

          {/* Primary Participant */}
          <div>
            <h3 className="text-base inter-font font-bold text-gray-900 mb-3">
              Primary Participant
            </h3>
            <div className="text-sm text-gray-700 inter-font space-y-1">
              <p><span className="font-semibold">Name:</span></p>
              <p><span className="font-semibold">Contact:</span> +92 300 1234567</p>
              <p><span className="font-semibold">Email:</span> john.anderson@email.com</p>
            </div>
          </div>
        </div>

        {/* Venue Location */}
        <div className="bg-white rounded-lg border inter-font border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold button-font text-gray-900 mb-3">
            Venue Location
          </h2>
          <h3 className="text-base font-bold text-gray-900 mb-2">
            Vroom Racing Circuit
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            GT Road, Near Kallar Kahar, Chakwal District, Punjab, Pakistan
          </p>
          <button className="text-sm text-red-600 font-semibold hover:text-red-700 flex items-center gap-1">
          
      <Image
        src="/assets/images/direction.svg"
        alt="QR Code"
        width={20}
        height={20}
      />
            Get Directions
          </button>
        </div>

        {/* Pre-Arrival Instructions */}
        <div className="bg-[#F5F5F5] rounded-lg inter-font p-6 mb-6">
          <h2 className="text-lg font-bold button-font text-gray-900 mb-4">
            Pre-Arrival Instructions
          </h2>
          
          <h3 className="text-base font-bold text-gray-900 mb-3">
            What to Bring
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            <div className="flex items-center gap-2">
              <Image src="/assets/images/green.svg" alt="check" width={18} height={18} />
              <span className="text-sm text-gray-700">Valid CNIC or Passport</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/assets/images/green.svg" alt="check" width={18} height={18} />
              <span className="text-sm text-gray-700">Closed-toe shoes</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/assets/images/green.svg" alt="check" width={18} height={18} />
              <span className="text-sm text-gray-700">Long pants (recommended)</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/assets/images/green.svg" alt="check" width={18} height={18} />
              <span className="text-sm text-gray-700">This confirmation email</span>
            </div>
          </div>

          <h3 className="text-base font-bold text-gray-900 mb-3">
            Important Notes
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Please arrive 30 minutes before your scheduled time</li>
            <li>• Complete registration and safety briefing required</li>
            <li>• Age minimum: 18 years with valid driving license</li>
            <li>• Weather conditions may affect scheduling</li>
          </ul>
        </div>

        {/* Safety Requirements */}
        <div className="bg-[#FFF3E0] border-2 border-[#FF8800] inter-font rounded-lg p-6 mb-6">
          <h2 className="text-lg font-bold button-font text-[#FF8800] mb-4">
            Safety Requirements
          </h2>
          <ul className="space-y-2 text-sm text-gray-800">
            <li>• All participants must complete mandatory safety briefing</li>
            <li>• Professional safety gear will be provided (helmet, gloves, racing suit)</li>
            <li>• Follow all instructor guidelines during the experience</li>
            <li>• No alcohol or substances permitted before or during activities</li>
            <li>• Medical clearance may be required for certain conditions</li>
          </ul>
        </div>

        {/* Need Support */}
        <div className="bg-white rounded-lg border border-gray-200 inter-font shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold button-font text-gray-900 mb-4">
            Need Support?
          </h2>
          
          <div className="mb-4">
            <h3 className="text-base font-bold text-gray-900 mb-1">
              Call Support
            </h3>
            <p className="text-sm text-gray-600">+92 300 VROOM-01 (86661)</p>
          </div>

          <div className="mb-4">
            <h3 className="text-base font-bold text-gray-900 mb-1">
              Email Support
            </h3>
            <p className="text-sm text-gray-600">support@vroomracing.pk</p>
          </div>

          <div className="flex items-start gap-2">
          
             <Image src="/assets/images/times.svg" alt="check" width={32} height={32} />
          
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-1">
                Business Hours
              </h3>
              <p className="text-sm text-gray-600">9:00 AM - 6:00 PM (Mon-Sun)</p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-white rounded-lg shadow-sm p-10 text-center">
          <h3 className="text-xl font-bold text-gray-900 button-font mb-2 flex items-center justify-center gap-2">
          
            Follow Us
          </h3>
          <div className="flex justify-center gap-3 mb-6">
                <Image src="/assets/images/Link.svg" alt="check" width={40} height={40} />
            <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <Image src="/assets/images/youtube.svg" alt="check" width={40} height={40} />
            <Image src="/assets/images/tiktok.svg" alt="check" width={40} height={40} />
          </div>
    </div>
    <div className="border-t  border-gray-200 pt-4">
  {/* Flex row for flag + title */}
  <div className="flex items-center justify-center gap-2 mb-2">
    <Image src="/assets/images/flag.svg" alt="flag" width={30} height={30} />
    <h3 className="text-lg button-font font-bold text-gray-900">
      VROOM
    </h3>
  </div>

  <p className="text-sm inter-font text-gray-600 mb-4 text-center">
    Pakistan's premier drifting and racing circuit experience
  </p>

  <p className="text-xs text-gray-500 mb-2 text-center">
    © 2024 Vroom Racing Circuit. All rights reserved.
  </p>

  <div className="flex justify-center inter-font gap-2 text-xs mb-3">
    <a href="#" className="text-red-600 hover:text-red-700">Terms & Conditions</a>
    <span className="text-gray-400">|</span>
    <a href="#" className="text-red-600 hover:text-red-700">Privacy Policy</a>
    <span className="text-gray-400">|</span>
    <a href="#" className="text-red-600 hover:text-red-700">Cancellation Policy</a>
  </div>

  <p className="text-xs text-gray-500 inter-font leading-relaxed text-center">
    This is an automated email. Please do not reply directly to this message.
    If you need to reach us regarding your booking, please contact us at least 24 hours in advance.
  </p>
</div>

    
      </div>
    </div>
  );
}