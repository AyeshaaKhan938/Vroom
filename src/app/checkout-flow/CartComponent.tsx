"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type {
  CartPayload,
  CheckoutOrder,
  PricingConfig,
} from "./types";

interface CartComponentProps {
  pricing: PricingConfig;
  order?: CheckoutOrder | null;
  onContinueToBilling: (payload: CartPayload) => Promise<void>;
  onBackToExperiences: () => void;
  loading: boolean;
  error?: string | null;
}

export default function CartComponent({
  pricing,
  order,
  onContinueToBilling,
  onBackToExperiences,
  loading,
  error,
}: CartComponentProps) {
  const [quantity, setQuantity] = useState<number>(
    order?.cart?.quantity ?? 1
  );
  const [promoCode, setPromoCode] = useState(order?.cart?.promo_code ?? "");

  useEffect(() => {
    if (order?.cart) {
      setQuantity(order.cart.quantity ?? 1);
      setPromoCode(order.cart.promo_code ?? "");
    }
  }, [order]);

  const pricingSummary = useMemo(() => {
    const subtotal = pricing.unitPrice * quantity;
    const serviceFee = pricing.serviceFee;
    const gstRaw = (subtotal + serviceFee) * pricing.gstRate;
    const gst = Number(gstRaw.toFixed(2));
    const total = Number((subtotal + serviceFee + gst).toFixed(2));
    return { subtotal, serviceFee, gst, total };
  }, [pricing, quantity]);

  const amounts = order?.amounts ?? {
    subtotal: pricingSummary.subtotal,
    service_fee: pricingSummary.serviceFee,
    tax: pricingSummary.gst,
    total: pricingSummary.total,
    currency: "PKR",
  };

  const handleContinue = async () => {
    if (loading) return;
    await onContinueToBilling({
      quantity,
      promoCode: promoCode ? promoCode.trim() : undefined,
    });
  };

  return (
    <div className="min-h-screen mt-40 bg-white">
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
                    <div className="absolute top-4 satoshi-font left-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm font-mono">
                      1:36
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="md:w-2/3">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold button-font text-gray-900 mb-2">
                        {pricing.product}
                      </h3>
                      <div className="flex items-center mb-4">
                        <img
                          src="/assets/images/timer.svg"
                          alt="Vroom Logo"
                          className="h-1 mr-2"
                        />
                        <span className="text-gray-700 satoshi-font">
                          {pricing.package}
                        </span>
                      </div>
                    </div>
                    
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 satoshi-font gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600">Date & Time</div>
                      <div className="text-gray-900">March 15, 2024 at 2:00 PM</div>
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
                  <div className="flex items-center satoshi-font justify-between">
                    <div className="flex items-center button-font space-x-4">
                      <span className="text-gray-700">Quantity:</span>
                      <div className="flex items-center border border-gray-300 text-black rounded-lg">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-3 py-2 text-gray-600 hover:text-gray-800"
                          disabled={loading}
                        >
                          -
                        </button>
                        <span className="px-4 py-2 border-x border-gray-300">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-3 py-2 text-gray-600 hover:text-gray-800"
                          disabled={loading}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-2xl font-bold satoshi-font text-red-600">
                      PKR {pricingSummary.subtotal.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* VIP Package Includes */}
            <div className="bg-[#F5F5F5] rounded-lg  p-6 mb-6">
              <h3 className="text-lg font-bold button-font text-gray-900 mb-4">
                VIP Package Includes:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Professional timing equipment",
                  "Personal race instructor",
                  "Professional photography",
                  "Complimentary refreshments",
                ].map((item) => (
                  <div className="flex items-center" key={item}>
                    <Image
                      src="/assets/images/green-circle.svg"
                      alt="Check"
                      width={22}
                      height={22}
                    />
                    <span className="text-gray-700 satoshi-font ml-2">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Promotional Code */}
            <div className="border border-gray-100  rounded-lg p-6">
              <h3 className="text-lg font-bold button-font text-gray-900 mb-4">
                Promotional Code
              </h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-4 text-black py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  disabled={loading}
                />
                <button
                  type="button"
                  className="bg-red-600 satoshi-font text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-60"
                  disabled
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold button-font text-gray-900 mb-6">
                Order Summary
              </h2>

              {/* Cost Breakdown */}
              <div className="space-y-3 mb-6 satoshi-font">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({quantity} item{quantity > 1 ? "s" : ""})</span>
                  <span>
                    {amounts.currency} {amounts.subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Service Fee</span>
                  <span>
                    {amounts.currency} {amounts.service_fee.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>GST (17%)</span>
                  <span>
                    {amounts.currency} {amounts.tax.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-gray-300 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold button-font text-gray-900">Total</span>
                  <span className="text-2xl satoshi-font font-bold text-red-600">
                    {amounts.currency} {amounts.total.toLocaleString()}
                  </span>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 text-sm rounded-lg p-3 mb-4">
                  {error}
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3 satoshi-font mb-6">
                <button
                  onClick={handleContinue}
                  className={`w-full bg-red-600 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-colors ${
                    loading ? "opacity-70 cursor-not-allowed" : "hover:bg-red-700"
                  }`}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Continue to Billing"}
                  <Image
                    src="/assets/images/arrow.svg"
                    alt="Arrow"
                    width={27}
                    height={27}
                    className="ml-2"
                  />
                </button>
                <button
                  onClick={onBackToExperiences}
                  className={`w-full border border-red-600 text-red-600 py-3 px-6 rounded-lg flex items-center justify-center transition-colors ${
                    loading ? "opacity-70 cursor-not-allowed" : "hover:bg-red-50"
                  }`}
                  disabled={loading}
                >
                  <Image
                    src="/assets/images/red-arrow.svg"
                    alt="Back"
                    width={27}
                    height={27}
                    className="mr-2"
                  />
                  Back to Experiences
                </button>
              </div>

              {/* Secure Checkout */}
              <div className="bg-white satoshi-font rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Image
                    src="/assets/images/badge.svg"
                    alt="Badge"
                    width={26}
                    height={26}
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
