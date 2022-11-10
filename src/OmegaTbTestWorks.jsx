import Image from "next/image";
import React from "react";
import OmegaTbTestWorksImg from "./omega-tb-test-works-img.png";

function OmegaTbTestWorks() {
   return (
      <>
         <section
            className="py-10"
         >
            <div className="container px-3 md:px-0 mx-auto">
               <p className="text-4xl md:text-5xl font-bold mb-4 text-black">
                  How Does Omega TB Test Work?
               </p>
               <div className="w-10/12 mx-auto my-10">
                  <Image src={OmegaTbTestWorksImg} />
               </div>
            </div>
         </section>
      </>
   );
}

export default OmegaTbTestWorks;
