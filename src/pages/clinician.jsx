import React from "react";
import Template from "../Template";
import AreYouClinician from "../AreYouClinician";
import AreYouClinicianTestimonials from "../AreYouClinicianTestimonials";
import ResearchPapers from "../ResearchPapers";
import WhyChooseHaystack from "../WhyChooseHaystack";
import WhyThisTechnology from "../WhyThisTechnology";

function Clinician() {
   return (
      <>
         <div id="clinician">
            <Template>
               <AreYouClinician />
               <AreYouClinicianTestimonials />
               <ResearchPapers />
               <WhyChooseHaystack />
               <WhyThisTechnology />
            </Template>
         </div>
      </>
   );
}

export default Clinician;
