import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";

import {
   faYoutube,
   faInstagram,
   faFacebook,
   faLinkedin,
   faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const StyledFooter = styled.footer`

`

function Footer({ settings = {} }) {
   return (
      <StyledFooter>
         <div className="container mx-auto border-t-4 border-black py-6 px-3 md:px-0">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
               <div className="flex__col">
                  <p className="text-xl mb-3">
                  {settings.email}
                  </p>
                  <div className="flex items-center gap-5 text-3xl">
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
               <div className="flex__col md:self-end">
                  <ul className="flex flex-col gap-3 md:justify-end text-center md:text-right text-xl md:text-3xl font-bold">
                     <li>
                        <Link href="/blog">SCIENCE CORNER</Link>
                     </li>
                     <li>
                        <Link href="/universal">PRODUCT</Link>
                     </li>
                     <li>
                        <Link href={'/about'}>ABOUT US</Link>
                     </li>
                     <li>
                        <Link href="/news">LATEST NEWS</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </StyledFooter>
   );
}

export default Footer;
