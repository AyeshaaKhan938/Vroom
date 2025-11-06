"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface PaymentComponentProps {
  onProceedToConfirmation: () => void;
}

export default function PaymentComponent({
  onProceedToConfirmation,
}: PaymentComponentProps) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 0,
    seconds: 0,
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, "0");

  return (
    <div className="min-h-screen mt-40 bg-[#F5F5F5]">
      {/* Header */}
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-font px-4 sm:px-6 lg:px-8 py-8">
        {/* Order Received Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Order Received
            </h1>
            <p className="text-lg text-gray-600">
              Your order has been received. Please complete the payment in 5
              hours.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-8">
              {/* Hours */}
              <div className="flex flex-col items-center">
                <div className="bg-[#E8E7E7] rounded-lg py-2 px-8 text-center min-w-[100px]">
                  <div className="text-3xl font-bold text-gray-900">
                    {formatTime(timeLeft.hours)}
                  </div>
                </div>
                <div className="text-sm text-gray-600 mt-2">Hours</div>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <div className="bg-[#E8E7E7] rounded-lg py-2 px-8 text-center min-w-[100px]">
                  <div className="text-3xl font-bold text-gray-900">
                    {formatTime(timeLeft.minutes)}
                  </div>
                </div>
                <div className="text-sm text-gray-600 mt-2">Minutes</div>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <div className="bg-[#E8E7E7] rounded-lg py-2 px-8 text-center min-w-[100px]">
                  <div className="text-3xl font-bold text-gray-900">
                    {formatTime(timeLeft.seconds)}
                  </div>
                </div>
                <div className="text-sm text-gray-600 mt-2">Seconds</div>
              </div>
            </div>
          </div>

          {/* Order Number */}
          <div className="mb-6">
            <div className="flex items-center justify-between py-3">
              <span className="text-gray-600 font-medium">Order Number</span>
            </div>
            <div className="flex items-center justify-center py-3">
              <span className="text-gray-900 font-semibold">1234567890</span>
            </div>
          </div>

          {/* Tickets */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Tickets
            </h3>
            <div className="space-y-3">
              {/* Ticket 1 */}
              <div className="flex items-center space-x-4 p-3  rounded-lg">
                <Image
                  src="/assets/images/order1.png"
                  alt="Race Car"
                  width={40}
                  height={30}
                  className="rounded"
                />

                <div className="flex-1">
                  <div className="font-medium text-gray-900">Ticket 1</div>
                  <div className="text-sm text-gray-600">
                    General Admission x 1
                  </div>
                </div>
              </div>

              {/* Ticket 2 */}
              <div className="flex items-center space-x-4 p-3  rounded-lg">
                <Image
                  src="/assets/images/order2.png"
                  alt="Race Car"
                  width={40}
                  height={30}
                  className="rounded"
                />

                <div className="flex-1">
                  <div className="font-medium text-gray-900">Ticket 2</div>
                  <div className="text-sm text-gray-600">
                    General Admission x 1
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Payment Method
            </h3>

            <div className="flex flex-wrap justify-start gap-3">
              {/* Card Payment */}
              <button
                onClick={() => setSelectedPaymentMethod("card")}
                className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-colors ${
                  selectedPaymentMethod === "card"
                    ? "border-red-600 bg-red-50 text-red-600"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                Card Payment
              </button>

              {/* Easypaisa */}
              <button
                onClick={() => setSelectedPaymentMethod("easypaisa")}
                className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-colors ${
                  selectedPaymentMethod === "easypaisa"
                    ? "border-red-600 bg-red-50 text-red-600"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                Easypaisa
              </button>

              {/* JazzCash */}
              <button
                onClick={() => setSelectedPaymentMethod("jazzcash")}
                className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-colors ${
                  selectedPaymentMethod === "jazzcash"
                    ? "border-red-600 bg-red-50 text-red-600"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                JazzCash
              </button>

              {/* Bank Transfer */}
              <button
                onClick={() => setSelectedPaymentMethod("bank")}
                className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-colors ${
                  selectedPaymentMethod === "bank"
                    ? "border-red-600 bg-red-50 text-red-600"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                Bank Transfer
              </button>
            </div>
          </div>

          {/* Proceed Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={onProceedToConfirmation}
              disabled={!selectedPaymentMethod}
              className={`w-[60%] py-3 px-4 rounded-lg font-semibold text-lg transition-colors ${
                selectedPaymentMethod
                  ? "bg-gray-300 text-gray-500"
                  : "bg-red-600 text-white hover:bg-red-700 cursor-not-allowed"
              }`}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
