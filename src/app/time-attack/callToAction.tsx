'use client'
import Image from 'next/image'

export default function CallToAction() {
  return (
    <div className=" bg-black py-16 px-4 flex items-center justify-center border-b border-white/20">
      <div className="max-w-4xl mx-auto text-center w-full">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl button-font font-bold text-white mb-6">
          Ready to Race Against Time?
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 text-lg button-font mb-10 max-w-2xl mx-auto">
          Complete your registration now and secure your spot in Pakistan's premier time attack experience.
        </p>

        {/* CTA Button + Secure Text (side by side) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
          <button className="bg-red-600 hover:bg-red-700 button-font text-white font-semibold py-4 px-8 rounded-lg transition-colors flex items-center gap-3 shadow-lg">
            Complete Registration
            <Image
              src="/assets/images/arrow.svg"
              alt="arrow"
              width={27}
              height={27}
            />
          </button>
          <p className="text-gray-400 button-font text-sm md:ml-2">
            Secure payment processing
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-800 mb-8"></div>

        {/* Contact Information */}
        <div className="text-gray-400 button-font text-sm">
          <p>
            Questions? Contact us at{' '}
            <a
              href="mailto:info@luxurycircuit.com"
              className="text-red-600 hover:text-red-500 button-font transition-colors"
            >
              info@luxurycircuit.com
            </a>{' '}
            or call{' '}
            <a
              href="tel:+92-XXX-XXXXXXXX"
              className="text-red-600 hover:text-red-500 button-font transition-colors"
            >
              +92-XXX-XXXXXXXX
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
