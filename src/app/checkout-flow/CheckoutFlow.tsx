"use client";

import { useState } from "react";
import CartComponent from "./CartComponent";
import BillingComponent from "./BillingComponent";
import PaymentComponent from "./PaymentComponent";
import ConfirmationComponent from "./ConfirmationComponent";

export default function CheckoutFlow() {
  const [currentStep, setCurrentStep] = useState<
    "cart" | "billing" | "payment" | "confirmation"
  >("cart");

  const goToBilling = () => setCurrentStep("billing");
  const goToPayment = () => setCurrentStep("payment");
  const goToConfirmation = () => setCurrentStep("confirmation");
  const goToCart = () => setCurrentStep("cart");
  const goToExperiences = () => {
    // Navigate back to experiences page
    window.location.href = "/experiences";
  };

  const renderStep = () => {
    switch (currentStep) {
      case "cart":
        return (
          <CartComponent
            onContinueToBilling={goToBilling}
            onBackToExperiences={goToExperiences}
          />
        );
      case "billing":
        return (
          <BillingComponent
            onContinueToPayment={goToPayment}
            onBackToCart={goToCart}
          />
        );
      case "payment":
        return <PaymentComponent onProceedToConfirmation={goToConfirmation} />;
      case "confirmation":
        return <ConfirmationComponent />;
      default:
        return (
          <CartComponent
            onContinueToBilling={goToBilling}
            onBackToExperiences={goToExperiences}
          />
        );
    }
  };

  return <div>{renderStep()}</div>;
}
