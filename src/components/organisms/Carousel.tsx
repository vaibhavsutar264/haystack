// Import Swiper React components
// @ts-nocheck
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

interface ICarousel {
   items: any[],
   renderItem: Function,
}
export default function Carousel(props: ICarousel) {
   return (
      <div>
         <Swiper
            spaceBetween={50}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper: any) => console.log(swiper)}
         >
            {props.items?.map((slide, slideIndex) => (
            <SwiperSlide key={`slide_${slideIndex}`}>
               {/* {slide} */}
               {props.renderItem && props.renderItem(slide)}
            </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}
