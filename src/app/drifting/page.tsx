import Footer from "@/components/home/Footer";
import DriftingHeader from "./driftingHeader";
import WhatsIncluded from "./whatsIncluded";
import PricingOptions from "./pricingOptions";
import DriftingRegistrationForm from "./driftingRegistrationForm";
import SafetyAndLicensingRequirements from "./safetyAndLicensingRequirements";
import CallToAction from "./callToAction";




export default function Drifting() {
  return (
    <main>
<DriftingHeader/>
<WhatsIncluded/>
<PricingOptions/>
<DriftingRegistrationForm/>
<SafetyAndLicensingRequirements/>
<CallToAction/>
<Footer/>
    </main>
  );
}