'use client';
import { useState, useMemo } from 'react';
import { postJson } from '@/lib/api';

type CommunityEvent = {
  id: number;
  title: string;
  date: string; // YYYY-MM-DD
  time: string;
  location: string;
  description: string;
};

const communityEvents: CommunityEvent[] = [
  {
    id: 1,
    title: 'Track Walk & Coffee Meetup',
    date: '2024-07-05',
    time: '08:00 AM',
    location: 'Main Paddock',
    description:
      'Casual morning walk of the circuit with instructors, followed by coffee and networking with fellow enthusiasts.',
  },
  {
    id: 2,
    title: 'Sim Racing League Night',
    date: '2024-07-18',
    time: '07:30 PM',
    location: 'VROOM Simulator Lounge',
    description:
      'Drop-in sim racing league round. Great for new drivers wanting to meet the community in a low-pressure setting.',
  },
  {
    id: 3,
    title: 'Family Pit Lane Tour',
    date: '2024-08-03',
    time: '03:00 PM',
    location: 'Garage 4',
    description:
      'Guided pit lane tour designed for families and younger fans, including photo ops and tech walk‑throughs.',
  },
  {
    id: 4,
    title: 'Karting Community Night',
    date: '2024-08-22',
    time: '06:00 PM',
    location: 'Karting Circuit',
    description:
      'Open community karting night with discounted sessions and an informal meetup afterwards at the café.',
  },
];

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function buildDateKey(year: number, month: number, day: number) {
  // month is 0‑indexed; convert to 1‑indexed for the key
  const mm = String(month + 1).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  return `${year}-${mm}-${dd}`;
}

// Determine a sensible default month (today, so the calendar always feels current)
const today = new Date();

