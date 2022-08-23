import React, { useEffect } from "react";
import OurPartner from "./OurPartner";

import Script from "next/script";
// import "../styles/Offers.css"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
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
         modules={[Pagination]}
         pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
         spaceBetween={50}
         slidesPerView={5}
         loop={true}
         autoplay={true}
         onSlideChange={() => console.log('slide change')}
         onSwiper={(swiper) => console.log(swiper)}
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
         <StyledCarousel className="our-partners">
            <div className="container our-partners-main pt-5 mb-5">
               <h1 className="our-partner-heading">OUR PARTNERS </h1>
               <h4 className="font-weight-normal our-partners-sub-heading">
                  Make precision med a reality for millions
               </h4>
               <div className="d-flex pt-2 justify-content-end">
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
            <div className="carousel" data-ride="true">
               <div className="carousel-item"></div>
            </div>
            <div className="page-container">
               <div className="page-back">
                  <div id="example">
                     <div className="container mx-auto">
                        <ClientsCarousel items={ourPartner} />
                     </div>
                  </div>
               </div>
               <Script src="jquerry.js"></Script>
               <Script src="src.js"></Script>
            </div>
         </StyledCarousel>
      </>
   );
};

export default OurPartners;
