'use client'
import Image from 'next/image'
import { useState } from 'react'
import { postJson } from '@/lib/api'

export default function RegistrationForm() {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successId, setSuccessId] = useState<number | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setError(null)
    setSuccessId(null)
    const fd = new FormData(e.currentTarget)
    const payload: Record<string, any> = {}
    fd.forEach((v, k) => { payload[k] = v })
    try {
      const resp = await postJson<{ success: boolean; id: number }>('/experience-registrations', {
        form_type: 'time-attack',
        payload,
      })
      setSuccessId(resp.id)
      e.currentTarget.reset()
    } catch (err: any) {
      setError(err?.message || 'Failed to submit')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold button-font text-gray-900 mb-3">
            Registration Form
          </h1>
          <p className="text-gray-600 text-base button-font">
            Complete your details to secure your time attack session
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          {successId && <div className="mb-4 rounded-md border border-green-200 bg-green-50 p-4 text-green-800">Submitted. Reference: {successId}</div>}
          {error && <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-4 text-red-800">{error}</div>}
          <form onSubmit={handleSubmit}>
            {/* Row 1: Full Name and Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div>
                <label className="flex items-center button-font gap-2 text-sm font-semibold text-gray-900 mb-2">
                  <Image
                    src="/assets/images/time1.svg"
                    alt="user icon"
                    width={16}
                    height={16}
                  />
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="full_name"
                  placeholder="Enter your full name"
                  className="w-full text-black px-4 py-3 border button-font border-gray-300 rounded-lg bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="flex items-center button-font gap-2 text-sm font-semibold text-gray-900 mb-2">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+92 XXX XXXXXXXX"
                  className="w-full text-black px-4 py-3 border button-font bg-[#F5F5F5] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Row 2: Email Address and Emergency Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Email Address */}
              <div>
                <label className="flex items-center button-font gap-2 text-sm font-semibold text-gray-900 mb-2">
                  <Image
                    src="/assets/images/time2.svg"
                    alt="email icon"
                    width={16}
                    height={16}
                  />
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full text-black px-4 py-3 border button-font bg-[#F5F5F5] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />
              </div>

              {/* Emergency Contact */}
              <div>
                <label className="flex items-center button-font gap-2 text-sm font-semibold text-gray-900 mb-2">
                  <Image
                    src="/assets/images/time3.svg"
                    alt="emergency icon"
                    width={16}
                    height={16}
                  />
                  Emergency Contact <span className="text-gray-900">*</span>
                </label>
                <input
                  type="tel"
                  name="emergency_contact"
                  placeholder="+92 XXX XXXXXXXX"
                  className="w-full text-black px-4 py-3 border button-font bg-[#F5F5F5] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Row 3: Experience Level and Car Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Experience Level */}
              <div>
                <label className="flex items-center gap-2 button-font text-sm font-semibold text-gray-900 mb-2">
                  <Image
                    src="/assets/images/time4.svg"
                    alt="experience icon"
                    width={16}
                    height={16}
                  />
                  Experience Level <span className="text-gray-900">*</span>
                </label>
                <div className="relative">
                  <select
                    name="experience_level"
                    className="w-full text-black px-4 py-3 border border-gray-300 bg-[#F5F5F5] button-font rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none"
                    required
                  >
                    <option value="">Select experience level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="professional">Professional</option>
                  </select>
                  {/* Custom arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Car Type */}
              <div>
                <label className="flex items-center gap-2 button-font text-sm font-semibold text-gray-900 mb-2">
                  <Image
                    src="/assets/images/time5.svg"
                    alt="car icon"
                    width={16}
                    height={16}
                  />
                  Car Type <span className="text-gray-900">*</span>
                </label>
                <div className="relative">
                  <select
                    name="car_type"
                    className="w-full text-black px-4 py-3 border button-font bg-[#F5F5F5] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none"
                    required
                  >
                    <option value="">Select car type</option>
                    <option value="sedan">Sedan</option>
                    <option value="sports">Sports Car</option>
                    <option value="suv">SUV</option>
                    <option value="hatchback">Hatchback</option>
                  </select>
                  {/* Custom arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 4: Session Preference and Preferred Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Session Preference */}
              <div>
                <label className="flex items-center button-font gap-2 text-sm font-semibold text-gray-900 mb-2">
                  <Image
                    src="/assets/images/time6.svg"
                    alt="session icon"
                    width={16}
                    height={16}
                  />
                  Session Preference <span className="text-gray-900">*</span>
                </label>
                <div className="relative">
                  <select
                    name="session_preference"
                    className="w-full text-black px-4 py-3 button-font border bg-[#F5F5F5] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none"
                    required
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (8AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 8PM)</option>
                  </select>
                  {/* Custom arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="flex items-center button-font gap-2 text-sm font-semibold text-gray-900 mb-2">
                  <Image
                    src="/assets/images/time7.svg"
                    alt="calendar icon"
                    width={16}
                    height={16}
                  />
                  Preferred Date <span className="text-gray-900">*</span>
                </label>
                <input
                  type="date"
                  name="preferred_date"
                  placeholder="mm/dd/yyyy"
                  className="w-full text-black px-4 py-3 border button-font bg-[#F5F5F5] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-red-600 cursor-pointer hover:bg-red-700 button-font text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-60"
                disabled={submitting}
              >
                {submitting ? 'Submitting...' : 'Complete Registration'}
                <Image
                  src="/assets/images/arrow.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
