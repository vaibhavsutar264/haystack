import React from "react";
// import { Helmet } from "react-helmet";
// import $ from 'jquery';
import Script from "next/script";
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
         <div>
            {/* <Head>
                <script src="app.js"></script>
            </Head> */}
            <input type="checkbox" id="bgtoggle" />
            <div className="frame">
               <label htmlFor="bgtoggle" className="menu"></label>
               <div className="menu_container" id="menu_container">
                  <h1>hystack content will be shown here</h1>
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

// import React from 'react'
// // import ScriptTag from 'react-script-tag';
// // import { Helmet } from "react-helmet";
// import $ from 'jquery';

// // Create the function
// // export function AddLibrary(urlOfTheLibrary) {
// //     const script = $.('script');
// //     script.src = urlOfTheLibrary;
// //     script.async = true;
// //     $.body.appendChild(script);
// // }

// const HambergerMenuWithScriptTag = () => {
//     return (
//         <div>
//             <div onload="Animation:none">
//                 <input onclick="no" type="checkbox" id="bgtoggle" />
//                 <div class="frame">
//                     <label for="bgtoggle" class="menu"></label>
//                     <div class="menu_container" id="menu_container">
//                         <h1>hystack content will be shown here</h1>
//                     </div>
//                 </div>

//             </div>
//             {/* <ScriptTag isHydrating={true} type="text/javascript"
//                 src=
//                 "./app.js" /> */}
//             {/* <Helmet>
//                     <script src=
//                         "https://github.com/vaibhavsutar264/hamberger-menu-animation/blob/main/app.js"
//                         type="text/javascript"
//                         />
//                 </Helmet> */}
//             {/* Call the function to add a library */}
//             {/* {AddLibrary(
//                 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')} */}

//         </div>
//     )
// }

// export default HambergerMenuWithScriptTag
