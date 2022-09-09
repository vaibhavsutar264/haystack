import Script from "next/script";
import Link from "next/link";
import Head from "next/head";

import React from "react";
import styled from "@emotion/styled";

const StyledHeroSection = styled.div`
   padding-top: var(--layout-offset-top, 100px);
   #text-video-h2 {
      font-weight: 1000;
      font-size: 6vw;
      line-height: 1.3;
      letter-spacing: 5px;
      .text-video-text {
         margin: -35px 0;
      }
      margin-bottom: 2.5rem;
   }
   #text-video-h6 {
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 40px;
   }
   video {
      width: 60vw;
      height: 59vh;
      -o-object-fit: cover;
      object-fit: cover;
      pointer-events: none;
      cursor: none;
      background-color: #000;
      color: red;
      mix-blend-mode: screen;
      margin-top: 30px;
      position: absolute;
      pointer-events: none;
      display: none;
   }
`

const TextVideo = () => {
   return (
      <StyledHeroSection>
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
         <div className="cursor"></div>
      </StyledHeroSection>
   );
};

export default TextVideo;
