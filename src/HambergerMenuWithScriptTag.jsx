import React from "react";
// import { Helmet } from "react-helmet";
// import $ from 'jquery';
import Script from "next/script";
import data from "../src/data/data.json";
import NavbarContent from "./components/NavbarContent";
import Image from "next/image";
// import Head from 'next/head';
// Create the function
// export function AddLibrary(urlOfTheLibrary) {
//     const script = $.('script');
//     script.src = urlOfTheLibrary;
//     script.async = true;
//     $.body.appendChild(script);
// }

const HambergerMenuWithScriptTag = () => {
   return (
      <>
         <div className="nav-menu-margin">
            <input type="checkbox" id="bgtoggle" />
            <div className="frame" id="frame">
               <a>
                  <Image id="hamberger-menu-logo" src={data.logo} alt="logo" layout="fill" />
               </a>
               <label htmlFor="bgtoggle" className="menu"></label>
               <div className="menu_container" id="menu_container">
                  <NavbarContent />
               </div>
            </div>
            <Script src="src.js" strategy="lazyOnload"></Script>
         </div>
      </>
   );
};

export default HambergerMenuWithScriptTag;
