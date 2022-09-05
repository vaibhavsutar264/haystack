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
import Link from "next/link";

function Footer({ settings = {} }) {
   return (
      <div className="container bg-white">
         <div className="footer-inner-container row justify-content-between w-80 border-top border-dark border-4 border-t-0 pb-0 pt-4">
            <div className="col-6">
               <p className="footer-text">{settings.email}</p>
               <div className="d-flex gap-2">
                  <a href={settings.facebook_url}>
                     <FontAwesomeIcon
                        id="icons"
                        className="text-dark"
                        icon={faFacebook}
                     />
                  </a>
                  <a href={settings.instagram_url}>
                     <FontAwesomeIcon
                        id="icons"
                        className="text-dark"
                        icon={faInstagram}
                     />
                  </a>
                  <a href={settings.linkedin_url}>
                     <FontAwesomeIcon
                        id="icons"
                        className="text-dark"
                        icon={faLinkedin}
                     />
                  </a>
                  <a href={settings.youtube_url}>
                     <FontAwesomeIcon
                        id="icons"
                        className="text-dark"
                        icon={faYoutube}
                     />
                  </a>
                  <a href={settings.twitter_url}>
                     <FontAwesomeIcon
                        id="icons"
                        className="text-dark"
                        icon={faTwitter}
                     />
                  </a>
               </div>
            </div>
            <div className="footer-pages width-75 col-6 d-flex flex-column align-items-end">
               <a href="./science-corner">SCIENCE CORNER</a>
               <a href="./universal">PRODUCT</a>
               <Link href={'/about'}>ABOUT US</Link>
               <Link href="/">LATEST NEWS</Link>
               <Link href={'/blog'}>BLOG</Link>
            </div>
         </div>
      </div>
   );
}

export default Footer;
