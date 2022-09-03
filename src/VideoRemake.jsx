import React from "react";
import Script from "next/script";

const VideoRemake = () => {
   return (
      <div>
         <div className="title-animation-box-video-remake">
            <h1 className="text-center text-capitalize title-animation-video-remake">
               A Revolutionary technology to aid microbiology <br /> A
               Revolutionary technology to aid microbiology{" "}
            </h1>
         </div>
         {/* <div id="header" className="showing"> */}
         <div>
            <video
               id="scroll-video-increase"
               src={
                  "https://media.istockphoto.com/videos/medical-science-laboratory-beautiful-black-scientist-looking-under-video-id1297574801"
               }
               type="video/mp4"
               autoPlay
               muted
               loop
            ></video>
         </div>

         {/* <Script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></Script>
<Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js'></Script>
<Script src='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js'></Script>
<Script src='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js'></Script>
<Script src='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.js'></Script> */}
         <Script src="jquerry.js"></Script>

         {/* <Script src='scrollMagic.js'></Script> */}
         {/* <Script src='scrollMagicAnimationGsap.js'></Script> */}
         {/* <Script src='scrollMagicIndicators.js'></Script> */}
         <Script src="src.js"></Script>
         {/* <Script src='tweenMax.js'></Script> */}
         {/* </div> */}
      </div>
   );
};

export default VideoRemake;
