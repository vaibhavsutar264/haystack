import Image from "next/image";
import UpgradeImg from "./box.png";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";

const topBottomVariants = {
   visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { delay: 0, duration: 1 },
   },
   hidden: { x: 200, opacity: 0.5, scale: 0.8 },
};

const StyledComponent = styled.div`
`

export default function Upgrade() {
   const controls = useAnimation();
   const [ref, inView] = useInView();
   useEffect(() => {
      if (inView) {
         controls.start("visible");
      }
   }, [controls, inView]);

   return (
      <StyledComponent className="upgrade">
         <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={topBottomVariants}
            className="upgrade-main"
         >
            <div className="container mx-auto px-3 md:px-0">
               <div className="md:grid grid-cols-6 gap-4 items-center">
                  <div className="col-span-4">
                     <div className="mb-6">
                        <h2 className="upgrade-heading text-4xl font-extrabold uppercase mb-3">
                           Upgrade your lab <br /> without hassle
                        </h2>
                        <p className="upgrade-para text-xl font-weight-normal py-xl-3 py-lg-3 py-md-2 mb-4">
                           A Cutting edge health tech platform and genomic testing
                           rolled into one
                        </p>
                        <button className="px-xl-5 px-lg-4 btn-test bg-white text-blue-400 font-bold px-6 py-3 rounded-full border">
                           View UID Test
                        </button>
                     </div>

                  </div>
                  <div className="col-span-2">
                     <Image src={UpgradeImg} />
                  </div>
               </div>
            </div>
         </motion.div>
      </StyledComponent>
   );
}
