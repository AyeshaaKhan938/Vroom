"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { CheckoutOrder, PaymentPayload } from "./types";

interface PaymentComponentProps {
  order: CheckoutOrder;
  onProceedToConfirmation: (payload: PaymentPayload) => Promise<void>;
  loading: boolean;
  error?: string | null;
}

const TIMER_SEGMENTS = ["hours", "minutes", "seconds"] as const;

export default function PaymentComponent({
  order,
  onProceedToConfirmation,
  loading,
  error,
}: PaymentComponentProps) {
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [localError, setLocalError] = useState<string | null>(null);
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

  const ticketItems = useMemo(() => {
    return Array.from({ length: order.cart.quantity }).map((_, index) => ({
      label: `Ticket ${index + 1}`,
      description: `${order.cart.product ?? "Ticket"} x 1`,
      image: index % 2 === 0 ? "/assets/images/order1.png" : "/assets/images/order2.png",
    }));
  }, [order.cart]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setPaymentProof(file);
    setLocalError(null);
  };

  const handleProceed = async () => {
    if (loading) return;
    if (!paymentProof) {
      setLocalError("Please upload your bank transfer receipt to continue.");
      return;
    }

    await onProceedToConfirmation({
      payment_method: "bank_transfer",
      payment_proof: paymentProof,
    });
  };

  return (
    <div className="min-h-screen mt-40 bg-[#F5F5F5]">
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
              {TIMER_SEGMENTS.map((segment) => (
                <div className="flex flex-col items-center" key={segment}>
                  <div className="bg-[#E8E7E7] rounded-lg py-2 px-8 text-center min-w-[100px]">
                    <div className="text-3xl font-bold text-gray-900">
                      {formatTime(timeLeft[segment])}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Number */}
          <div className="mb-6">
            <div className="flex items-center justify-between py-3">
              <span className="text-gray-600 font-medium">Order Number</span>
            </div>
            <div className="flex items-center justify-center py-3">
              <span className="text-gray-900 font-semibold">
                {order.reference}
              </span>
            </div>
          </div>

          {/* Tickets */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Tickets
            </h3>
            <div className="space-y-3">
              {ticketItems.map((ticket, index) => (
                <div
                  className="flex items-center space-x-4 p-3 rounded-lg"
                  key={ticket.label}
                >
                  <Image
                    src={ticket.image}
                    alt={ticket.label}
                    width={40}
                    height={30}
                    className="rounded"
                  />

                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {ticket.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {ticket.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Manual Bank Transfer Only
            </h3>

            <div className="rounded-lg border border-gray-200 bg-[#FFF7F2] p-6 text-sm text-gray-700">
              <p className="font-semibold text-gray-900 mb-3">
                Please transfer the total amount to the following account and upload the
                transaction receipt.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="font-semibold text-gray-900">Account Name:</span>
                  <p>Vroom Racing Experiences</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Account Number:</span>
                  <p>001122334455</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">IBAN:</span>
                  <p>PK12HAB1234567890001234</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Bank & Branch:</span>
                  <p>HBL – DHA Phase 6, Karachi</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-600">
                Once we verify your payment, you will receive a confirmation email.
              </p>
            </div>
          </div>

          {/* Upload payment proof */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Upload Transfer Receipt (JPG, PNG, or PDF)
            </label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={handleFileChange}
              disabled={loading}
              className="w-full cursor-pointer rounded-md border border-dashed border-gray-300 bg-white p-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            {paymentProof && (
              <p className="mt-2 text-sm text-gray-600">
                Selected file: <span className="font-medium">{paymentProof.name}</span>
              </p>
            )}
          </div>

          {(error || localError) && (
            <div className="bg-red-50 text-red-600 text-sm rounded-lg p-3 mb-6 text-center">
              {error || localError}
            </div>
          )}

          {/* Proceed Button */}
          <div className="flex justify-center mt-8">
            <button
              type="button"
              onClick={handleProceed}
              disabled={!paymentProof || loading}
              className={`w-[60%] py-3 px-4 rounded-lg font-semibold text-lg transition-colors ${
                paymentProof && !loading
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {loading ? "Processing..." : "Proceed"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
