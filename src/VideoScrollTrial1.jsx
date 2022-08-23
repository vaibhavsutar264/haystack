import React from "react";
import Head from "next/head";
// import Link from 'next/link';
import Script from "next/script";
// import { Html, Head, Main, NextScript } from 'next/document'
// import '../src/components/style/CloudFareAjaxVideoScrollTrial1.css';
// import '../src/components/style/GoogleApisVideoScrollTrial1.css';
// import '../src/components/style/GreenSockVideoScrollTrial1.css';

const VideoScrollTrial1 = () => {
   return (
      <>
         {/* // <Html> */}

         <Head>
            <link
               href="//fonts.googleapis.com/css?family=Signika+Negative:300,400,600"
               rel="stylesheet"
               type="text/css"
            ></link>
            <link
               rel="stylesheet"
               href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
               integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
               crossorigin="anonymous"
               referrerPolicy="no-referrer"
            ></link>
            <link
               rel="stylesheet"
               href="https://codepen.io/GreenSock/pen/ZEGdQLM/7ba936b34824fefdccfe2c6d9f0b740b.css"
            ></link>
         </Head>

         <div className="description panel blue">
            <h3>scroll down</h3>
         </div>

         <div className="panel red">
            <h4>more</h4>
         </div>

         <div className="panel orangeWrapper">
            <div className="panel orange">
               <h5>
                  <span className="line line-2"></span>This panel grows in size
               </h5>
            </div>
         </div>

         <div className="panel purple"></div>

         <div className="panel gray">DONE!</div>
         {/* <Script src={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js?r=5426'}></Script>
            <Script src={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/ScrollTrigger.min.js?v=3.3.0-3'}></Script> */}
         <Script src="gsapMinVideoScrollTrial1.js"></Script>
         <Script src="scrollTriggerMinVideoScrollTrial1.js"></Script>
         <Script src="src.js"></Script>

         {/* </Html> */}
      </>
   );
};

export default VideoScrollTrial1;
