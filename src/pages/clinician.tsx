import React from "react";
import Template from "../Template";
import AreYouClinician from "../AreYouClinician";
import AreYouClinicianTestimonials from "../AreYouClinicianTestimonials";
import ResearchPapers from "../ResearchPapers";
import WhyChooseHaystack from "../WhyChooseHaystack";
import WhyThisTechnology from "../WhyThisTechnology";

export default function Clinician() {
   return (
      <>
         {/* <div id="clinician"> */}
            <Template>
               <AreYouClinician />
               <AreYouClinicianTestimonials />
               <ResearchPapers />
               <WhyChooseHaystack />
               <WhyThisTechnology />
            </Template>
         {/* </div> */}
      </>
   );
}
