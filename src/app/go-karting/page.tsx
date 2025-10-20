import Footer from "@/components/home/Footer";
import KartingHeader from "./kartingHeader";
import ExperienceDetails from "./experienceDetails";
import PricingOptions from "./pricingOptions";
import GoKartingRegistrationForm from "./goKartingRegistrationForm";
import SafetyGuidelinesRequirements from "./safetyGuidelinesRequirements";
import CallToAction from "./callToAction";






export default function GoKarting() {
  return (
    <main>
    <KartingHeader/>   
    <ExperienceDetails/>
    <PricingOptions/>
    <GoKartingRegistrationForm/>
    <SafetyGuidelinesRequirements/>
    <CallToAction/>
    <Footer/>
    </main>
  );
}
