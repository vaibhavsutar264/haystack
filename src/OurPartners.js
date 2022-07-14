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
         <div className="our-partners-main mt-5 pt-5">
            <h1 className="our-partner-heading">OUR PARTNERS </h1>
            <h4 className="font-weight-normal our-partners-sub-heading">
               Make precision med a reality for millions
            </h4>
            <div className="d-flex justify-content-end">
               <div className="px-lg-5 px-md-4 px-sm-4 our-partners-tabs">
                  <p className="font-weight-normal our-partners-value m-0">
                     100+
                  </p>
                  <p className="font-weight-normal our-partners-text">Cities</p>
               </div>
               <div className="px-lg-5 px-md-4 px-sm-4 our-partners-tabs">
                  <p className="font-weight-normal our-partners-value m-0">
                     500+
                  </p>
                  <p className="font-weight-normal our-partners-text">
                     Hospitals
                  </p>
               </div>
               <div className="px-lg-5 px-md-4 px-sm-4">
                  <p className="font-weight-normal our-partners-value m-0">
                     100+
                  </p>
                  <p className="font-weight-normal our-partners-text">
                     Doctors
                  </p>
               </div>
            </div>
         </div>
         <div className="carousel" data-ride="true">
            <div className="carousel-item"></div>
         </div>
         <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={topBottomVariants}
            className="page-container"
         >
            <div className="page-back">
               <div id="example">
                  <div className="ourPartner mousemove-img our-partners-images">
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
