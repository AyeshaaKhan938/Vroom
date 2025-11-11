'use client'
import Image from 'next/image';
import { useState } from 'react';
import { postJson } from '@/lib/api';

export default function GoKartingRegistrationForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successId, setSuccessId] = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    setSuccessId(null);
    const fd = new FormData(e.currentTarget);
    const payload: Record<string, any> = {};
    fd.forEach((v, k) => { payload[k] = v; });
    try {
      const resp = await postJson<{ success: boolean; id: number }>('/experience-registrations', {
        form_type: 'go-karting',
        payload,
      });
      setSuccessId(resp.id);
      e.currentTarget.reset();
    } catch (err: any) {
      setError(err?.message || 'Failed to submit');
    } finally {
      setSubmitting(false);
    }
  }

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
          {successId && <div className="mb-4 rounded-md border border-green-200 bg-green-50 p-4 text-green-800">Submitted. Reference: {successId}</div>}
          {error && <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-4 text-red-800">{error}</div>}
          <form onSubmit={handleSubmit}>
            {/* Row 1: Full Name and Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm button-font font-semibold text-gray-900 mb-2">
                  Full Name <span className="text-gray-900">*</span>
                </label>
                <input
                  type="text"
                  name="full_name"
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
                  name="phone"
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
                  name="email"
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
                  name="age"
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
                  name="weight"
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
                  name="group_size"
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
                  name="session_preference"
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
                  name="preferred_date"
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
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-red-600 cursor-pointer hover:bg-red-700 button-font text-white font-semibold py-4 px-8 rounded-lg transition-colors flex items-center gap-3 shadow-lg disabled:opacity-60"
                disabled={submitting}
              >
                {submitting ? 'Submitting...' : 'Complete Registration'}
                <Image
                  src="/assets/images/arrow.svg"
                  alt="arrow"
                  width={32}
                  height={32}
                />
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}