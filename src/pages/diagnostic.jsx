import React from "react";
import "../jquerry";
import "../src";
import PreAnimationOnLoad from "../PreAnimationOnLoad";
import NavbarBgGrey from "../NavbarBgGrey";
import ResearchPapers from "../ResearchPapers";
import WhyChooseHaystack from "../WhyChooseHaystack";
import WhyThisTechnology from "../WhyThisTechnology";
import Footer from "../Footer";
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