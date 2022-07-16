import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const topBottomVariants = {
   visible: { y: 0, opacity: 1, transition: { delay: 1, duration: 1.5 } },
   hidden: { y: -50, opacity: 0 },
};

const NavbarContent = () => {
   const controls = useAnimation();
   const [ref, inView] = useInView();
   useEffect(() => {
      if (inView) {
         controls.start("visible");
      }
   }, [controls, inView]);
   return (
      <motion.div
         ref={ref}
         animate={controls}
         initial="hidden"
         variants={topBottomVariants}
         className="nav-menu col-12"
      >
         <div className="nav-menu-inner-container-1">
            <div className="nav-link-wrapper">
               <a href="#ecosystem" className="nav-link">
                  <strong>SCIENCE CORNER</strong>
               </a>
               <a href="#founders" className="nav-link">
                  <strong>PRODUCT</strong>
               </a>
               <a href="#investors" className="nav-link">
                  <strong>ABOUT US</strong>
               </a>
               <a href="#events" className="nav-link">
                  <strong>LATEST NEWS</strong>
               </a>
               <a href="#about" className="nav-link">
                  <strong>BLOG</strong>
               </a>
            </div>
         </div>
      </motion.div>
   );
};

export default NavbarContent;
