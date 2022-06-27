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
                  <strong>ECOSYSTEM</strong>
               </a>
               <a href="#founders" className="nav-link">
                  <strong>FOUNDERS</strong>
               </a>
               <a href="#investors" className="nav-link">
                  <strong>INVESTORS</strong>
               </a>
               <a href="#events" className="nav-link">
                  <strong>EVENTS</strong>
               </a>
               <a href="#about" className="nav-link">
                  <strong>ABOUT</strong>
               </a>
            </div>
            <div className="nav-menu-bottom-container">
               <h4 className="nav-menu-bottom-text">
                  We're always looking for new talent
               </h4>
               <button className="nav-menu-bottom-btn">SEE CAREERS PAGE</button>
            </div>
         </div>
         <div className="nav-menu-inner-container-2 col-8">
            <div className="nav-menu-latest-news">
               <div className="nav-menu-latest-news-top-container">
                  <h4 className="nav-menu-latest-news-heading">Latest News</h4>
                  <a href="#all-news" className="nav-menu-latest-news-link">
                     ALL NEWS &gt;
                  </a>
               </div>
               <div className="nav-menu-latest-news-main-container">
                  <div className="nav-menu-latest-news-main-container-inner">
                     {/* <img className="latest-news-img" src={""} alt="" /> */}
                     <h3>April 21, 2022</h3>
                  </div>
                  <div className="nav-menu-latest-news-main-container-inner">
                     {/* <img className="latest-news-img" src={latestNews} alt="" /> */}
                     <h3>April 21, 2022</h3>
                  </div>
               </div>
               <div className="nav-menu-newsletter">
                  <h4>Subscribe to our news letter</h4>
                  <div className="form">
                     <input
                        type="text"
                        name="first_name"
                        placeholder="FIRST NAME"
                        className="input-fields"
                     />
                     <input
                        type="text"
                        name="last_name"
                        placeholder="LAST NAME"
                        className="input-fields"
                     />
                     <br />
                     <input
                        type="email"
                        name="email"
                        placeholder="NAME@EMAIL.COM"
                        className="input-fields email-input"
                     />
                     <button type="submit" className="join-btn">
                        JOIN &gt;
                     </button>
                  </div>
               </div>
               <div className="nav-menu-last-container">
                  <div className="nav-menu-connect">
                     <h4>Connect</h4>
                     <div className="nav-menu-social-icons">
                        <a href="#facebook">
                           <i className="fa fa-facebook-f nav-menu-social"></i>
                        </a>
                        <a href="#instagram">
                           <i className="fa fa-instagram nav-menu-social"></i>
                        </a>
                        <a href="#linkedin">
                           <i className="fa fa-linkedin nav-menu-social"></i>
                        </a>
                        <a href="#youtube">
                           <i className="fa fa-youtube nav-menu-social"></i>
                        </a>
                        <a href="#twitter">
                           <i className="fa fa-twitter nav-menu-social"></i>
                        </a>
                     </div>
                  </div>
                  <div className="nav-menu-get-in-touch">
                     <h4>Get in touch</h4>
                     <a href="#contact">CONTACT &gt;</a>
                  </div>
               </div>
            </div>
         </div>
      </motion.div>
   );
};

export default NavbarContent;
