import React, { useEffect } from "react";
import OurPartner from "./OurPartner";

import Script from "next/script";
// import "../styles/Offers.css"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import styled from "@emotion/styled";
// import Image from "next/image";

export const ClientsCarousel = ({ items }) => {
   return (
      <Swiper
         modules={[ Autoplay, Navigation ]}
         navigation={true}
         // pagination={{ clickable: true }}
         // scrollbar={{ draggable: true }}
         spaceBetween={50}
         slidesPerView={3}
         // centeredSlides={true}
         loop={true}
         autoplay={{
            delay: 3000,
            // disableOnInteraction: false,
         }}
         breakpoints={{
         // when window width is >= 640px
            640: {
               width: 640,
               slidesPerView: 3,
               loop: true,
            },
            // when window width is >= 768px
            768: {
               width: 768,
               slidesPerView: 4,
               loop: true,
            },
         }}

         // onSlideChange={() => console.log('slide change')}
         // onSwiper={(swiper) => console.log(swiper)}
      >
         {items.map((item, index) => (
            <SwiperSlide key={`slide_${index}`}>
               {/* {JSON.stringify({ items })} */}
               <img src={item.image} alt={`${index} offer`} style={{ width: '180px', height: '180px', objectFit: 'contain' }} />
               {/* <Image src={item.src} alt={`${index} offer`} /> */}
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

const StyledCarousel = styled.section`
   .swiper-button-prev {
      background: white;
      padding: 1.5rem;
   }
   .swiper-button-next {
      background: white;
      padding: 1.5rem;
   }

`

const OurPartners = ({ ourPartner }) => {
   return (
      <>
         <StyledCarousel>
            <div className="container mx-auto mb-5 py-10 px-3 md:px-0">
               <div className="text-white text-right mb-6">
                  <h1 className="text-4xl font-bold mb-6" data-aos="fade-in">OUR PARTNERS </h1>
                  <h4 className="font-weight-normal our-partners-sub-heading text-xl" data-aos="fade-in">
                     Make precision med a reality for millions
                  </h4>
               </div>
               <div className="text-white flex items-center justify-end gap-8 divide-x-2 divide-white">
                  <div className="grid__col pr-3 md:pr-6">
                     <h4 className="text-lg md:text-4xl font-bold" data-aos="fade-in">
                        100+
                     </h4>
                     <p className="text-xl">
                        Cities
                     </p>
                  </div>
                  <div className="grid__col pl-3 mr-3 md:pl-6 md:mr-6">
                     <h4 className="text-lg md:text-4xl font-bold" data-aos="fade-in">
                     500+
                     </h4>
                     <p className="text-xl">
                     Hospitals
                     </p>
                  </div>
                  <div className="grid__col pl-3 mr-3 md:pl-6 md:mr-6">
                     <h4 className="text-lg md:text-4xl font-bold" data-aos="fade-in">
                        100+
                     </h4>
                     <p className="text-xl">
                     Doctors
                     </p>
                  </div>
               </div>
            </div>
         </StyledCarousel>
      </>
   );
};

export default OurPartners;
