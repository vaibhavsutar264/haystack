import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";
// import data from "./data/data.json";
import Image from "next/image";
import useHeadroom from "react-useheadroom";
import styled from "@emotion/styled";
import settings from '../json/settings.json'
import { SidebarNav } from "./index";
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
   padding: 0.5rem 0 0.5rem 0;
   z-index: 999;
   &.bg-white {
      background: white !important;
   }
`

const Navbar = ({ renderMenu }) => {
   const [navActive, setNavActive] = useState(false);
   const [activeIdx, setActiveIdx] = useState(0);
   const [ inView, setInView ] = useState( false );
   useEffect(() => {
      globalThis.addEventListener('scroll', ev => {
         if ( document.body.getBoundingClientRect().top >= 0 ) {
            setInView( true )
         } else {
            setInView( false )
         }
         // console.log({ ev })
      })
      if (inView) {
         // globalThis?.classList.add('bg-white')
      } else {
         // globalThis?.classList.remove('bg-white')
      }
   }, [  ])
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
      <StyledNavbar isPinned={isPinned} className={`${isPinned ? 'header-pinned': ''} ${inView ? '': 'bg-white'}`} >
         <nav className="navbar-main container mx-auto flex justify-between gap-4">
            <div className="navbar-brand">
               <Link href={"/"}>
                  <a className="flex px-3 md:px-0">
                     <Image src={settings.logo_url} alt="" className="navbar-logo" width={'250'} height={'60'} />
                  </a>
               </Link>
            </div>

            <div className={`${navActive ? "active" : ""} nav__menu-list`}>
               <div className={'hidden md:flex'}>{renderMenu && renderMenu()}</div>
               <SidebarNav />
            </div>
         </nav>
         <div className={'container mx-auto py-3 flex items-center justify-center md:hidden'}>
            {renderMenu && renderMenu({ className: 'flex -mt-4', menuItems: productHeaderMenu })}
         </div>
      </StyledNavbar>
   );
};

export default Navbar;
