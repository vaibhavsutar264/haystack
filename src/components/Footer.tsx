// @ts-nocheck
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";
import settings from '../json/settings.json'

import {
   faYoutube,
   faInstagram,
   faFacebookF,
   faLinkedin,
   faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import footerMenus from '../json/menus.json'
import Image from "next/image";

const StyledFooter = styled.footer`

`

function Footer({ settings = {}, menus }) {
   return (
      <StyledFooter className="bg-gray-100">
         <div className="container mx-auto py-8 px-3 md:px-0">
            <div className="flex flex-col md:flex-row gap-4">
               <div className="md:w-4/12">
                  <Link href={"/"}>
                     <a className="flex px-3 md:px-0">
                        <Image src={settings.logo_url} alt="" className="navbar-logo" width={'250'} height={'60'} />
                     </a>
                  </Link>
               </div>
               <div className="md:w-3/12">
                  <ul className="text-sm text-gray-600 flex flex-col gap-3">
                     <li>
                        <Link href="">Science Corner</Link>
                     </li>
                     <li>
                        <Link href="">About Us</Link>
                     </li>
                     <li>
                        <Link href="">Product</Link>
                     </li>
                  </ul>
               </div>
               <div className="md:w-3/12">
                  <ul className="text-sm text-gray-600 flex flex-col gap-3">
                     <li>
                        <Link href="">{settings.email}</Link>
                     </li>
                     <li>
                        <Link href="">99999999</Link>
                     </li>
                     <li className="flex items-center gap-6 text-xl">
                        {settings.facebook_url ? (
                           <a href={settings.facebook_url}>
                              <FontAwesomeIcon
                                 id="icons"
                                 className="text-dark"
                                 icon={faFacebookF}
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
                        ) : null}
                        {settings.youtube_url ? (
                           <a href={settings.youtube_url}>
                              <FontAwesomeIcon
                                 id="icons"
                                 className="text-dark"
                                 icon={faYoutube}
                              />
                           </a>
                        ) : null}
                        {settings.twitter_url ? (
                           <a href={settings.twitter_url}>
                              <FontAwesomeIcon
                                 id="icons"
                                 className="text-dark"
                                 icon={faTwitter}
                              />
                           </a>
                        ) : null}
                     </li>
                  </ul>
               </div>
               <div className="md:w-6/12">
                  <ul className="text-sm text-gray-600 flex flex-col gap-3 md:justify-end">
                     <li className="md:text-end">
                        <Link href="">Copyright 2022 - Haystack Analytics</Link>
                     </li>
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
