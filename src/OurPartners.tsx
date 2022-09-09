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
         modules={[ Autoplay ]}
         // pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         spaceBetween={50}
         slidesPerView={5}
         centeredSlides={true}
         loop={false}
         autoplay={{
            delay: 3000,
            disableOnInteraction: false,
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
            <div className="container mx-auto mb-5 py-10">
               <div className="text-right mb-6">
                  <h1 className="text-6xl font-bold mb-3">OUR PARTNERS </h1>
                  <h4 className="font-weight-normal our-partners-sub-heading">
                     Make precision med a reality for millions
                  </h4>
               </div>
               <div className="flex pt-2 justify-end text-2xl font-bold">
                  <div className="px-lg-5 px-md-4 px-sm-4 px-3 our-partners-tabs">
                     <p className="font-weight-normal our-partners-value m-0">
                        100+
                     </p>
                     <p className="font-weight-normal our-partners-text">
                        Cities
                     </p>
                  </div>
                  <div className="px-lg-5 px-md-4 px-sm-4 px-3 our-partners-tabs">
                     <p className="font-weight-normal our-partners-value m-0">
                        500+
                     </p>
                     <p className="font-weight-normal our-partners-text">
                        Hospitals
                     </p>
                  </div>
                  <div className="ps-lg-5 ps-md-4 ps-sm-4 ps-3">
                     <p className="font-weight-normal our-partners-value m-0">
                        100+
                     </p>
                     <p className="font-weight-normal our-partners-text">
                        Doctors
                     </p>
                  </div>
               </div>
            </div>
            <div className="page-container bg-white">
               <div className="page-back">
                  <div id="example">
                     <div className="container-mx-auto">
                        <ClientsCarousel items={ourPartner} />
                     </div>
                  </div>
               </div>
            </div>
         </StyledCarousel>
      </>
   );
};

export default OurPartners;
