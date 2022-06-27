// import "./app.css";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';

import {
   faYoutube,
   faInstagram,
   faFacebook,
   faLinkedin,
   faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
   return (
      <div className="footer-center width-75">
         <div className="footer-inner-container">
            <div className="footer-row-1 col-6">
               <p className="footer-para">hello@haystackanalytics.in</p>
               <div className="social-icon">
                  <FontAwesomeIcon id="icons" icon={faFacebook} />
                  <FontAwesomeIcon id="icons" icon={faInstagram} />
                  <FontAwesomeIcon id="icons" icon={faLinkedin} />
                  <FontAwesomeIcon id="icons" icon={faYoutube} />
                  <FontAwesomeIcon id="icons" icon={faTwitter} />
                  <a href="#facebook">
                     <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#instagram">
                     <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#linkedin">
                     <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="#youtube">
                     <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a href="#twitter">
                     <FontAwesomeIcon icon={faTwitter} />
                  </a>
               </div>
            </div>
            <div className="footer-row-2 col-6 width-75">
               <a href="#science-corner">SCIENCE CORNER</a>
               <a href="#product">PRODUCT</a>
               <a href="#about-us">ABOUT US</a>
               <a href="#latest-news">LATEST NEWS</a>
               <a href="#blog">BLOG</a>
            </div>
         </div>
      </div>
   );
}

export default Footer;
