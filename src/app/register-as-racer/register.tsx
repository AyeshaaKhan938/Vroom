"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Register() {
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


    <div className="min-h-screen bg-[#F5F5F5] button-font py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            RACER REGISTRATION
          </h1>
          <p className="text-gray-600">
            Complete your registration to join the racing community
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <form>
            {/* PERSONAL INFORMATION */}
            <div className="mb-8">
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-6">
               <Image
                                   src='/assets/images/person.svg'
                                   alt='person'
                                   width={17}
                                   height={17}
                             
                                 />
                PERSONAL INFORMATION
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Date of Birth <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="date"
                    placeholder="mm/dd/yyyy"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Gender <span className="text-gray-900">*</span>
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none bg-[#F5F5F5]"
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Address <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* RACING EXPERIENCE */}
            <div className="mb-8">
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-6">
                <Image
                                   src='/assets/images/racing.svg'
                                   alt='person'
                                   width={19}
                                   height={19}
                             
                                 />
                RACING EXPERIENCE
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Racing License Number
                  </label>
                  <input
                    type="text"
                    placeholder="License number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Years of Experience <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Racing Category <span className="text-gray-900">*</span>
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none bg-[#F5F5F5]"
                  required
                >
                  <option value="">Select category</option>
                  <option value="amateur">Amateur</option>
                  <option value="semi-pro">Semi-Professional</option>
                  <option value="professional">Professional</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Previous Racing Events
                </label>
                <textarea
                  rows={4}
                  placeholder="List your previous racing events and achievements"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] resize-none"
                ></textarea>
              </div>
            </div>

            {/* VEHICLE INFORMATION */}
            <div className="mb-8">
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-6">
                <Image
                                   src='/assets/images/vehicle.svg'
                                   alt='person'
                                   width={19}
                                   height={19}
                             
                                 />
                VEHICLE INFORMATION
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Make <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Vehicle make"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Model <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Vehicle model"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Year <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="2024"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Engine Size <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Engine displacement"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Modifications
                </label>
                <textarea
                  rows={3}
                  placeholder="List any vehicle modifications"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Technical Specifications
                </label>
                <textarea
                  rows={3}
                  placeholder="Additional technical details"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] resize-none"
                ></textarea>
              </div>
            </div>

            {/* EMERGENCY CONTACT */}
            <div className="mb-8">
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-6">
                <span className="text-red-600">✱</span>
                EMERGENCY CONTACT
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Contact Name <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Emergency contact full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Relationship <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Spouse, Parent, Sibling, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Emergency Contact Phone <span className="text-gray-900">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                  required
                />
              </div>
            </div>

            {/* MEDICAL INFORMATION */}
            <div className="mb-8">
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-6">
               <Image
                                   src='/assets/images/medical.svg'
                                   alt='person'
                                   width={19}
                                   height={19}
                             
                                 />
                MEDICAL INFORMATION
              </h2>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Blood Type
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none bg-[#F5F5F5]"
                >
                  <option value="">Select blood type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Medical Conditions
                </label>
                <textarea
                  rows={3}
                  placeholder="List any medical conditions or allergies"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Current Medications
                </label>
                <textarea
                  rows={3}
                  placeholder="List current medications"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] resize-none"
                ></textarea>
              </div>
            </div>

            {/* INSURANCE DETAILS */}
            <div className="mb-8">
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-6">
                 <Image
                                   src='/assets/images/insurance.svg'
                                   alt='person'
                                   width={19}
                                   height={19}
                             
                                 />
                INSURANCE DETAILS
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Insurance Provider <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Insurance company name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Policy Number <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Policy number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Coverage Amount <span className="text-gray-900">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Coverage amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                  required
                />
              </div>
            </div>

            {/* REQUIRED DOCUMENTS */}
            <div className="mb-8">
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-6">
              <Image
                                   src='/assets/images/required.svg'
                                   alt='person'
                                   width={19}
                                   height={19}
                             
                                 />
                REQUIRED DOCUMENTS
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Driver's License <span className="text-gray-900">*</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-red-600 transition-colors cursor-pointer bg-[#F5F5F5]">
                    <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PDF, JPG, PNG (Max 5MB)</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Racing License (If applicable)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-red-600 transition-colors cursor-pointer bg-[#F5F5F5]">
                    <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PDF, JPG, PNG (Max 5MB)</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Insurance Certificate <span className="text-gray-900">*</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-red-600 transition-colors cursor-pointer bg-[#F5F5F5]">
                    <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PDF, JPG, PNG (Max 5MB)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* LEGAL ACKNOWLEDGMENTS */}
            <div className="mb-8">
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-6">
                  <Image
                                   src='/assets/images/legal.svg'
                                   alt='person'
                                   width={19}
                                   height={19}
                             
                                 />
                LEGAL ACKNOWLEDGMENTS
              </h2>

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-600 mt-0.5"
                    required
                  />
                  <div>
                    <span className="text-sm font-semibold text-gray-900">
                      Liability Waiver <span className="text-gray-900">*</span>
                    </span>
                    <p className="text-xs text-gray-600 mt-1">
                      I acknowledge and accept all risks associated with racing activities and agree not to hold anyone else liable for any accidents.
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-600 mt-0.5"
                    required
                  />
                  <div>
                    <span className="text-sm font-semibold text-gray-900">
                      Terms and Conditions <span className="text-gray-900">*</span>
                    </span>
                    <p className="text-xs text-gray-600 mt-1">
                      I agree to abide by all facility rules, regulations, and terms of participation.
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-600 mt-0.5"
                  />
                  <div>
                    <span className="text-sm font-semibold text-gray-900">
                      Photo/Video Release
                    </span>
                    <p className="text-xs text-gray-600 mt-1">
                      I consent to the use of my image in promotional materials and media coverage of racing events.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* PAYMENT INFORMATION */}
            <div className="mb-8">
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-6">
                 <Image
                                   src='/assets/images/payment.svg'
                                   alt='person'
                                   width={19}
                                   height={19}
                             
                                 />
                PAYMENT INFORMATION
              </h2>

              <div className="bg-[#F5F5F5] rounded-lg p-6 mb-6 flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-900">Registration Fee</span>
                <span className="text-2xl font-bold text-red-600">Rs 5400</span>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Payment Method <span className="text-gray-900">*</span>
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none bg-[#F5F5F5]"
                  required
                >
                  <option value="">Select payment method</option>
                  <option value="card">Credit/Debit Card</option>
                  <option value="bank">Bank Transfer</option>
                  <option value="jazzcash">JazzCash</option>
                  <option value="easypaisa">Easypaisa</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              COMPLETE REGISTRATION
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              By completing registration, you agree to our terms and conditions. All required fields must be completed.
            </p>
          </form>
        </div>
      </div>
    </div>
  
      {/* Main Content */}
  
    </div>
  );
}
