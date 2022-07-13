import React from "react";
import HambergerMenuWithScriptTag from "../HambergerMenuWithScriptTag";
import AreYouClinician from "../AreYouClinician";
import ResearchPapers from "../ResearchPapers";
import WhyChooseHaystack from "../WhyChooseHaystack";
import WhyThisTechnology from "../WhyThisTechnology";
import AreYouClinicianTestimonial from "../AreYouClinicianTestimonial";
import Footer from "../Footer";

function Clinician() {
   return (
      <>
         <HambergerMenuWithScriptTag />
         <AreYouClinician />
         <AreYouClinicianTestimonial />
         <ResearchPapers />
         <WhyChooseHaystack />
         <WhyThisTechnology />
         {/* <Quiz /> */}
         <Footer />
      </>
   );
}

export default Clinician;
