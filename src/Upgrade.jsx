import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const topBottomVariants = {
   visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { delay: 0, duration: 1 },
   },
   hidden: { x: 200, opacity: 0.5, scale: 0.8 },
};

function Upgrade() {
   const controls = useAnimation();
   const [ref, inView] = useInView();
   useEffect(() => {
      if (inView) {
         controls.start("visible");
      }
   }, [controls, inView]);

   return (
      <section name="upgrade">
         <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={topBottomVariants}
            className="upgrade-main row"
         >
            <div className="col-6 d-flex floating-purpose">
               <div className="m-auto upgrade-left">
                  <h2 className="upgrade-heading">
                     Upgrade your lab
                     <br />
                     without hassle
                  </h2>
                  <p className="upgrade-para">Some detail about the test</p>
                  <p className="upgrade-para">Some detail about the test</p>
                  <button className="btn-test">View UID Test</button>
               </div>
            </div>
            <div className="upgrade-img col-6 d-flex m-auto floating-purpose-right"></div>
         </motion.div>
      </section>
   );
}

export default Upgrade;
