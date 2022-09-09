import React from "react";
import ResearchPapers from "../ResearchPapers";
import WhyChooseHaystack from "../WhyChooseHaystack";
import WhyThisTechnology from "../WhyThisTechnology";
import AreYouDiagnostic from "../AreYouDiagnostic";
import AppTemplate from "../components/templates/AppTemplate";

function Diagnostic() {
   return (
      <AppTemplate>
         <AreYouDiagnostic />
         <WhyChooseHaystack />
         <WhyThisTechnology />
      </AppTemplate>
   );
}

export default Diagnostic;
