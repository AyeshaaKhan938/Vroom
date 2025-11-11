"use client";

import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import type {
  BillingPayload,
  CheckoutOrder,
  PricingConfig,
} from "./types";

interface BillingComponentProps {
  order: CheckoutOrder;
  pricing: PricingConfig;
  onContinueToPayment: (payload: BillingPayload) => Promise<void>;
  onBackToCart: () => void;
  loading: boolean;
  error?: string | null;
}

type BillingFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  emergencyContactName: string;
  emergencyPhone: string;
  relationship: string;
  subscribeNewsletter: boolean;
  smsNotifications: boolean;
};

const EMPTY_FORM: BillingFormState = {
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
};

export default function BillingComponent({
  order,
  pricing,
  onContinueToPayment,
  onBackToCart,
  loading,
  error,
}: BillingComponentProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<BillingFormState>(() => {
    if (order.billing) {
      return {
        firstName: order.billing.first_name ?? "",
        lastName: order.billing.last_name ?? "",
        email: order.billing.email ?? "",
        phone: order.billing.phone ?? "",
        streetAddress: order.billing.street_address ?? "",
        city: order.billing.city ?? "",
        state: order.billing.state ?? "",
        postalCode: order.billing.postal_code ?? "",
        country: order.billing.country ?? "",
        emergencyContactName: order.billing.emergency_contact_name ?? "",
        emergencyPhone: order.billing.emergency_phone ?? "",
        relationship: order.billing.relationship ?? "",
        subscribeNewsletter: Boolean(order.billing.subscribe_newsletter),
        smsNotifications: Boolean(order.billing.sms_notifications),
      };
    }
    return EMPTY_FORM;
  });

  useEffect(() => {
    if (order.billing) {
      setFormData({
        firstName: order.billing.first_name ?? "",
        lastName: order.billing.last_name ?? "",
        email: order.billing.email ?? "",
        phone: order.billing.phone ?? "",
        streetAddress: order.billing.street_address ?? "",
        city: order.billing.city ?? "",
        state: order.billing.state ?? "",
        postalCode: order.billing.postal_code ?? "",
        country: order.billing.country ?? "",
        emergencyContactName: order.billing.emergency_contact_name ?? "",
        emergencyPhone: order.billing.emergency_phone ?? "",
        relationship: order.billing.relationship ?? "",
        subscribeNewsletter: Boolean(order.billing.subscribe_newsletter),
        smsNotifications: Boolean(order.billing.sms_notifications),
      });
    }
  }, [order.billing]);

  const amounts = useMemo(() => order.amounts, [order.amounts]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;

    if (formRef.current && !formRef.current.reportValidity()) {
      return;
    }

    const payload: BillingPayload = {
      first_name: formData.firstName.trim(),
      last_name: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      street_address: formData.streetAddress.trim(),
      city: formData.city.trim(),
      state: formData.state.trim(),
      postal_code: formData.postalCode.trim(),
      country: formData.country,
      emergency_contact_name: formData.emergencyContactName.trim(),
      emergency_phone: formData.emergencyPhone.trim(),
      relationship: formData.relationship,
      subscribe_newsletter: formData.subscribeNewsletter,
      sms_notifications: formData.smsNotifications,
    };

    await onContinueToPayment(payload);
  };

  return (
    <div className="min-h-screen mt-32 satoshi-font bg-white">
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
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          noValidate
        >
          {/* Left Column - Billing Information */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold button-font text-gray-900 mb-6">
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
                    disabled={loading}
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
                    disabled={loading}
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
                    disabled={loading}
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
                    disabled={loading}
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
                    disabled={loading}
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
                      disabled={loading}
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
                      disabled={loading}
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
                      disabled={loading}
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
                    disabled={loading}
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
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
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
                    disabled={loading}
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
                    disabled={loading}
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
                    disabled={loading}
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
                    disabled={loading}
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
                    disabled={loading}
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
                      alt="Order image"
                      width={80}
                      height={60}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold button-font text-gray-900">
                      {pricing.product}
                    </h3>
                    <p className="text-sm text-gray-600">{pricing.package}</p>
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
                  <span>Subtotal ({order.cart.quantity} item{order.cart.quantity > 1 ? "s" : ""})</span>
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
                  <span className="text-2xl font-bold text-red-600">
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
              <div className="space-y-3 mb-6">
                <button
                  type="submit"
                  className={`w-full bg-red-600 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-colors ${
                    loading ? "opacity-70 cursor-not-allowed" : "hover:bg-red-700"
                  }`}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Continue to Payment"}
                  <Image
                    src="/assets/images/arrow.svg"
                    alt="Arrow"
                    width={27}
                    height={27}
                    className="ml-2"
                  />
                </button>
                <button
                  type="button"
                  onClick={onBackToCart}
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
                  Back to Cart
                </button>
              </div>

              {/* Secure Checkout */}
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Image
                    src="/assets/images/badge.svg"
                    alt="Badge"
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
        </form>
      </div>
    </div>
  );
}
