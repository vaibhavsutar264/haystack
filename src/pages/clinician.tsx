import React from "react";
import AreYouClinician from "../AreYouClinician";
import AreYouClinicianTestimonials from "../AreYouClinicianTestimonials";
import ResearchPapers from "../ResearchPapers";
import WhyChooseHaystack from "../WhyChooseHaystack";
import WhyThisTechnology from "../WhyThisTechnology";
import AppTemplate from "../components/templates/AppTemplate";

export default function Clinician() {
   return (
      <>
         {/* <div id="clinician"> */}
            <AppTemplate>
               <AreYouClinician />
               <AreYouClinicianTestimonials />
               <ResearchPapers />
               <WhyChooseHaystack />
               <WhyThisTechnology />
            </AppTemplate>
         {/* </div> */}
      </>
   );
}
