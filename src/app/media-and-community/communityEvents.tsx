'use client';
import { useState } from 'react';


export default function CommunityEvents() {
  const [selectedDate, setSelectedDate] = useState<number | null>(5);

  const months = [
    { name: 'July 2024', days: 31 },
    { name: 'August 2024', days: 31 },
  ];

  return (
    <section className="bg-[#F5F5F5] button-font py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* --- Heading --- */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
          Community Events & Meetups
        </h2>

        {/* --- Calendar --- */}
        <div className="flex flex-col md:flex-row md:justify-center gap-10 mb-16">
          {months.map((month, monthIndex) => (
            <div key={month.name} className="text-center">
              <div className="flex items-center justify-between mb-4">
                {monthIndex === 0 && <span className="text-lg">‹</span>}
                <h3 className="text-sm font-medium text-gray-900">{month.name}</h3>
                {monthIndex === 1 && <span className="text-lg">›</span>}
              </div>

              <div className="grid grid-cols-7 gap-2 text-xs text-gray-600">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                  <div key={day} className="font-medium">
                    {day}
                  </div>
                ))}

                {/* Days */}
                {Array.from({ length: month.days }).map((_, i) => {
                  const day = i + 1;
                  const isSelected = monthIndex === 0 && day === selectedDate;
                  return (
                    <div
                      key={day}
                      className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'bg-red-600 text-white font-semibold'
                          : 'hover:bg-gray-200 text-gray-800'
                      }`}
                      onClick={() => setSelectedDate(day)}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* --- Contact Form --- */}
        <div className="bg-[#2B2B2B] text-white rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-6">Contact for Media Inquiries</h3>

          <form className="flex flex-col gap-5">
            {/* Email */}
            <div className=''>
              <label className="block  text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white rounded-md text-black outline-none border border-gray-300"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                placeholder=""
                className="w-full px-4 py-2 bg-white rounded-md text-black outline-none border border-gray-300 resize-none"
              />
            </div>

            {/* Button */}
          <div className="flex justify-center">
  <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-md">
    Send Inquiry
  </button>
</div>

          </form>
        </div>
      </div>
    </section>
  );
}
