import React from "react";
import styled from "@emotion/styled";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Section from "./components/atoms/Section";
import bannerImgSrc from './assets/hero-img-2.jpg'

const StyledVideoSection = styled.div`
   video {
   }
   .textSlides {
      max-height: 60px;
      @media screen and (min-width: 800px)
      {
         height: 35px;
      }
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
         className="textSlides"
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
         <Section containerClass={''} className="py-0" fromBg="white" toBg="white">
            <div className="video-remake-again container mx-auto">
               <div data-aos="fade-up" className="title-animation-box-video-remake w-100 mb-6 pt-6">
                  <TextSlides
                     items={[
                        { text: `A Revolutionary technology to aid microbiology` },
                        { text: `A Revolutionary technology to aid microbiology` },
                     ]}
                  />
               </div>
            </div>
            <img
               id="scroll-video"
               className="w-full"
               src={bannerImgSrc.src}
               data-aos="zoom-in"
               data-aos-delay="300"
               data-aos-duration="1600"
            />
         </Section>
      </StyledVideoSection>
   );
};

export default VideoRemakeByPratikSir;
