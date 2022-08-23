import React, { useEffect } from "react";
import Script from "next/script";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const topBottomVariants = {
   visible: { opacity: 1, scale: 1, transition: { delay: 0, duration: 2 } },
   hidden: { opacity: 0.5, scale: 0.5 },
};

const MouseMoveScroll = () => {
   const controls = useAnimation();
   const [ref, inView] = useInView();
   useEffect(() => {
      if (inView) {
         controls.start("visible");
      }
   }, [controls, inView]);
   return (
      <>
         {" "}
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
                  <ul>
                     <li>
                        <img
                           id="mousemove-img"
                           src="https://cdn.worldvectorlogo.com/logos/anderson-instrument.svg"
                        />
                     </li>
                     <li>
                        <img
                           id="mousemove-img"
                           className="mouse-move-scroll-padding-top"
                           src="https://scontent.fbom19-3.fna.fbcdn.net/v/t1.6435-9/37782768_1961041177295256_589992394661822464_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zNC77NhWTvcAX-zrjlW&_nc_ht=scontent.fbom19-3.fna&oh=00_AT_87gsojGBXpsig0sInjgx8tgOrjznbaTrn58k-eu_avA&oe=62B4E894"
                        />
                     </li>
                     <li>
                        <img
                           id="mousemove-img"
                           src="https://upload.wikimedia.org/wikipedia/en/5/5e/Thyrocare_Logo.png?20210630145618"
                        />
                     </li>
                     <li>
                        <img
                           id="mousemove-img"
                           className="mouse-move-scroll-padding-top"
                           src="https://scontent.fbom26-2.fna.fbcdn.net/v/t39.30808-6/285180762_7745240502183544_7115995020704162885_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0w_chLjc7RsAX8oRLVB&_nc_ht=scontent.fbom26-2.fna&oh=00_AT_LYCvdYg6-b15R3kqBWsQXCpUk550YmUG97tmlDDPgOg&oe=62A55E6E"
                        />
                     </li>
                     <li>
                        <img
                           id="mousemove-img"
                           src="https://scontent.fbom19-3.fna.fbcdn.net/v/t1.6435-9/37782768_1961041177295256_589992394661822464_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zNC77NhWTvcAX-zrjlW&_nc_ht=scontent.fbom19-3.fna&oh=00_AT_87gsojGBXpsig0sInjgx8tgOrjznbaTrn58k-eu_avA&oe=62B4E894"
                        />
                     </li>
                  </ul>
               </div>
            </div>

            <Script src="jquerry.js"></Script>
            <Script src="src.js"></Script>
         </motion.div>
      </>
   );
};

export default MouseMoveScroll;
