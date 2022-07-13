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
      <section className="upgrade">
         <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={topBottomVariants}
            className="upgrade-main">
            <div className="row">
               <div className="upgrade-content m-auto col-lg-6 col-md-6 col-sm-6">
                  <h2 className="upgrade-heading text-uppercase">
                     Upgrade your lab<br />
                     without hassle
                  </h2>
                  <p className="upgrade-para w-75">A Cutting edge health tech platform and genomic testing rolled into one</p>
                  <button className="btn-test">View UID Test</button>
               </div>
               <div className="upgrade-img m-auto col-lg-6 col-md-6 col-sm-6"></div>
            </div>
         </motion.div >
      </section >
   );
}

export default Upgrade;

// @media(max - width: 356px) {
//     .upgrade - main {
//       padding: 10px;
//    }
    
//     .upgrade - content {
//       width: 70 %;
//    }
    
//     .upgrade - img {
//       width: 100px;
//       height: 100px;
//       background - color: yellow;
//    }
// }