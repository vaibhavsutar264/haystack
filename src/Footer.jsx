
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
   faYoutube,
   faInstagram,
   faFacebook,
   faLinkedin,
   faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
   return (
      <div className="container">
         <div className="footer-inner-container row justify-content-between w-80 border-top border-dark border-4 pt-4">
            <div className="col-6">
               <p className="footer-text">hello@haystackanalytics.in</p>
               <div className="d-flex gap-2">
                  <a href="#facebook">
                     <FontAwesomeIcon id="icons" className="text-dark" icon={faFacebook} />
                  </a>
                  <a href="#instagram">
                     <FontAwesomeIcon id="icons" className="text-dark" icon={faInstagram} />
                  </a>
                  <a href="#linkedin">
                     <FontAwesomeIcon id="icons" className="text-dark" icon={faLinkedin} />
                  </a>
                  <a href="#youtube">
                     <FontAwesomeIcon id="icons" className="text-dark" icon={faYoutube} />
                  </a>
                  <a href="#twitter">
                     <FontAwesomeIcon id="icons" className="text-dark" icon={faTwitter} />
                  </a>
               </div>
            </div>
            <div className="footer-pages width-75 col-6 d-flex flex-column align-items-end">
               <a href="./science-corner">SCIENCE CORNER</a>
               <a href="./universal">PRODUCT</a>
               <a href="./about-us">ABOUT US</a>
               <a href="./latest-news">LATEST NEWS</a>
               <a href="./blogs">BLOG</a>
            </div>
         </div>
      </div>
   );
}

export default Footer;
