import React from "react";
import ProductTemplate from "../ProductTemplate";
import OmegaTb from "../OmegaTb";
import WhyChoose from "../WhyChoose";
import OmegaTbTestWorks from "../OmegaTbTestWorks";
import AppTemplate from "../components/templates/AppTemplate";

function OmegaTB() {
   return (
      <AppTemplate>
         <OmegaTb />
         <WhyChoose />
         <OmegaTbTestWorks />
      </AppTemplate>
   );
}

export default OmegaTB;
