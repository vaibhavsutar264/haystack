import React from "react";
// import ScriptTag from 'react-script-tag';
// import { Helmet } from "react-helmet";
// import $ from 'jquery';
import Script from "next/script";
import data from "../src/data/data.json";
import NavbarContent from "./NavbarContent";
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
            {/* <Head>
                <script src="app.js"></script>
            </Head> */}
            <input type="checkbox" id="bgtoggle" />
            <div className="frame" id="frame">
               <a>
                  <img id="hamberger-menu-logo" src={data.logo} alt="logo" />
               </a>
               <label htmlFor="bgtoggle" className="menu"></label>
               <div className="menu_container" id="menu_container">
                  <NavbarContent />
               </div>
            </div>
            <Script src="src.js" strategy="lazyOnload"></Script>
         </div>
         {/* <ScriptTag isHydrating={true} type="text/javascript"
                src=
                "./app.js" /> */}
         {/* <Helmet>
                    <script src=
                        "https://github.com/vaibhavsutar264/hamberger-menu-animation/blob/main/app.js"
                        type="text/javascript"
                        />
                </Helmet> */}
         {/* Call the function to add a library */}
         {/* {AddLibrary(
                'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')} */}
      </>
   );
};

export default HambergerMenuWithScriptTag;
