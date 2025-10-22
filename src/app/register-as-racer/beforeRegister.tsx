"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function BeforeRegister() {
      const router = useRouter()
  const [formData, setFormData] = useState({
    eventType: "Corporate Event",
    expectedParticipants: "",
    contactPerson: "",
    phone: "",
    preferredDate: "",
    budgetRange: "$2,500 - $5,000",
    company: "",
    email: "",
    eventDescription: "",
    specialRequirements: "",
    cateringNeeds: "No catering needed",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="bg-[#F5F5F5] border-b border-gray-200">
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

<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-md rounded-2xl max-w-3xl w-full p-8 md:p-12">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8 button-font">
          Before You Register
        </h2>

        {/* Requirements */}
        <div className="space-y-6 text-gray-800">
          {/* Safety */}
          <div>
            <h3 className="text-lg font-semibold button-font mb-1">Safety</h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 button-font">
              All participants must wear a helmet, long sleeves, and closed-toe shoes.
              Passengers are allowed only with instructor approval and must meet the same
              safety requirements.
            </p>
          </div>

          {/* Vehicle Inspection */}
          <div>
            <h3 className="text-lg font-semibold button-font mb-1">Vehicle Inspection</h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 button-font">
              Vehicles must pass a technical inspection before participating. This includes
              checking brakes, tires, and overall mechanical condition. Any vehicle deemed
              unsafe will not be allowed on the track.
            </p>
          </div>

          {/* Age and CC Requirements */}
          <div>
            <h3 className="text-lg font-semibold button-font mb-1">Age and CC Requirements</h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 button-font">
              Drivers must be at least 18 years old and possess a valid driver’s license. For
              certain events, there may be additional requirements based on engine displacement (CC).
            </p>
          </div>

          {/* Participation Fee */}
          <div>
            <h3 className="text-lg font-semibold button-font mb-1">Participation Fee</h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 button-font">
              Participation Fee: <span className="font-semibold">PKR 6,000 per event</span> (non-refundable)
            </p>
          </div>

          {/* Waiver */}
          <div>
            <h3 className="text-lg font-semibold button-font mb-1">Waiver</h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 button-font">
              All participants must sign a liability waiver before entering the track. This
              waiver acknowledges the risks associated with motorsports and releases Vroom
              from liability for injuries or damages.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-10 space-y-4 md:space-y-0">
         <button
  onClick={() => router.push('/register-as-racer/register')}
  className="bg-red-600 hover:bg-red-700 text-white button-font font-medium py-2 px-6 rounded-lg transition-all shadow-sm flex items-center justify-center space-x-2"
>
  <span>I Meet the Requirements</span>
  <Image
    src="/assets/images/arrow.svg"
    alt="arrow"
    width={24}
    height={24}
  />
  <span>Continue</span>
</button>


          <button
            onClick={() => router.push('/')}
            className="bg-[#FFE0E0] hover:bg-gray-300 text-gray-800 button-font font-semibold py-3 px-6 rounded-lg transition-all shadow-sm"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
      {/* Main Content */}
  
    </div>
  );
}
