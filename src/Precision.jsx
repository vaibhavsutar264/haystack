import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

const topBottomVariants = {
   visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5, duration: 1.5 },
   },
   hidden: { x: -200, opacity: 0.5, scale: 0.8 },
};

const Precision = () => {
   const controls = useAnimation();
   const [ref, inView] = useInView();
   useEffect(() => {
      if (inView) {
         controls.start("visible");
      }
   }, [controls, inView]);
   return (
      <StyledWrapper>
         <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={topBottomVariants}
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
         </motion.div>
      </StyledWrapper>
   );
};

export default Precision;
