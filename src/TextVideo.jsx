import Script from "next/script";
import Link from "next/link";
import Head from "next/head";

import React from "react";
{
   /* <Link to="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css" />   */
}

// next.config.js

const textVideo = () => {
   return (
      <>
         <Head>
            <script
               src="https://code.jquery.com/jquery-3.5.1.js"
               integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
               crossorigin="anonymous"
            ></script>
            <link
               href="https://www.jqueryscript.net/css/jquerysctipttop.css"
               rel="stylesheet"
               type="text/css"
            ></link>
            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script> */}
         </Head>
         <main className="flexbox" id="flexbox">
            <div className="button-wrapper link" id="button-wrapper">
               <div className="relative container">
                  <h2 id="text-video-h2">
                     <div className="text-1 text-video-text">
                        <span>I</span>
                        <span>n</span>
                        <span>f</span>
                        <span>e</span>
                        <span>c</span>
                        <span>t</span>
                        <span>i</span>
                        <span>o</span>
                        <span>u</span>
                        <span>s </span>
                     </div>
                     <div className="text-2 text-video-text">
                        <span>D</span>
                        <span>i</span>
                        <span>s</span>
                        <span>e</span>
                        <span>a</span>
                        <span>s</span>
                        <span>e</span>
                        <span>s </span>
                     </div>
                     <div className="text-3 text-video-text">
                        <span className="spacing">W</span>
                        <span>o</span>
                        <span>u</span>
                        <span>l</span>
                        <span>d</span>
                        <span>n</span>
                        <span>'</span>
                        <span>t </span>
                     </div>
                     <div className="text-4 text-video-text">
                        <span className="spacing">K</span>
                        <span>i</span>
                        <span>l</span>
                        <span>l </span>
                        <span className="spacing">A</span>
                        <span>n</span>
                        <span>y</span>
                        <span>m</span>
                        <span>o</span>
                        <span>r</span>
                        <span>e</span>
                     </div>
                  </h2>
                  <video id="banner" type="video/mp4" muted autoPlay loop>
                     <source src="https://media.istockphoto.com/videos/cloning-bacteria-loop-video-id473038835" />
                  </video>

                  {/* <video src={require('./istockphoto-454669794-640_adpp_is.mp4')}  id="banner" type="video/mp4" autoPlay loop /> */}

                  {/* <video src="istockphoto-454669794-640_adpp_is.mp4" id="banner" type="video/mp4" muted loop autoPlay></video> */}
               </div>
               <div>
                  <h2
                     id="text-video-h6"
                     className="text-capitalize font-weight-normal"
                  >
                     {" "}
                     400+ bacteria and fungi tested and reported in 12 hours
                  </h2>
               </div>

               <div className="btn-secondary"></div>
            </div>
         </main>

         <div className="cursor"></div>

         <Script src="src.js" strategy="lazyOnload"></Script>
         <Script src="gsapMin.js" strategy="lazyOnload"></Script>
         <Script src="jquerry.js" strategy="lazyOnload"></Script>
         {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></Script> */}
         {/* <Script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></Script> */}
      </>
   );
};

export default textVideo;
