import React from "react";
import ResearchPapers from "../ResearchPapers";
import WhyChooseHaystack from "../WhyChooseHaystack";
import WhyThisTechnology from "../WhyThisTechnology";
import AreYouDiagnostic from "../AreYouDiagnostic";
import Template from "../Template";

function Diagnostic() {
   return (
      <>
         <div id="diagnostic">
            <Template>
               <AreYouDiagnostic />
               <ResearchPapers />
               <WhyChooseHaystack />
               <WhyThisTechnology />
            </Template>
         </div>
      </>
   );
}

export default Diagnostic;