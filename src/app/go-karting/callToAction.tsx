'use client'
import Image from 'next/image'

export default function CallToAction() {
  return (
    <div className=" bg-black py-16 px-4 flex items-center justify-center border-b border-white/20">
      <div className="max-w-4xl mx-auto text-center w-full">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl button-font font-bold text-white mb-6">
          Ready to Start Your Racing Journey?
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 text-lg button-font mb-10 max-w-2xl mx-auto">
      Complete your registration and join Pakistan's premier go-karting
experience. Feel the adrenaline, master the track, create unforgettable
memories.
        </p>

        {/* CTA Button + Secure Text (side by side) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
          <button className="bg-red-600 hover:bg-red-700 button-font text-white font-semibold py-4 px-8 rounded-lg transition-colors flex items-center gap-3 shadow-lg">
            Book Your Karting Experience
            <Image
              src="/assets/images/arrow.svg"
              alt="arrow"
              width={27}
              height={27}
            />
          </button>
        
        </div>

        {/* Divider Line */}
      
        {/* Contact Information */}
       
      </div>
    </div>
  )
}
