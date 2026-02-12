import Footer from "@/components/home/Footer";
import CorporateHeader from "./corporateHeader";
import PackageSelection from "../time-attack/packageSelection";
import CorporatePackageTiers from "./corporatePackageTiers";
import CorporateBenefitsActivities from "./corporateBenefitsActivities";
import CorporateRegistrationForm from "./corporateRegistrationForm";





export default function CorporatePackages() {
  return (
    <main>
<CorporateHeader/>
<CorporatePackageTiers/>
<CorporateBenefitsActivities/>
<CorporateRegistrationForm/>
<Footer/>
    </main>
  );
}