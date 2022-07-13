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
      <div className="width-75 container-fluid d-flex justify-content-center footer-container">
         <div className="footer-inner-container row justify-content-between w-80 border-top border-dark border-4 pt-4">
            <div className="col-6">
               <p className="footer-text">hello@haystackanalytics.in</p>
               <div className="justify-content-center">
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
