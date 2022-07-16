import React, { useEffect } from "react";
import styled from "@emotion/styled";
import img from './precision-bg-true.png'

const StyledWrapper = styled.div`
.precision-bg {
   background-image: url(${img.src});
}
.img {
   aspect-ratio: 16/9;
}
`


const Precision = () => {
   return (
      <StyledWrapper>
         <div
            className="precision-bg  width-75"
         >
            <div className="container d-flex justify-content-center text-center flex-column precision-main">
               <div className="precision-inner-content">
                  <button className="button precision-button-left me-lg-5 me-md-4 me-sm-3 me-xs-1 mb-sm-2">
                     <a href="./clinician">
                        I am a <br /> Clinician
                     </a>{" "}
                  </button>
                  <button className="button precision-button-right">
                     <a href="c/diagnostic">
                        I am a <br /> Diagnostician
                     </a>{" "}
                  </button>
               </div>
            </div>
         </div>
      </StyledWrapper>
   );
};

export default Precision;
