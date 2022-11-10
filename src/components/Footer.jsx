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
import footerMenus from '../json/menus.json'

const StyledFooter = styled.footer`

`

function Footer({ settings = {}, menus }) {
   return (
      <StyledFooter>
         <div className="container mx-auto border-t-4 border-black py-6 px-3 md:px-0">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
               <div className="flex__col">
                  <p className="text-xl mb-3">
                  {settings.email}
                  </p>
                  <div className="flex items-center gap-5 text-3xl">
                     {settings.facebook_url ? (
                        <a href={settings.facebook_url}>
                           <FontAwesomeIcon
                              id="icons"
                              className="text-dark"
                              icon={faFacebook}
                           />
                        </a>
                     ) : null}

                     {settings.instagram_url ? (
                        <a href={settings.instagram_url}>
                           <FontAwesomeIcon
                              id="icons"
                              className="text-dark"
                              icon={faInstagram}
                           />
                        </a>
                     ) : null}

                     {settings.linkedin_url ? (
                        <a href={settings.linkedin_url}>
                           <FontAwesomeIcon
                              id="icons"
                              className="text-dark"
                              icon={faLinkedin}
                           />
                        </a>
                     ): null}
                     {settings.youtube_url ? (
                        <a href={settings.youtube_url}>
                           <FontAwesomeIcon
                              id="icons"
                              className="text-dark"
                              icon={faYoutube}
                           />
                        </a>
                     ): null}
                     {settings.twitter_url ? (
                        <a href={settings.twitter_url}>
                           <FontAwesomeIcon
                              id="icons"
                              className="text-dark"
                              icon={faTwitter}
                           />
                        </a>
                     ) : null}
                  </div>
               </div>
               <div className="flex__col md:self-end">
                  <ul className="flex flex-col gap-3 md:justify-end text-center md:text-right text-xl md:text-3xl font-bold">
                     {menus?.map(menuItem => (
                     <li key={`min_${menuItem}`}>
                        <Link href={menuItem.url}>{menuItem.title}</Link>
                     </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </StyledFooter>
   );
}

Footer.defaultProps = {
   menus: footerMenus.footer
}

export default Footer;
