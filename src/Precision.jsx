import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      <>
         <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={topBottomVariants}
            className="precision-bg  width-75"
         >
            <div className="d-flex justify-content-center text-center flex-column precision-main">
               <div className="precision align-center">
                  <h1 className="precision-text text-white mb-5">
                     Making Precision med a reality in india
                  </h1>
               </div>
               <div className="precision-inner-content">
                  <button className="button precision-button-left me-lg-5 me-md-4 me-sm-3 me-xs-1 mb-sm-2">
                     <a href="">
                        I am a <br /> Clinician
                     </a>{" "}
                  </button>
                  <button className="button precision-button-right">
                     <a href="">
                        I am a <br /> Diagnostician
                     </a>{" "}
                  </button>
               </div>
            </div>
         </motion.div>
      </>
   );
};

export default Precision;
