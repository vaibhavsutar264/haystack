import React from "react";
import "../jquerry";
import "../src";
import Template from "../Template";
import PreAnimationOnLoad from "../PreAnimationOnLoad";
import NavbarBgGrey from "../NavbarBgGrey";
import AreYouClinician from "../AreYouClinician";
import ResearchPapers from "../ResearchPapers";
import WhyChooseHaystack from "../WhyChooseHaystack";
import WhyThisTechnology from "../WhyThisTechnology";
import Footer from "../Footer";

function Clinician() {
   return (
      <>
         <div id="clinician">
            <Template>
               <AreYouClinician />
               <ResearchPapers />
               <WhyChooseHaystack />
               <WhyThisTechnology />
            </Template>
         </div>
      </>
   );
}

export default Clinician;
