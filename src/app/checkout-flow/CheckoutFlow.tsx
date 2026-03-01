"use client";

import { useCallback, useState } from "react";
import CartComponent from "./CartComponent";
import BillingComponent from "./BillingComponent";
import PaymentComponent from "./PaymentComponent";
import ConfirmationComponent from "./ConfirmationComponent";
import { postJson, postForm } from "@/lib/api";
import type {
  BillingPayload,
  CartPayload,
  CheckoutApiResponse,
  CheckoutOrder,
  PaymentPayload,
  PricingConfig,
} from "./types";

const PRICING: PricingConfig = {
  product: "Time Attack",
  package: "VIP Package",
  unitPrice: 12000,
  serviceFee: 500,
  gstRate: 0.17,
};

type Step = "cart" | "billing" | "payment" | "confirmation";

export default function CheckoutFlow() {
  const [currentStep, setCurrentStep] = useState<Step>("cart");
  const [order, setOrder] = useState<CheckoutOrder | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetError = () => setError(null);

  const handleCartContinue = useCallback(
    async ({ quantity, promoCode }: CartPayload) => {
      setLoading(true);
      resetError();
      try {
        const response = await postJson<CheckoutApiResponse, Record<string, unknown>>(
          "/checkout/cart",
          {
            product: PRICING.product,
            package: PRICING.package,
            quantity,
            unit_price: PRICING.unitPrice,
            service_fee: PRICING.serviceFee,
            gst_rate: PRICING.gstRate,
            promo_code: promoCode,
          }
        );
        setOrder(response.order);
        setCurrentStep("billing");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unable to continue to billing.");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const handleBillingContinue = useCallback(
    async (payload: BillingPayload) => {
      if (!order) {
        setError("No order found. Please restart the checkout flow.");
        return;
      }

      setLoading(true);
      resetError();
      try {
        const response = await postJson<CheckoutApiResponse, BillingPayload>(
          `/checkout/${order.id}/billing`,
          payload
        );
        setOrder(response.order);
        setCurrentStep("payment");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unable to save billing information.");
      } finally {
        setLoading(false);
      }
    },
    [order]
  );

  const handlePaymentProceed = useCallback(
    async (payload: PaymentPayload) => {
      if (!order) {
        setError("No order found. Please restart the checkout flow.");
        return;
      }

      setLoading(true);
      resetError();
      try {
        const formData = new FormData();
        formData.append("payment_method", payload.payment_method);
        formData.append("payment_proof", payload.payment_proof);

        const response = await postForm<CheckoutApiResponse>(
          `/checkout/${order.id}/payment`,
          formData
        );
        setOrder(response.order);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("latestOrderId", String(response.order.id));
          sessionStorage.setItem(
            "latestOrderReference",
            response.order.reference ?? ""
          );
        }
        setCurrentStep("confirmation");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unable to process payment.");
      } finally {
        setLoading(false);
      }
    },
    [order]
  );

  const handleBackToExperiences = () => {
    window.location.href = "/experiences";
  };

  const handleBackToCart = () => {
    setCurrentStep("cart");
  };

  const renderStep = () => {
    switch (currentStep) {
      case "cart":
        return (
          <CartComponent
            pricing={PRICING}
            order={order}
            onContinueToBilling={handleCartContinue}
            onBackToExperiences={handleBackToExperiences}
            loading={loading}
            error={error}
          />
        );
      case "billing":
        return order ? (
          <BillingComponent
            pricing={PRICING}
            order={order}
            onContinueToPayment={handleBillingContinue}
            onBackToCart={handleBackToCart}
            loading={loading}
            error={error}
          />
        ) : null;
      case "payment":
        return order ? (
          <PaymentComponent
            order={order}
            onProceedToConfirmation={handlePaymentProceed}
            loading={loading}
            error={error}
          />
        ) : null;
      case "confirmation":
        return order ? <ConfirmationComponent order={order} /> : null;
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
}
