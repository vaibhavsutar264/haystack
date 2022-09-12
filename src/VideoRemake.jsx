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
      </div>
   );
};

export default VideoRemake;
