import Footer from "@/components/home/Footer";
import TimeHeader from "./timeHeader";
import TimeAttackExperience from "./timeAttackExperience";
import PackageSelection from "./packageSelection";
import RegistrationForm from "./registrationForm";
import SafetyRequirements from "./safetyRequirements";
import TermsAndConditions from "./termsAndConditions";
import CallToAction from "./callToAction";






export default function TimeAttack() {
  return (
    <main>
<TimeHeader/>
<TimeAttackExperience/>
<PackageSelection/>
<RegistrationForm/>
<SafetyRequirements/>
<TermsAndConditions/>
<CallToAction/>
<Footer/>
    </main>
  );
}
