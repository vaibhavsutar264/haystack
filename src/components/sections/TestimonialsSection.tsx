// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
import Section from "../atoms/Section";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { useRef,useState  } from "react";

interface ITestimonialsSection {
   title: string,
   items: any[],
   category: string,
   bg:string
}

export default function TestimonialsSection(props: ITestimonialsSection) {
   const items = props.items.filter((data)=>
   {
      return data.category.includes(props.category);
   }
   );
   const ReadMore = ({ children }) => {
      const text = children;
      const [isReadMore, setIsReadMore] = useState(true);
      const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
      };
      return (
        <p className="text">
          "{isReadMore ? text.slice(0, 200) : text}"
          <span onClick={toggleReadMore} className="read-or-hide">
            {isReadMore ? "...read more" : " show less"}
          </span>
        </p>
      );
    };
   const partnersCarousel = useRef(null)
   return (
      <Section className={`${props.bg} py-0`}>
         <Section.Container className="container mx-auto py-16">
            <h3 className="section-heading flex">
               {props.title}
            </h3>
            <div className="flex mt-8 relative">
                  <Swiper
                     className="testimonials-carousel"
                     spaceBetween={50}
                     ref={partnersCarousel}
                     navigation={true}
                     modules={[Navigation]}
                     breakpoints={{
                        300: {
                           slidesPerView: 1,
                           spaceBetween: 20,
                        },
                        768: {
                           slidesPerView: 2,
                           spaceBetween: 40,
                        },
                        1024: {
                           slidesPerView: 3,
                           spaceBetween: 60,
                        },
                     }}
                     onSlideChange={() => console.log('slide change')}
                     onSwiper={(swiper: any) => partnersCarousel.current = swiper}
                  >
                     {items ?.map((slide, slideIndex) => (
                        <SwiperSlide key={`slide_${slideIndex}`} className="flex gap-3 items-start">
                           <div className="flex items-center justify-center">
                              <img src={slide.avatar_url} layout='contain' className="w-20 h-20 rounded-full object-cover" alt={slide.author.name} />
                           </div>
                           <div className="flex-1">
                              <p className="text-blue-600 font-bold text-lg mb-2">{slide.author.name}</p>
                              {!!(slide.author.designation) ? <p className="text-xs mb-6 font-semibold">{slide.author.designation},<span className="block">{slide.author.company}</span></p>:""}
                              <article className="text-muted text-sm">
                              <ReadMore>
                                 {slide.message}
                              </ReadMore>
                              </article>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  <div className="swiper-button--outer swiper-button-prev" onClick={() => partnersCarousel.current?.slidePrev()}></div>
                  <div className="swiper-button--outer swiper-button-next" onClick={() => partnersCarousel.current?.slideNext()}></div>
               </div>
         </Section.Container>
      </Section>
   )
}
