import React, { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";
// import data from "./data/data.json";
import Image from "next/image";
import useHeadroom from "react-useheadroom";
import styled from "@emotion/styled";
import settings from '../json/settings.json'
import { SidebarNav } from "./index";
// import ReactHeadroom from 'react-headroom'
// import logoUri from './assets'

const MENU_LIST = [
   {
      text: "content will shown here in a while",
      href: "/Home",
   },
];


const StyledNavbar = styled.nav`
   transition: all 0.4s;
   transform: ${props => props.isPinned ? `translate3d(0,0px,0)` : `translate3d(0,-100px,0)`};
   background-color: ${props => props.isPinned ? `transparent` : `white`};
   height: 40;
   width: 100%;
   position: fixed;
   top: 0;
   left: 0;
   padding: 0.5rem 0 0.5rem 0;
`

const Navbar = () => {
   const [navActive, setNavActive] = useState(false);
   const [activeIdx, setActiveIdx] = useState(0);
   const isPinned = useHeadroom({
      fixAt: 100,
      onPin: () => {
         // set("pinned")
      },
      onUnpin: () => {},
      onFix: (fixedAt) => {
         // set(`fixed at ${fixedAt}`)
      },
      onUnfix: (fixedAt) => {
         // set(["unpinned", ` and unfixed from ${fixedAt}`])
      }
    });
   return (
      <StyledNavbar isPinned={isPinned} >
         <nav className="navbar-main container mx-auto flex justify-between gap-4">
            <div className="navbar-brand">
               <Link href={"/"}>
                  <a className="flex">
                     <Image src={settings.logo_url} alt="" className="navbar-logo" width={'250'} height={'60'} />
                  </a>
               </Link>
            </div>

            <div className={`${navActive ? "active" : ""} nav__menu-list`}>
               <SidebarNav />
            </div>
         </nav>
      </StyledNavbar>
   );
};

export default Navbar;
