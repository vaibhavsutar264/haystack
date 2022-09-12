import React from "react";
import ProductTemplate from "../ProductTemplate";
import OmegaTb from "../OmegaTb";
import WhyChoose from "../WhyChoose";
import OmegaTbTestWorks from "../OmegaTbTestWorks";
import AppTemplate from "../components/templates/AppTemplate";
import HeroBanner from "../components/HeroBanner";
import OmegaTbImg from "../omega-tb.png";

function OmegaTB() {
   return (
      <AppTemplate>
         <HeroBanner
            bgColor="white"
            title={`OMEGA TB :`}
            description={`Doing Our Part For TB Free World`}
            image={OmegaTbImg}
         />
         <WhyChoose />
         <OmegaTbTestWorks />
      </AppTemplate>
   );
}

export default OmegaTB;
