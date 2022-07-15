import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const topBottomVariants = {
   visible: { scale: 1, opacity: 1, transition: { delay: 0, duration: 2 } },
   hidden: { scale: 0.7, opacity: 0.5 },
};

function WeGotCovered() {
   const controls = useAnimation();
   const [ref, inView] = useInView();
   useEffect(() => {
      if (inView) {
         controls.start("visible");
      }
   }, [controls, inView]);
   return (
      <>
         <section className="we-got-covered m-auto container py-5">
            <h3 className="d-block text-capitalize we-got-covered-main-heading">
               We got Covered
            </h3>
            <motion.div
               ref={ref}
               animate={controls}
               initial="hidden"
               variants={topBottomVariants}
               className="we-got-covered-inner-container"
            >
               <div className="row pb-5 mt-3">
                  <div className="we-got-covered-card col-lg-3 col-md-4 col-sm-6 col-xs-6">
                     <div className="we-got-covered-img"></div>
                     <h3 className="we-got-covered-headings w-75 my-2">Haystack Analytics and faster genomics diagnostics</h3>
                     <p className="we-got-covered-read-more font-weight-normal">
                        <a href="#read-more">Read more &gt;&gt;</a>
                     </p>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                     <div className="we-got-covered-img"></div>
                     <h3 className="we-got-covered-headings w-75 my-2">Haystack Analytics and faster genomics diagnostics</h3>
                     <p className="we-got-covered-read-more font-weight-normal">
                        <a href="#read-more">Read more &gt;&gt;</a>
                     </p>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                     <div className="we-got-covered-img"></div>
                     <h3 className="we-got-covered-headings w-75 my-2">Haystack Analytics and faster genomics diagnostics</h3>
                     <p className="we-got-covered-read-more font-weight-normal">
                        <a href="#read-more">Read more &gt;&gt;</a>
                     </p>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                     <div className="we-got-covered-img"></div>
                     <h3 className="we-got-covered-headings w-75 my-2">Haystack Analytics and faster genomics diagnostics</h3>
                     <p className="we-got-covered-read-more font-weight-normal">
                        <a href="#read-more">Read more &gt;&gt;</a>
                     </p>
                  </div>
               </div>
            </motion.div>
         </section>
      </>
   );
}

export default WeGotCovered;
