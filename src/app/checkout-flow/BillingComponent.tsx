"use client";

import { useState } from "react";
import Image from "next/image";

interface BillingComponentProps {
  onContinueToPayment: () => void;
  onBackToCart: () => void;
}

export default function BillingComponent({
  onContinueToPayment,
  onBackToCart,
}: BillingComponentProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    emergencyContactName: "",
    emergencyPhone: "",
    relationship: "",
    subscribeNewsletter: false,
    smsNotifications: false,
  });

  const subtotal = 12000;
  const serviceFee = 500;
  const gst = 2125;
  const total = subtotal + serviceFee + gst;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="min-h-screen satoshi-font bg-white">
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

      {/* Breadcrumb Navigation */}
      <div className="bg-[#F5F5F5] satoshi-font py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-400">Cart</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-red-600 font-semibold">Billing</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-400">Payment</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-400">Confirmation</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Billing Information */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold button-font  text-gray-900 mb-6">
              Billing Information
            </h1>

            {/* Personal Information */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold button-font text-gray-900 mb-4">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+92 XXXX XXX XXXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold button-font text-gray-900 mb-4">
                Address Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    placeholder="Enter your street address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter your city"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State/Province *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="Enter your state/province"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="Enter postal code"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
                    required
                  >
                    <option value="">Select country</option>
                    <option value="PK">Pakistan</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gray-50  rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold button-font text-gray-900 mb-4">
                Emergency Contact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    name="emergencyContactName"
                    value={formData.emergencyContactName}
                    onChange={handleInputChange}
                    placeholder="Enter emergency contact name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    placeholder="+92 XXXX XXX XXXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Relationship *
                  </label>
                  <select
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
                    required
                  >
                    <option value="">Select relationship</option>
                    <option value="spouse">Spouse</option>
                    <option value="parent">Parent</option>
                    <option value="sibling">Sibling</option>
                    <option value="friend">Friend</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Options */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold button-font text-gray-900 mb-4">
                Additional Options
              </h2>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="ml-2 text-gray-700">
                    Subscribe to newsletter for racing updates and special
                    offers
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="smsNotifications"
                    checked={formData.smsNotifications}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="ml-2 text-gray-700">
                    Receive SMS notifications for booking confirmations and
                    updates
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#F5F5F5] rounded-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold button-font text-gray-900 mb-6">
                Order Summary
              </h2>

              {/* Product Details */}
              <div className="mb-6 p-2 bg-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative">
                    <Image
                      src="/assets/images/order.png"
                      alt="Time Attack Car"
                      width={80}
                      height={60}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold  button-font text-gray-900">Time Attack</h3>
                    <p className="text-sm text-gray-600">VIP Package</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date & Time:</span>
                    <span className="text-gray-900">March 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="text-gray-900">60 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Participants:</span>
                    <span className="text-gray-900">2 Adults</span>
                  </div>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal (1 item)</span>
                  <span>PKR {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Service Fee</span>
                  <span>PKR {serviceFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>GST (17%)</span>
                  <span>PKR {gst.toLocaleString()}</span>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-gray-300 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold button-font text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-red-600">
                    PKR {total.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={onContinueToPayment}
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  Continue to Payment
                  <Image
                    src="/assets/images/arrow.svg"
                    alt="Time Attack Car"
                    width={27}
                    height={27}
                  />
                </button>
                <button
                  onClick={onBackToCart}
                  className="w-full border border-red-600 text-red-600 py-3 px-6 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center"
                >
                  <Image
                    src="/assets/images/red-arrow.svg"
                    alt="Time Attack Car"
                    width={27}
                    height={27}
                  />
                  Back to Cart
                </button>
              </div>

              {/* Secure Checkout */}
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Image
                    src="/assets/images/badge.svg"
                    alt="Time Attack Car"
                    width={27}
                    height={27}
                  />
                  <span className="text-gray-800 button-font font-medium">
                    Secure Checkout
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  SSL encrypted payment processing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