export default function CommunityEvents() {
  // Left/base month for the two‑month view, starting from "today"
  const [baseYear, setBaseYear] = useState<number>(today.getFullYear());
  const [baseMonth, setBaseMonth] = useState<number>(today.getMonth()); // 0‑indexed

  // Currently selected full date (YYYY-MM-DD). Default to today.
  const [selectedDateKey, setSelectedDateKey] = useState<string | null>(buildDateKey(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  ));

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Helper to build month config (name + days)
  const getMonthConfig = (year: number, month: number) => {
    let safeMonth = month;
    let safeYear = year;
    
    // Handle month overflow/underflow
    while (safeMonth > 11) {
      safeMonth -= 12;
      safeYear += 1;
    }
    while (safeMonth < 0) {
      safeMonth += 12;
      safeYear -= 1;
    }
    
    const daysInMonth = new Date(safeYear, safeMonth + 1, 0).getDate();

    return {
      year: safeYear,
      month: safeMonth,
      name: `${monthNames[safeMonth]} ${safeYear}`,
      days: daysInMonth,
    };
  };

  const leftMonth = useMemo(
    () => getMonthConfig(baseYear, baseMonth),
    [baseYear, baseMonth]
  );

  const rightMonth = useMemo(
    () => getMonthConfig(baseYear, baseMonth + 1),
    [baseYear, baseMonth]
  );

  const eventsForSelectedDay = useMemo(
    () =>
      selectedDateKey
        ? communityEvents.filter((event) => event.date === selectedDateKey)
        : [],
    [selectedDateKey]
  );

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const handleSubmit = async () => {
    setSubmitError(null);
    setSubmitSuccess(null);

    if (!email.trim() || !message.trim()) {
      setSubmitError('Please enter both an email and a message.');
      return;
    }

    try {
      setSubmitting(true);
      await postJson<{ success: boolean; id: number }>('/contact-inquiries', {
        email,
        message,
      });
      setEmail('');
      setMessage('');
      setSubmitSuccess('Your inquiry has been sent. Our team will get back to you soon.');
    } catch (err: any) {
      setSubmitError(
        err?.message || 'Something went wrong while sending your inquiry. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-[#F5F5F5] button-font py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* --- Heading --- */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
          Community Events & Meetups
        </h2>

        {/* --- Calendar (two months side by side) --- */}
        <div className="mb-10 md:mb-16">
          {/* Shared navigation */}
          <div className="flex items-center justify-center mb-6 gap-6">
            <button
              type="button"
              className="text-lg text-gray-500 hover:text-gray-800 transition-colors"
              onClick={() => {
                // Move base month back by one
                if (baseMonth === 0) {
                  setBaseYear(baseYear - 1);
                  setBaseMonth(11);
                } else {
                  setBaseMonth(baseMonth - 1);
                }
              }}
              aria-label="Previous month"
            >
              ‹
            </button>
            <h3 className="text-sm font-medium text-gray-900 button-font">
              {leftMonth.name} &nbsp;–&nbsp; {rightMonth.name}
            </h3>
            <button
              type="button"
              className="text-lg text-gray-500 hover:text-gray-800 transition-colors"
              onClick={() => {
                // Move base month forward by one
                if (baseMonth === 11) {
                  setBaseYear(baseYear + 1);
                  setBaseMonth(0);
                } else {
                  setBaseMonth(baseMonth + 1);
                }
              }}
              aria-label="Next month"
            >
              ›
            </button>
          </div>

          {/* Month grids */}
          <div className="flex flex-col md:flex-row md:justify-center gap-10">
            {[leftMonth, rightMonth].map((month) => (
              <div key={month.name} className="text-center">
                <h4 className="text-xs font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                  {month.name}
                </h4>

                <div className="grid grid-cols-7 gap-2 text-xs text-gray-600">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((dayLabel) => (
                    <div key={dayLabel} className="font-medium">
                      {dayLabel}
                    </div>
                  ))}

                  {/* Days */}
                  {(() => {
                    // Get the day of the week for the 1st of the month (0 = Sunday, 6 = Saturday)
                    const firstDayOfWeek = new Date(month.year, month.month, 1).getDay();
                    const totalCells = firstDayOfWeek + month.days;
                    
                    return Array.from({ length: totalCells }).map((_, i) => {
                      if (i < firstDayOfWeek) {
                        // Empty cell before the month starts
                        return <div key={`empty-${i}`} className="w-8 h-8" />;
                      }
                      
                      const day = i - firstDayOfWeek + 1;
                      const dateKey = buildDateKey(month.year, month.month, day);
                      const isSelected = selectedDateKey === dateKey;
                      const hasEvent = communityEvents.some(
                        (event) => event.date === dateKey
                      );

                      return (
                        <button
                          type="button"
                          key={day}
                          className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all duration-200 border text-xs md:text-sm ${
                            isSelected
                              ? 'bg-red-600 border-red-600 text-white font-semibold shadow-sm'
                              : hasEvent
                                ? 'border-red-500 text-gray-900 hover:bg-red-50'
                                : 'border-transparent text-gray-800 hover:bg-gray-200'
                          }`}
                          onClick={() => setSelectedDateKey(dateKey)}
                        >
                          {day}
                        </button>
                      );
                    });
                  })()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Event details for selected date --- */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {selectedDateKey
                ? `Meetups on ${selectedDateKey}`
                : 'Select a date to see meetups'}
            </h3>

            {eventsForSelectedDay.length === 0 ? (
              <p className="text-sm text-gray-600">
                No community events are scheduled for this date yet. Check another
                day or reach out to our team if you would like to propose a meetup.
              </p>
            ) : (
              <ul className="space-y-4">
                {eventsForSelectedDay.map((event) => (
                  <li
                    key={event.id}
                    className="border border-gray-200 rounded-xl px-4 py-3 text-left bg-[#F9FAFB]"
                  >
                    <p className="text-sm font-semibold text-gray-900">
                      {event.title}
                    </p>
                    <p className="text-xs text-gray-700 mt-1">
                      <span className="font-medium">Time:</span> {event.time} ·{' '}
                      <span className="font-medium">Location:</span>{' '}
                      {event.location}
                    </p>
                    <p className="text-xs text-gray-600 mt-2">
                      {event.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* --- Contact Form --- */}
        <div className="bg-[#2B2B2B] text-white rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-6">Contact for Media Inquiries</h3>

          <div className="flex flex-col gap-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white rounded-md text-black outline-none border border-gray-300"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your media request or community idea"
                className="w-full px-4 py-2 bg-white rounded-md text-black outline-none border border-gray-300 resize-none"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <button 
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-medium px-6 py-2 rounded-md"
              >
                {submitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </div>

            {submitError && (
              <p className="mt-3 text-sm text-red-400 text-center">{submitError}</p>
            )}
            {submitSuccess && (
              <p className="mt-3 text-sm text-green-400 text-center">{submitSuccess}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}