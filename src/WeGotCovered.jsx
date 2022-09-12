import Image from "next/image";
import WeGotCoveredImg from "./box-2.png";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import styled from "@emotion/styled";
import Link from "next/link";
// import Image from "next/image";

export const BlogCarousel = ({ items }) => {
   return (
      <Swiper
         modules={[ Autoplay ]}
         // pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         spaceBetween={50}
         slidesPerView={4}
         centeredSlides={false}
         loop={true}
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
               <div className="blog-listing-page-img">
                  <img src={item.image_url} layout="fill" className="w-full" />
               </div>
               {/* {JSON.stringify(item)} */}
               <h3 className="blog-listing-page-heading my-sm-2 my-1">
                  {item.title}
               </h3>
               <p className="blog-listing-page-read-more font-weight-normal">
                  <a target={'_blank'} href={item.url}>Read more &gt;&gt;</a>
               </p>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};


const topBottomVariants = {
   visible: { scale: 1, opacity: 1, transition: { delay: 0, duration: 2 } },
   hidden: { scale: 0.7, opacity: 0.5 },
};



function WeGotCovered({ news }) {
   const controls = useAnimation();
   const [ref, inView] = useInView();
   useEffect(() => {
      if (inView) {
         controls.start("visible");
      }
   }, [controls, inView]);
   return (
      <>
         <section className="we-got-covered m-auto container py-5 px-3 md:px-0" >
            <h3 className="heading">
               We got Covered
            </h3>
            <motion.div
               ref={ref}
               animate={controls}
               initial="hidden"
               variants={topBottomVariants}
               className="we-got-covered-inner-container"
            >
               <BlogCarousel items={news} />
            </motion.div>
         </section>
      </>
   );
}

export default WeGotCovered;
const samplePosts = [
   {
      id: '1',
      title: 'lorem',
      description: 'lorem',
      thumbnail: '//placehold.it/180x180',
   },
   {
      id: '1',
      title: 'lorem',
      description: 'lorem',
      thumbnail: '//placehold.it/180x180',
   },
   {
      id: '1',
      title: 'lorem',
      description: 'lorem',
      thumbnail: '//placehold.it/180x180',
   },
   {
      id: '1',
      title: 'lorem',
      description: 'lorem',
      thumbnail: '//placehold.it/180x180',
   },
]
WeGotCovered.defaultProps = {
   // posts: samplePosts
}
