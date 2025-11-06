"use client";

import { useState } from "react";
import Image from "next/image";

export default function Ticket() {
    const tickets = [
    {
      name: 'General Admission',
      price: 'PKR 2,000',
      features: [
        'Basic entrance pass',
        'Access to main grandstand',
        'Event program included'
      ]
    },
    {
      name: 'VIP Tickets',
      price: 'PKR 5,000',
      features: [
        'Premium seating areas',
        'Complimentary refreshments',
        'VIP lounge access',
        'Reserved parking'
      ]
    },
    {
      name: 'Paddock Pass',
      price: 'PKR 8,000',
      features: [
        'Pit lane access',
        'Meet & greet with drivers',
        'Event program included',
        'Premium viewing areas'
      ]
    },
    {
      name: 'Family Package',
      price: 'PKR 15,000',
      features: [
        '4 people admission',
        'Food and beverage voucher',
        'Family seating area',
        'Kids activity zone access'
      ]
    }
  ];

  const schedule = [
    { time: '10:00 AM', event: 'Gates Open' },
    { time: '11:00 AM', event: 'Practice Session' },
    { time: '1:00 PM', event: 'Qualifying Round' },
    { time: '3:00 PM', event: 'Main Race', highlight: true },
    { time: '5:30 PM', event: 'Victory Ceremony' }
  ];

  const termsConditions = [
    'All ticket sales are final - no refunds or exchanges',
    'Valid ID required for entry',
    'Event may be postponed due to weather conditions',
    'Photography and recording permitted for personal use',
    'Outside food and beverages not allowed'
  ];

  const ageRestrictions = [
    { category: 'General Admission', age: 'All ages welcome' },
    { category: 'VIP Areas', age: '18+ only' },
    { category: 'Paddock Pass', age: '16+ only' },
    { category: 'Family Package', age: 'Family friendly', highlight: true }
  ];

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
    <div className="min-h-screen mt-40 button-font bg-white">
      {/* Header */}
      
 <div className="min-h-screen  py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Formula Racing Championship 2024
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Image src="/assets/images/date.svg" alt="date" width={16} height={16} />
              <span>March 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/assets/images/clock.svg" alt="time" width={16} height={16} />
              <span>10:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/assets/images/location.svg" alt="location" width={16} height={16} />
              <span>Vroom Racing Circuit</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Tickets Section - Left Column (2/3 width) */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Select Your Ticket
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tickets.map((ticket, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{ticket.name}</h3>
                    <span className="text-xl font-bold text-red-600">{ticket.price}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {ticket.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Image 
                          src="/assets/images/green.svg" 
                          alt="check" 
                          width={16} 
                          height={16} 
                          className="mt-0.5 flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Quantity
                    </label>
                    <div className="flex items-center gap-3">
                      <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100">
                        -
                      </button>
                      <input
                        type="number"
                        value="1"
                        className="w-16 text-center border border-gray-300 rounded py-1"
                        readOnly
                      />
                      <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100">
                        +
                      </button>
                    </div>
                  </div>

                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Shopping Cart - Right Column (1/3 width) */}
          <div className="lg:col-span-1 mt-12">
            <div className="bg-[#F5F5F5] rounded-lg shadow-sm p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Shopping Cart
              </h2>

              <div className="flex flex-col bg-white items-center justify-center py-12 text-center">
                <Image 
                  src="/assets/images/cart.svg" 
                  alt="cart" 
                  width={52} 
                  height={52}
                  className="mb-4"
                />
                <p className="text-gray-500 text-sm mb-1">Your cart is empty</p>
                <p className="text-gray-500 text-sm">Add tickets to get started</p>
              </div>
<div className="bg-white mt-6 p-2">
              <div className=" pt-4 mb-4">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">PKR 0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service Fee</span>
                    <span className="font-semibold">PKR 0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">PKR 0</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 flex justify-between text-base">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="font-bold text-red-600">PKR 0</span>
                  </div>
                </div>
              </div>
              </div>

              <button className="w-full mt-5 bg-[#000000] hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition-colors mb-4">
                Proceed to Checkout
              </button>

              <div className="flex items-start p-4 bg-white gap-2 text-sm text-gray-600">
                <Image src="/assets/images/badge.svg" alt="secure" width={24} height={24
                  
                } className="mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">Secure Payment</span>
                  <p className="text-gray-900">Your payment information is encrypted and secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Schedule */}
        <div className="bg-[#F5F5F5] rounded-lg  p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Event Schedule
          </h2>
          <div className="max-w-2xl bg-white p-4 mx-auto space-y-4">
            {schedule.map((item, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
              >
                <span className="text-sm font-semibold text-gray-900">{item.time}</span>
                <span className={`text-sm ${item.highlight ? 'text-red-600 font-bold' : 'text-gray-700'}`}>
                  {item.event}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Terms & Age Restrictions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Terms & Conditions */}
          <div className="bg-[#F5F5F5] rounded-lg  p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Terms & Conditions
            </h2>
            <ul className="space-y-3">
              {termsConditions.map((term, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-red-600 font-bold mt-0.5">●</span>
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Age Restrictions */}
          <div className="bg-[#F5F5F5] rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Age Restrictions
            </h2>
            <div className="space-y-3">
              {ageRestrictions.map((restriction, index) => (
                <div key={index} className="flex border-b border-gray-200 last:border-0 justify-between items-center py-2">
                  <span className="text-sm font-semibold text-gray-900">
                    {restriction.category}
                  </span>
                  <span className={`text-sm ${restriction.highlight ? 'text-[#00C851] font-medium' : 'text-gray-600'}`}>
                    {restriction.age}
                  </span>
                </div>
              ))}
              <div className="bg-[#FFF3E0]  rounded-lg p-3 mt-4">
                <p className="text-base text-[#FF8800]">
                  <span className="font-medium">Note:</span> Children under 5 enter free with valid guardian supervision
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Main Content */}

    </div>
  );
}
