import React from "react";
import styled from "@emotion/styled";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const StyledVideoSection = styled.div`
   video {
      transform: scale(0.5);
   }
`

const TextSlides = ({ items }) => {
   return (
      <Swiper
         modules={[ Autoplay ]}
         // pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         centeredSlides={true}
         loop={true}
         direction={"vertical"}
         autoplay={{
            delay: 3000,
            disableOnInteraction: false,
         }}
         style={{ height: '35px' }}
      >
         {items?.map((txt, txtIndex) => (
         <SwiperSlide key={'txt_'+txtIndex}>
            <p className="text-center text-capitalize title-animation-video-remake w-100 text-green-400 text-xl">
            {txt.text}
            </p>
         </SwiperSlide>
         ))}
      </Swiper>
   )
}

const VideoRemakeByPratikSir = () => {
   return (
      <StyledVideoSection>
         <div className="video-remake-again container mx-auto">
            <div className="title-animation-box-video-remake w-100 mb-6">
               <TextSlides
                  items={[
                     { text: `A Revolutionary technology to aid microbiology` },
                     { text: `A Revolutionary technology to aid microbiology` },
                  ]}
               />
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
