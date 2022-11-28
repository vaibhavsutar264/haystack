// @ts-nocheck
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";
// import data from "./data/data.json";
import Image from "next/image";
import useHeadroom from "react-useheadroom";
import styled from "@emotion/styled";
import settings from '../json/settings.json'
import { SidebarNav } from "./index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
   faYoutube,
   faInstagram,
   faFacebookF,
   faLinkedin,
   faTwitter,
   faX
} from "@fortawesome/free-brands-svg-icons";
import { XIcon, MenuIcon } from '@heroicons/react/outline'

// import iocns from "@f";

import menus from '../json/menus.json'
const productHeaderMenu = menus.productsHeader
import { useInView } from 'react-intersection-observer'

const MENU_LIST = [
   {
      text: "content will shown here in a while",
      href: "/Home",
   },
];


const StyledNavbar = styled.nav`
   transition: all 0.4s;
   transform: ${props => props.isPinned ? `translate3d(0,0px,0)` : `translate3d(0,-100px,0)`};
   background-color: ${props => props.isPinned ? `var(--navbar-bg, white)` : `transparent`};
   height: 40;
   width: 100%;
   position: fixed;
   top: 0;
   left: 0;
   padding: 1.5rem 0 1.5rem 0;
   z-index: 999;
   &.bg-white {
      background: white !important;
   }

   @media screen and (max-width: 600px)
   {
      .nav__menu-list {
         padding: 1.5rem 1rem;
         position: fixed;
         top: 0;
         left: 0;
         right: 0;
         background: white;
         min-height: 100vh;
         padding-top: 100px;
         display: none;
         flex-direction: column-reverse;
         justify-content: flex-end;
         &.active {
            display: flex;
         }
         .close {
            position: absolute;
            right: 1rem;
            top: 1rem;
         }
      }
   }
`

const Navbar = ({ renderMenu }) => {
   const [navActive, setNavActive] = useState(false);
   const [activeIdx, setActiveIdx] = useState(0);
   const [inView, setInView] = useState(false);
   const toggleMenu = () => {
      setNavActive(false)
   }
   useEffect(() => {
      globalThis.addEventListener('scroll', ev => {
         if (document.body.getBoundingClientRect().top >= 0) {
            setInView(true)
         } else {
            setInView(false)
         }
         // console.log({ ev })
      })
      if (inView) {
         // globalThis?.classList.add('bg-white')
      } else {
         // globalThis?.classList.remove('bg-white')
      }
   }, [])
   const isPinned = useHeadroom({
      fixAt: 100,
      onPin: () => {
         // set("pinned")
         document.body?.classList?.add('header-is-pinned')
      },
      onUnpin: () => {
         document.body?.classList?.remove('header-is-pinned')
      },
      onFix: (fixedAt) => {
         // set(`fixed at ${fixedAt}`)
         document.body?.classList?.add('header-is-fixed')
      },
      onUnfix: (fixedAt) => {
         // set(["unpinned", ` and unfixed from ${fixedAt}`])
         document.body?.classList?.remove('header-is-fixed')
      },

   });
   return (
      <StyledNavbar isPinned={isPinned} className={`${isPinned ? 'header-pinned' : ''} ${inView ? '' : 'bg-white'}`} >
         <nav className="navbar-main container mx-auto flex justify-between gap-4">
            <div className="navbar-brand">
               <Link href={"/"}>
                  <a className="flex px-3 md:px-0">
                     <Image src={settings.logo_url} alt="" className="navbar-logo" width={'250'} height={'60'} />
                  </a>
               </Link>
            </div>

            <div className={`${navActive ? "active" : ""} nav__menu-list`}>
               <div className="close md:hidden">
                  <XIcon className="w-8 h-8" onClick={toggleMenu} />
               </div>
               <div className="mb-3 md:mb-6 text-sm flex gap-6 text-gray-500 mt-6 justify-end md:mt-0">
                  <Link href="/">hello@haystackanalytics.in</Link>
                  <div className="mb-3 md:mb-2 text-sm flex gap-2 text-gray-500 mt-6 md:mt-0">
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
                  </div>
               </div>
               <div className="flex gap-6 flex-col md:flex-row mt-6 md:mt-0 nav-menu-main justify-end">
                  <Link className="font-semibold" href="/science-corner">Science Corner</Link>
                  <Link className="font-semibold" href="/about">About Us</Link>
                  <Link className="font-semibold" href="/">Products</Link>
               </div>
            </div>
            <div className="mt-3 mr-3 md:hidden">
               <MenuIcon className="w-8 h-8 cursor-pointer" onClick={() => setNavActive(true)} />
            </div>
         </nav>
      </StyledNavbar>
   );
};

export default Navbar;
