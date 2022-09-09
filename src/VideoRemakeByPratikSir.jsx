import React from "react";
import styled from "@emotion/styled";

const StyledVideoSection = styled.div`
   video {
      transform: scale(0.5);
   }
`
const VideoRemakeByPratikSir = () => {
   return (
      <StyledVideoSection>
         <div className="video-remake-again container mx-auto">
            <div className="title-animation-box-video-remake w-100 mb-6">
               <h3 className="text-center text-capitalize title-animation-video-remake w-100 text-green-400 text-xl">
                  A Revolutionary technology to aid microbiology <br /> A
                  Revolutionary technology to aid microbiology{" "}
               </h3>
            </div>
            <div className="fake-image">
               <video
                  id="scroll-video"
                  className="w-full"
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
      </StyledVideoSection>
   );
};

export default VideoRemakeByPratikSir;
