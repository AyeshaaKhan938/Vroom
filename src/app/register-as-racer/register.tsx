"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from 'next/navigation'
import { postForm } from "@/lib/api";

export default function Register() {
      const router = useRouter()
  const searchParams = useSearchParams()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})
  const [successId, setSuccessId] = useState<number | null>(null)
  const submittedIdFromQuery = searchParams.get('submitted')

  const [driversFileName, setDriversFileName] = useState<string>("")
  const [racingFileName, setRacingFileName] = useState<string>("")
  const [insuranceFileName, setInsuranceFileName] = useState<string>("")

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return
    setSubmitting(true)
    setError(null)
    setFieldErrors({})

    const fd = new FormData(e.currentTarget)

    try {
      const resp = await postForm<{success: boolean; registration_id: number}>(
        '/racer-registrations',
        fd
      )
      setSuccessId(resp.registration_id)

      router.push(`/register-as-racer?submitted=${resp.registration_id}`)
    } catch (err: any) {
    
      if (err?.status === 422 && err?.body?.errors) {
        setFieldErrors(err.body.errors as Record<string, string[]>)
       
        const firstField = Object.keys(err.body.errors)[0]
        if (firstField) {
          const el = (e.currentTarget as HTMLFormElement).querySelector(`[name="${firstField}"]`) as HTMLElement | null
          el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      } else {
        setError(err?.message || 'Failed to submit registration')
      }
    } finally {
      setSubmitting(false)
    }
  }

  const renderError = (name: string) => {
    const msgs = fieldErrors?.[name]
    if (!msgs || msgs.length === 0) return null
    return <p className="text-xs text-red-600 mt-1">{msgs[0]}</p>
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      


    <div className="min-h-screen mt-32 bg-[#F5F5F5] button-font py-12 px-4">
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
          {(successId || submittedIdFromQuery) && (
            <div className="mb-4 rounded-md border border-green-200 bg-green-50 p-4 text-green-800">
              Registration submitted successfully{(successId || submittedIdFromQuery) && <>. Reference: <span className="font-semibold">{successId || submittedIdFromQuery}</span></>}
            </div>
          )}
          <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                    name="full_name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                  {renderError('full_name')}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Date of Birth <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="date"
                    name="date_of_birth"
                    placeholder="mm/dd/yyyy"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                  {renderError('date_of_birth')}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Gender <span className="text-gray-900">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="gender"
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none bg-[#F5F5F5]"
                      required
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {renderError('gender')}
                    <svg
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11l3.71-3.77a.75.75 0 111.08 1.04l-4.25 4.31a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                  {renderError('phone')}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                  {renderError('email')}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Address <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Full address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                  {renderError('address')}
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
                    name="license_number"
                    placeholder="License number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                  />
                  {renderError('license_number')}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Years of Experience <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="number"
                    name="years_experience"
                    placeholder="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                  {renderError('years_experience')}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Racing Category <span className="text-gray-900">*</span>
                </label>
                <div className="relative">
                  <select
                    name="racing_category"
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none bg-[#F5F5F5]"
                    required
                  >
                    <option value="">Select category</option>
                    <option value="amateur">Amateur</option>
                    <option value="semi-pro">Semi-Professional</option>
                    <option value="professional">Professional</option>
                  </select>
                  {renderError('racing_category')}
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11l3.71-3.77a.75.75 0 111.08 1.04l-4.25 4.31a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Previous Racing Events
                </label>
                <textarea
                  name="previous_events"
                  rows={4}
                  placeholder="List your previous racing events and achievements"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] resize-none"
                ></textarea>
                {renderError('previous_events')}
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
                    name="vehicle_make"
                    placeholder="Vehicle make"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                  {renderError('vehicle_make')}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Model <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="text"
                    name="vehicle_model"
                    placeholder="Vehicle model"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                  {renderError('vehicle_model')}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Year <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="text"
                    name="vehicle_year"
                    placeholder="2024"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                  {renderError('vehicle_year')}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Engine Size <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="text"
                    name="engine_size"
                    placeholder="Engine displacement"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                  {renderError('engine_size')}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Modifications
                </label>
                <textarea
                  name="modifications"
                  rows={3}
                  placeholder="List any vehicle modifications"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] resize-none"
                ></textarea>
                {renderError('modifications')}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Technical Specifications
                </label>
                <textarea
                  name="technical_specs"
                  rows={3}
                  placeholder="Additional technical details"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] resize-none"
                ></textarea>
                {renderError('technical_specs')}
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
                    name="emergency_contact_name"
                    placeholder="Emergency contact full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                  {renderError('emergency_contact_name')}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Relationship <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="text"
                    name="emergency_relationship"
                    placeholder="Spouse, Parent, Sibling, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                  {renderError('emergency_relationship')}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Emergency Contact Phone <span className="text-gray-900">*</span>
                </label>
                <input
                  type="tel"
                  name="emergency_phone"
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                  required
                />
                {renderError('emergency_phone')}
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
                <div className="relative">
                  <select
                    name="blood_type"
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none bg-[#F5F5F5]"
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
                {renderError('blood_type')}
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11l3.71-3.77a.75.75 0 111.08 1.04l-4.25 4.31a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Medical Conditions
                </label>
                <textarea
                  name="medical_conditions"
                  rows={3}
                  placeholder="List any medical conditions or allergies"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] resize-none"
                ></textarea>
                {renderError('medical_conditions')}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Current Medications
                </label>
                <textarea
                  name="medications"
                  rows={3}
                  placeholder="List current medications"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] resize-none"
                ></textarea>
                {renderError('medications')}
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
                    name="insurance_provider"
                    placeholder="Insurance company name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                  {renderError('insurance_provider')}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Policy Number <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="text"
                    name="policy_number"
                    placeholder="Policy number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                    required
                  />
                  {renderError('policy_number')}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Coverage Amount <span className="text-gray-900">*</span>
                </label>
                <input
                  type="text"
                  name="coverage_amount"
                  placeholder="Coverage amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                  required
                />
                {renderError('coverage_amount')}
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
                  <label className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-red-600 transition-colors cursor-pointer bg-[#F5F5F5] block">
                    <input
                      type="file"
                      name="drivers_license"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                      required
                      onChange={(e) => setDriversFileName(e.target.files?.[0]?.name || '')}
                    />
                    <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PDF, JPG, PNG (Max 5MB)</p>
                    {driversFileName && (
                      <p className="text-xs text-gray-700 mt-1">Selected: {driversFileName}</p>
                    )}
                  </label>
                {renderError('drivers_license')}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Racing License (If applicable)
                  </label>
                  <label className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-red-600 transition-colors cursor-pointer bg-[#F5F5F5] block">
                    <input
                      type="file"
                      name="racing_license"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={(e) => setRacingFileName(e.target.files?.[0]?.name || '')}
                    />
                    <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PDF, JPG, PNG (Max 5MB)</p>
                    {racingFileName && (
                      <p className="text-xs text-gray-700 mt-1">Selected: {racingFileName}</p>
                    )}
                  </label>
                {renderError('racing_license')}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Insurance Certificate <span className="text-gray-900">*</span>
                  </label>
                  <label className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-red-600 transition-colors cursor-pointer bg-[#F5F5F5] block">
                    <input
                      type="file"
                      name="insurance_certificate"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                      required
                      onChange={(e) => setInsuranceFileName(e.target.files?.[0]?.name || '')}
                    />
                    <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PDF, JPG, PNG (Max 5MB)</p>
                    {insuranceFileName && (
                      <p className="text-xs text-gray-700 mt-1">Selected: {insuranceFileName}</p>
                    )}
                  </label>
                {renderError('insurance_certificate')}
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
                <div className="relative">
                  <select
                    name="payment_method"
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none bg-[#F5F5F5]"
                    required
                  >
                    <option value="">Select payment method</option>
                    <option value="card">Credit/Debit Card</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="jazzcash">JazzCash</option>
                    <option value="easypaisa">Easypaisa</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11l3.71-3.77a.75.75 0 111.08 1.04l-4.25 4.31a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            {error && (
              <div className="text-red-600 text-sm mb-3">{error}</div>
            )}
            <button
              type="submit"
              className="w-full cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'COMPLETE REGISTRATION'}
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
