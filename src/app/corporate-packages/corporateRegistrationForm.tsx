'use client'
import Image from 'next/image';
import { useState } from 'react';
import { postJson } from '@/lib/api';

export default function CorporateRegistrationForm() {
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
        form_type: 'corporate',
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
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold button-font text-gray-900 mb-3">
            Corporate Registration Form
          </h1>
          <p className="text-gray-600 text-lg button-font">
            Start planning your corporate racing experience
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 mb-8">
          {successId && <div className="mb-4 rounded-md border border-green-200 bg-green-50 p-4 text-green-800">Submitted. Reference: {successId}</div>}
          {error && <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-4 text-red-800">{error}</div>}
          <form onSubmit={handleSubmit}>
            {/* Row 1: Company Name and Contact Person */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Company Name */}
              <div>
                <label className="block text-base button-font font-semibold text-gray-900 mb-2">
                  Company Name <span className="text-gray-900">*</span>
                </label>
                <input
                  type="text"
                  name="company_name"
                  placeholder="Enter company name"
                  className="w-full px-4 py-3 border button-font border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                  required
                />
              </div>

              {/* Contact Person */}
              <div>
                <label className="block text-base font-semibold button-font text-gray-900 mb-2">
                  Contact Person <span className="text-gray-900">*</span>
                </label>
                <input
                  type="text"
                  name="contact_person"
                  placeholder="Full name"
                  className="w-full px-4 py-3 button-font border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                  required
                />
              </div>
            </div>

            {/* Row 2: Title/Position and Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Title/Position */}
              <div>
                <label className="block text-base button-font font-semibold text-gray-900 mb-2">
                  Title/Position <span className="text-gray-900">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Job title"
                  className="w-full px-4 py-3 button-font border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-base font-semibold button-font text-gray-900 mb-2">
                  Phone Number <span className="text-gray-900">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+92 300 1234567"
                  className="w-full px-4 py-3 border button-font border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                  required
                />
              </div>
            </div>

            {/* Row 3: Email Address (Full Width) */}
            <div className="mb-6">
              <label className="block text-base font-semibold button-font text-gray-900 mb-2">
                Email Address <span className="text-gray-900">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="contact@company.com"
                className="w-full px-4 py-3 border button-font border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                required
              />
            </div>

            {/* Row 4: Preferred Event Date and Expected Attendees */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Preferred Event Date */}
              <div>
                <label className="block text-base font-semibold button-font text-gray-900 mb-2">
                  Preferred Event Date <span className="text-gray-900">*</span>
                </label>
                <input
                  type="date"
                  name="preferred_event_date"
                  placeholder="mm/dd/yyyy"
                  className="w-full px-4 py-3 border button-font border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5]"
                  required
                />
              </div>

              {/* Expected Attendees */}
              <div>
                <label className="block text-base font-semibold button-font text-gray-900 mb-2">
                  Expected Attendees <span className="text-gray-900">*</span>
                </label>
                <select
                  name="expected_attendees"
                  className="w-full px-4 py-3 button-font border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none bg-[#F5F5F5]"
                  required
                >
                  <option value="">Select number of attendees</option>
                  <option value="10-20">10-20 people</option>
                  <option value="20-30">20-30 people</option>
                  <option value="30-50">30-50 people</option>
                  <option value="50+">50+ people</option>
                </select>
              </div>
            </div>

            {/* Row 5: Package Interest and Budget Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Package Interest */}
              <div>
                <label className="block text-base button-font font-semibold text-gray-900 mb-2">
                  Package Interest <span className="text-gray-900">*</span>
                </label>
                <select
                  name="package_interest"
                  className="w-full px-4 py-3 button-font border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none bg-[#F5F5F5]"
                  required
                >
                  <option value="">Select package type</option>
                  <option value="team-building">Team Building</option>
                  <option value="executive">Executive Package</option>
                  <option value="premium">Premium Corporate</option>
                  <option value="custom">Custom Events</option>
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-base button-font font-semibold text-gray-900 mb-2">
                  Budget Range
                </label>
                <select
                  name="budget_range"
                  className="w-full px-4 py-3 button-font border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none bg-[#F5F5F5]"
                >
                  <option value="">Select budget range</option>
                  <option value="50k-100k">PKR 50,000 - 100,000</option>
                  <option value="100k-200k">PKR 100,000 - 200,000</option>
                  <option value="200k-500k">PKR 200,000 - 500,000</option>
                  <option value="500k+">PKR 500,000+</option>
                </select>
              </div>
            </div>

            {/* Catering Requirements */}
            <div className="mb-6">
              <label className="block text-base button-font font-semibold text-gray-900 mb-3">
                Catering Requirements
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="catering_light_refreshments"
                    className="w-4 h-4 text-red-600 button-font border-gray-300 rounded focus:ring-red-600"
                  />
                  <span className="text-base button-font text-gray-700">Light Refreshments</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="catering_full_meal"
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
                  />
                  <span className="text-base button-font text-gray-700">Full Meal Service</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="catering_dietary"
                    className="w-4 h-4 text-red-600 button-font border-gray-300 rounded focus:ring-red-600"
                  />
                  <span className="text-base button-font text-gray-700">Dietary Restrictions</span>
                </label>
              </div>
            </div>

            {/* Special Requests */}
            <div className="mb-6">
              <label className="block text-base  button-font font-semibold text-gray-900 mb-2">
                Special Requests
              </label>
              <textarea
                name="special_requests"
                rows={4}
                placeholder="Any specific requirements, themes, or objectives for your corporate event..."
                className="w-full px-4 py-3 button-font border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-[#F5F5F5] resize-none"
              ></textarea>
            </div>
             <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-600 cursor-pointer button-font hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors flex items-center gap-3 shadow-lg disabled:opacity-60"
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Request Corporate Proposal'}
            <Image
              src="/assets/images/arrow.svg"
              alt="arrow"
              width={30}
              height={30}
            />
          </button>
        </div>
          </form>
        </div>

        {/* Submit Button */}
       
      </div>
    </div>
  );
}