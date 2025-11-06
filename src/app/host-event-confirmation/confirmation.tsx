"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Confirmation() {
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
        <div className=" button-font mt-12 flex items-center justify-center bg-[#F5F5F5] px-4 py-10">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        {/* Title Section */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Event Proposal Submitted!
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Thank you for submitting your event proposal. Our team will review your proposal and contact you within 3–5 business days.
        </p>

        {/* Divider Title */}
        <h2 className="text-center text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">
          Event Details Summary
        </h2>

        {/* Event Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 text-sm text-gray-800 mb-8">
          <div className="flex flex-col border-t border-gray-100 pt-3">
            <span className="text-gray-500 mb-1">Event Name</span>
            <span className="font-semibold">Drifting Competition</span>
          </div>

          <div className="flex flex-col border-t border-gray-100 pt-3">
            <span className="text-gray-500 mb-1">Desired Date</span>
            <span className="font-semibold">July 20, 2024</span>
          </div>

          <div className="flex flex-col border-t border-gray-100 pt-3">
            <span className="text-gray-500 mb-1">Host Name</span>
            <span className="font-semibold">Ahmed Turk</span>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Link href="/events">

          <button
            className="bg-red-600 cursor-pointer hover:bg-red-700 text-white font-semibold px-20 py-3 rounded-md transition-colors"
          >
            Go to Events
          </button>
          </Link>
        </div>
      </div>
    </div>

      {/* Main Content */}
  
    </div>
  );
}
