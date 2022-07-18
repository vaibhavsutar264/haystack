import React from "react";
import Template from "../Template";
import PowerOfOneTest from "../PowerOfOneTest";
import UniversalIdTestWorks from "../UniversalIdTestWorks";
import Benefits from "../Benefits";

function UniversalId() {
   return (
      <>
         <div id="universal">
            <Template>
               <PowerOfOneTest />
               <UniversalIdTestWorks />
               <Benefits />
            </Template>
         </div>
      </>
   );
}

export default UniversalId;