"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { postJson } from "@/lib/api";

export default function EventInquiryForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

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

  const renderError = (name: string) => {
    const msgs = fieldErrors?.[name];
    if (!msgs?.length) return null;
    return <p className="text-xs text-red-600 mt-1">{msgs[0]}</p>;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    setFieldErrors({});
    try {
      const payload = {
        ...formData,
        expectedParticipants: Number(formData.expectedParticipants || 0),
      };
      const resp = await postJson<{ success: boolean; id: number }>(
        "/event-inquiries",
        payload
      );
      // Redirect to confirmation with id, or show inline success
      router.push(`/host-event-confirmation?inquiry=${resp.id}`);
    } catch (err: any) {
      if (err?.status === 422 && err?.body?.errors) {
        setFieldErrors(err.body.errors);
        const first = Object.keys(err.body.errors)[0];
        if (first) {
          const el = (e.target as HTMLFormElement).querySelector(
            `[name="${first}"]`
          ) as HTMLElement | null;
          el?.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else {
        setError(err?.message || "Failed to submit inquiry");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen mt-40 bg-white">
      {/* Header */}
     
 

      {/* Main Content */}
      <div className="max-w-4xl mx-auto button-font px-4 sm:px-6 lg:px-8 py-12">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Event Inquiry Form</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tell us about your event vision and we'll create a customized proposal for your perfect racing experience.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {error && <div className="text-red-600 text-sm">{error}</div>}
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Event Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                >
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Team Building">Team Building</option>
                  <option value="Birthday Party">Birthday Party</option>
                  <option value="Wedding Party">Wedding Party</option>
                  <option value="Private Event">Private Event</option>
                </select>
                {renderError('eventType')}
              </div>

              {/* Expected Participants */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Participants *
                </label>
                <input
                  type="number"
                  name="expectedParticipants"
                  value={formData.expectedParticipants}
                  onChange={handleInputChange}
                  placeholder="Number of attendees"
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                {renderError('expectedParticipants')}
              </div>

              {/* Contact Person */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                {renderError('contactPerson')}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                {renderError('phone')}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Preferred Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                   
                  </div>
                </div>
                {renderError('preferredDate')}
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range *
                </label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleInputChange}
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                >
                  <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                  <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                </select>
                {renderError('budgetRange')}
              </div>

              {/* Company/Organization */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company name"
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {renderError('company')}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address"
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                {renderError('email')}
              </div>
            </div>
          </div>

          {/* Full Width Text Areas */}
          <div className="space-y-6">
            {/* Event Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Description *
              </label>
              <textarea
                name="eventDescription"
                value={formData.eventDescription}
                onChange={handleInputChange}
                placeholder="Describe your event goals, activities, and vision..."
                rows={4}
                className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              {renderError('eventDescription')}
            </div>

    {/* Special Requirements + Catering Needs */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Special Requirements */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Special Requirements
    </label>
    <textarea
      name="specialRequirements"
      value={formData.specialRequirements}
      onChange={handleInputChange}
      placeholder="Any specific needs or requests..."
      rows={3}
      className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
    />
    {renderError('specialRequirements')}
  </div>

  {/* Catering Needs */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Catering Needs
    </label>
    <select
      name="cateringNeeds"
      value={formData.cateringNeeds}
      onChange={handleInputChange}
      className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      <option value="No catering needed">No catering needed</option>
      <option value="Light refreshments">Light refreshments</option>
      <option value="Full meal service">Full meal service</option>
      <option value="Custom catering">Custom catering</option>
    </select>
    {renderError('cateringNeeds')}
  </div>
</div>

          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 cursor-pointer text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-60"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit Event Inquiry'}
            </button>
          </div>

          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Our event specialist will contact you within 24 hours to discuss your requirements.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
