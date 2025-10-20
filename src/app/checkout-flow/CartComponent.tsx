"use client";

import { useState } from "react";
import Image from "next/image";

interface CartComponentProps {
  onContinueToBilling: () => void;
  onBackToExperiences: () => void;
}

export default function CartComponent({
  onContinueToBilling,
  onBackToExperiences,
}: CartComponentProps) {
  const [quantity, setQuantity] = useState(1);
  const [promoCode, setPromoCode] = useState("");

  const subtotal = 12000;
  const serviceFee = 500;
  const gst = 2125;
  const total = subtotal + serviceFee + gst;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#F5F5F5] border-b  border-gray-200">
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
      <div className="bg-[#F5F5F5] button-font py-4">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Cart Details */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold button-font text-gray-900 mb-6">
              Cart
            </h1>

            {/* Product Card */}
            <div className="border border-gray-100 rounded-lg p-6 mb-6 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Product Image */}
                <div className="md:w-1/3">
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src="/assets/images/ch1.png"
                      alt="Time Attack Car"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm font-mono">
                      1:36
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="md:w-2/3">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold button-font text-gray-900 mb-2">
                        Time Attack
                      </h3>
                      <div className="flex items-center mb-4">
                        <img
                          src="/assets/images/timer.svg"
                          alt="Vroom Logo"
                          className="h-1 mr-2"
                        />
                        <span className="text-gray-700 button-font">
                          VIP Package
                        </span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 button-font gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600">Date & Time</div>
                      <div className="text-gray-900">
                        March 15, 2024 at 2:00 PM
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="text-gray-900">60 minutes</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Participants</div>
                      <div className="text-gray-900">2 Adults</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Vehicle</div>
                      <div className="text-gray-900">Performance Car</div>
                    </div>
                  </div>

                  {/* Quantity and Price */}
                  <div className="flex items-center button-font justify-between">
                    <div className="flex items-center button-font space-x-4">
                      <span className="text-gray-700">Quantity:</span>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-3 py-2 text-gray-600 hover:text-gray-800"
                        >
                          -
                        </button>
                        <span className="px-4 py-2 border-x border-gray-300">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-3 py-2 text-gray-600 hover:text-gray-800"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-red-600">
                      PKR {subtotal.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* VIP Package Includes */}
            <div className="bg-[#F5F5F5] rounded-lg button-font p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                VIP Package Includes:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <Image
                    src="/assets/images/green-circle.svg"
                    alt="Time Attack Car"
                    width={22}
                    height={22}
                  />
                  <span className="text-gray-700 ml-2">
                    Professional timing equipment
                  </span>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/assets/images/green-circle.svg"
                    alt="Time Attack Car"
                    width={22}
                    height={22}
                  />
                  <span className="text-gray-700 ml-2">
                    Personal race instructor
                  </span>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/assets/images/green-circle.svg"
                    alt="Time Attack Car"
                    width={22}
                    height={22}
                  />
                  <span className="text-gray-700 ml-2">
                    Professional photography
                  </span>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/assets/images/green-circle.svg"
                    alt="Time Attack Car"
                    width={22}
                    height={22}
                  />
                  <span className="text-gray-700 ml-2">
                    Complimentary refreshments
                  </span>
                </div>
              </div>
            </div>

            {/* Promotional Code */}
            <div className="border border-gray-100 button-font rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Promotional Code
              </h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1 button-font">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              {/* Cost Breakdown */}
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
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-red-600">
                    PKR {total.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={onContinueToBilling}
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  Continue to Billing
                  <Image
                    src="/assets/images/arrow.svg"
                    alt="Time Attack Car"
                    width={27}
                    height={27}
                  />
                </button>
                <button
                  onClick={onBackToExperiences}
                  className="w-full border border-red-600 text-red-600 py-3 px-6 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center"
                >
                  <Image
                    src="/assets/images/red-arrow.svg"
                    alt="Time Attack Car"
                    width={27}
                    height={27}
                  />
                  Back to Experiences
                </button>
              </div>

              {/* Secure Checkout */}
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Image
                    src="/assets/images/badge.svg"
                    alt="Time Attack Car"
                    width={26}
                    height={26}
                  />
                  <span className="text-gray-800 font-medium">
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
