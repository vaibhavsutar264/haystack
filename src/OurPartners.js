import React, { useEffect } from "react";
import OurPartner from "./OurPartner";

import Script from "next/script";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const topBottomVariants = {
   visible: { opacity: 1, scale: 1, transition: { delay: 0, duration: 2 } },
   hidden: { opacity: 0.5, scale: 0.5 },
};
// import "../styles/Offers.css"

const OurPartners = ({ ourPartner }) => {
   const controls = useAnimation();
   const [ref, inView] = useInView();
   useEffect(() => {
      if (inView) {
         controls.start("visible");
      }
   }, [controls, inView]);
   return (
      <>
         <h1 className="heading">OUR PARTNERS </h1>
         <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={topBottomVariants}
            className="page-container"
         >
            <div className="page-back">
               <div id="example">
                  <div className="ourPartner mousemove-img">
                     {ourPartner.map((item, index) => (
                        <OurPartner
                           key={item.image}
                           index={index}
                           src={item.image}
                           link={item.url}
                        />
                     ))}
                  </div>
               </div>
            </div>
            <Script src="jquerry.js"></Script>
            <Script src="src.js"></Script>
         </motion.div>
      </>
   );
};

export default OurPartners;
