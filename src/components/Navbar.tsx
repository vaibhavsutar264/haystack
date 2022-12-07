// @ts-nocheck
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";
// import data from "./data/data.json";
import Image from "next/image";
import useHeadroom from "react-useheadroom";
import styled from "@emotion/styled";
import settings from '../json/settings.json'
import menus from '../json/menus.json'
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

const productHeaderMenu = menus.productsHeader
import { useInView } from 'react-intersection-observer'
import { useRouter } from "next/router";

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
   const router = useRouter()
   const [navActive, setNavActive] = useState(false);
   const [ dropdownOpened, setDropdownOpened ] = useState(false)
   const [ dropdownOpened1, setDropdownOpened1 ] = useState(false)

   const [activeIdx, setActiveIdx] = useState(0);
   const [inView, setInView] = useState(false);
   const isActiveMenu = useMemo(() => {

   }, [  ])
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
                  <a  className="text-dark" href={`mailto:${settings.email}`}>{settings.email}</a>
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
               <div className="flex gap-6 flex-col md:flex-row mt-6 md:mt-0 nav-menu-main justify-end relative">
                  <div className="has-dropdown font-semibold">
                     <div  className="font-semibold flex gap-2 items-center " href={'#'} >
                        <span className="cursor-pointer">{'Science Corner'}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                     </div>
                     <div className={`dropdown-menu absolute top-5 left-0 bg-white py-4 md:py-6 px-3  shadow-lg ${dropdownOpened1 ? '': 'hidden'}`}>
                        <ol className="flex flex-col gap-3">
                           {menus.sciencecornerHeader.map((mn, mnIndex) => (
                           <li>
                           <Link key={`mn${mnIndex}`} href={mn.url}>
                           <a className={`px-3 font-regular cursor-pointer hover:text-blue-600 ${router.pathname == mn.url ? 'active text-blue-600': ''}`}>- {mn.label}</a>
                           </Link>
                           </li>
                           ))}
                        </ol>
                     </div>
                  </div>
                  {menus.navbar.map((mn, mnIndex) => (
                  <Link key={`mn${mnIndex}`} href={mn.url}>
                     <a className={`${router.pathname == mn.url ? 'active text-blue-600': ''}`}>{mn.label}</a>
                  </Link>
                  ))}
                  <div className="has-dropdown">
                  <div  className="font-semibold flex gap-2 items-center has-dropdown" href={'#'} >
                     <span className="cursor-pointer">{'Products'}</span>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                     </svg>
                     <div className={`dropdown-menu absolute top-5 bg-white py-4 md:py-6 px-3  shadow-lg ${dropdownOpened ? '': 'hidden'}`}>
                        <ol className="flex flex-col gap-3">
                           {menus.productsHeader.map((mn, mnIndex) => (
                           <li key={`mnss_${mnIndex}`}>
                           <Link key={`mn${mnIndex}`} href={mn.url}>
                           <a className={`px-3 font-regular cursor-pointer hover:text-blue-600 ${router.pathname == mn.url ? 'active text-blue-600': ''}`}>- {mn.label}</a>
                           </Link>
                           </li>
                           ))}
                        </ol>
                     </div>
                  </div>
                  </div>
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
