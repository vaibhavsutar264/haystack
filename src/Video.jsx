import React from "react";
import Script from "next/script";

const Video = () => {
   return (
      <>
         <div>
            {/* <!-- partial:index.partial.html --> */}
            <div className="empty-module">Other module</div>

            <div className="sticky-video-module">
               <div className="video">
                  <div className="boxed">
                     {/* <!-- <h1 className="text-scene text-scene-1">Intro text</h1>
			<h2 className="text-scene text-scene-2">Text scene 2</h2>
			<h2 className="text-scene text-scene-3">Text scene 3</h2> --> */}
                     <video
                        id="scroll-video-increase"
                        src={"/video.mp4"}
                        type={"video/mp4"}
                        autoPlay
                        muted
                        loop
                     ></video>
                     {/* type="video/mp4" autoplay muted loop */}
                     {/* <img src="" alt=""/> */}
                  </div>
               </div>
            </div>

            <div className="empty-module">Other module</div>
            {/* <!-- partial --> */}
            {/* <Script src="./scrollMagic.js" strategy="lazyOnload"></Script>
<Script src='./scrollMagicIndicators.js' strategy="lazyOnload"></Script>
<Script src='./scrollMagicGsap.js' strategy="lazyOnload"></Script>
<Script src="./scrollMagicAnimationGsap.js" strategy="lazyOnload"></Script>
<Script src="./script.js" strategy="lazyOnload"></Script> */}
            <Script src="./src.js" strategy="lazyOnload"></Script>
         </div>
      </>
   );
};

export default Video;
