import React, { useEffect } from "react";
import styled from "@emotion/styled";
import img from "./assets/section-bg.png";
import Link from "../node_modules/next/link";

const StyledWrapper = styled.div`
   background-image: url(${img.src});
   .img {
      aspect-ratio: 16/9;
   }
`;

const Precision = () => {
   return (
      <StyledWrapper className="py-20" data-aos="fade-in" data-aos-delay="800">
         <div className="container mx-auto flex items-center justify-center">
            <div className="md:w-8/12 mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6">
                  <Link href="/clinician" >
                     <a className="hover:bg-blue-600 bg-black text-white text-center w-full text-2xl font-medium p-8 py-6">
                        I am a <br /> Clinician
                     </a>
                  </Link>
                  <Link href="/diagnostic" >
                     <a className="hover:bg-blue-600 bg-green-600 text-white text-center w-full text-2xl font-medium p-8 py-6">I am a <br /> Diagnostician</a>
                  </Link>
               </div>
            </div>
         </div>
      </StyledWrapper>
   );
};

export default Precision;
