import React from "react";
import HambergerMenuWithScriptTag from "../HambergerMenuWithScriptTag";
import AreYouClinician from "../AreYouClinician";
import ResearchPapers from "../ResearchPapers";
import WhyChooseHaystack from "../WhyChooseHaystack";
import WhyThisTechnology from "../WhyThisTechnology";
import Footer from "../Footer";

function Clinician() {
   return (
      <div id="clinician">
         <HambergerMenuWithScriptTag />
         <AreYouClinician />
         <ResearchPapers />
         <WhyChooseHaystack />
         <WhyThisTechnology />
         <Footer />
      </div>
   );
}

export default Clinician;
