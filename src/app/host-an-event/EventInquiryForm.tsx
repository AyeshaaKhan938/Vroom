"use client";

import { useState } from "react";
import Image from "next/image";

export default function EventInquiryForm() {
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
    <div className="min-h-screen bg-white">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                >
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Team Building">Team Building</option>
                  <option value="Birthday Party">Birthday Party</option>
                  <option value="Wedding Party">Wedding Party</option>
                  <option value="Private Event">Private Event</option>
                </select>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                >
                  <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                  <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                </select>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
                />
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
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
      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
    />
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
      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      <option value="No catering needed">No catering needed</option>
      <option value="Light refreshments">Light refreshments</option>
      <option value="Full meal service">Full meal service</option>
      <option value="Custom catering">Custom catering</option>
    </select>
  </div>
</div>

          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg bg-[#f5f5f5] font-semibold hover:bg-red-700 transition-colors"
            >
              Submit Event Inquiry
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
