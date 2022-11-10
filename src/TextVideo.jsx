import Script from "next/script";
import Link from "next/link";
import Head from "next/head";

import React from "react";
import styled from "@emotion/styled";
// import videoBg from './assets/mask-text-video.mp4'
import textmask from './assets/mask-text-video_AdobeExpress.gif'
import textImage from './assets/the_title.png'

const StyledHeroSection = styled.div`
   padding-top: var(--layout-offset-top, 100px);
   #text-video-h2 {
      font-weight: 1000;
      font-size: 10vw;
      line-height: 1.3;
      letter-spacing: 3px;

      @media screen and (min-width: 800px)
      {
         .text-video-text {
            margin: -35px 0;
         }
         font-size: 6vw;
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
   .masked_text {
      .mask1 {
         -webkit-mask-image: url(${textImage.src} );
         mask-image: url(${textImage.src} );
         -webkit-mask-repeat: no-repeat;
         mask-repeat: no-repeat;
         width: 54vw;
         height: 67vw;
         mask-size: 54vw;
         @media screen and (min-width: 800px)
         {
            width: 30vw;
            height: 30vw;
            mask-size: 30vw;
         }
         background: black;
      }
   }
`

const Text = styled.div`
   .text {
      background-image: url(${textmask.src} );
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 12vw;
      @media screen and (min-width: 800px)
      {
         font-size: 6vw;
      }
      line-height: 0.95;
      font-weight: bold;
      font-weight: 800;
      -webkit-font-smoothing: antialiased;
      display: inline-block;
   }
   .c1 {
      background: linear-gradient(to right, black 0% 1.19em, red 1.19em 1.9em, black 1.9em 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }

`

const MaskedText = () => {
   return (
      <div className="masked_text">
         <div className="mask1 js-hover">
            <img src={textmask.src} alt="Cursor" width="200" height="200" className="js-hover" />
         </div>
      </div>
   )
}

const TextVideo = () => {
   return (
      <StyledHeroSection>

         <div className="button-wrapper link" id="button-wrapper">
            <div className="relative container mx-auto px-3 md:px-0">
               <MaskedText />

               <video id="banner" type="video/mp4" muted autoPlay loop>
                  <source src={"https://media.istockphoto.com/videos/cloning-bacteria-loop-video-id473038835"} />
               </video>
            </div>
            <div className="px-3 md:px-0">
               <h2
                  id="text-video-h6"
                  className="text-capitalize font-weight-normal"
               >
                  {" "}
                  Introducing Universal Infectious Diseases Test
               </h2>
            </div>

            <div className="btn-secondary"></div>
         </div>
         {/* <div className="cursor"></div> */}
      </StyledHeroSection>
   );
};

export default TextVideo;
