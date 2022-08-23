import React from "react";
import ProductTemplate from "../ProductTemplate";
import PowerOfOneTest from "../PowerOfOneTest";
import UniversalIdTestWorks from "../UniversalIdTestWorks";
import Benefits from "../Benefits";

function UniversalId() {
   return (
      <>
         <div id="universal">
            <ProductTemplate>
               <PowerOfOneTest />
               <UniversalIdTestWorks />
               <Benefits />
            </ProductTemplate>
         </div>
      </>
   );
}

export default UniversalId;