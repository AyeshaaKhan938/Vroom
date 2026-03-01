"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Confirmation() {
  const searchParams = useSearchParams();
  const inquiryId = searchParams.get("inquiry");

  return (
    <div className="min-h-screen mt-32 bg-[#F5F5F5]">
      {/* Header */}

        <div className=" button-font mt-12 flex items-center justify-center bg-[#F5F5F5] px-4 py-10">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        {/* Title Section */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Event Proposal Submitted!
        </h1>
        <p className="text-center text-gray-600">
          Thank you for submitting your event proposal. Our team will review your proposal and contact you within 3–5 business days.
        </p>
        {inquiryId && (
          <p className="text-center text-sm text-gray-500 mt-1 mb-6">
            Reference: {inquiryId}
          </p>
        )}

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
