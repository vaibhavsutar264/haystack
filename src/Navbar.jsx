import React, { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";
import data from "./data/data.json";
import Image from "next/image";
// import logoUri from './assets'

const MENU_LIST = [
   {
      text: "content will shown here in a while",
      href: "/Home",
   },
];

const Navbar = () => {
   const [navActive, setNavActive] = useState(false);
   const [activeIdx, setActiveIdx] = useState(0);
   return (
      <header>
         <nav className="navbar-main container">
            <Link href={"/"}>
               <a onClick={() => setActiveIdx(0)}>
                  {/* <Image src={logoUri} /> */}
                  <img src={data.logo} alt="" className="navbar-logo" />
               </a>
            </Link>
            <div
               onClick={() => setNavActive(!navActive)}
               className="nav__menu-bar"
            >
               <div></div>
               <div></div>
               <div></div>
            </div>

            <div className={`${navActive ? "active" : ""} nav__menu-list`}>
               {MENU_LIST.map((menu, idx) => {
                  // here menu means item in MENU_LIST
                  return (
                     <div
                        className="navbar-content-part"
                        onClick={() => {
                           setActiveIdx(idx);
                           setNavActive(false);
                        }}
                        key={menu.text}
                     >
                        <NavItem {...menu} />
                        {/* ...menu means MENU_LIST item */}
                     </div>
                  );
               })}
            </div>
         </nav>
      </header>
   );
};

export default Navbar;
