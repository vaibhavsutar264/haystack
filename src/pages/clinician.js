import React from "react";
import AreYouClinician from "../AreYouClinician";
import ResearchPapers from "../ResearchPapers";
import WhyChooseHaystack from "../WhyChooseHaystack";
import WhyThisTechnology from "../WhyThisTechnology";
import OurPartnersMain from "../OurPartnersMain";
import AreYouClinicianTestimonial from "../AreYouClinicianTestimonial";
import Footer from "../Footer";

function Clinician() {
   return (
      <>
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
