import React from "react";
import HambergerMenuWithScriptTag from "../HambergerMenuWithScriptTag";
import ResearchPapers from "../ResearchPapers";
import WhyChooseHaystack from "../WhyChooseHaystack";
import WhyThisTechnology from "../WhyThisTechnology";
import Footer from "../Footer";
import AreYouDiagnostic from "../AreYouDiagnostic";

function Diagnostic() {
   return (
      <div id="diagnostic">
         <HambergerMenuWithScriptTag />
         <AreYouDiagnostic />
         <ResearchPapers />
         <WhyChooseHaystack />
         <WhyThisTechnology />
         <Footer />
      </div>
   );
}

export default Diagnostic;
