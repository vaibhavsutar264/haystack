// @ts-nocheck
import Section from "../atoms/Section"
import styled from "@emotion/styled";
import Link from "next/link";
import PostItem from "../molecules/PostItem";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper"
import { useRef } from "react";


const StyledComponent = styled(Section)`
background-image: url(https://images.unsplash.com/photo-1659535901690-ab95a8539929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
background-size: 60%;
background-repeat: no-repeat;
background-position: right center;
.section__container {
   min-height: calc(60vh - var(--safe-top-padding, 100px));
   display: flex;
   flex-direction: column;
   justify-content: center;
}
`

interface IHeroActionProps {
   title: string,
   variant: string,
   onClick?: Function,
   href?: string,
}

interface IPostItemProps {
   title: string,
   description: string,
   thumbnailUrl: string,
   onClick?: Function,
   url?: string,
   postUrl?: string,
}

interface ICarouselProps {

}
interface ISectionPros {
   title?: string|any,
   subtitle?: string|any,
   className?:string,
   subtitle?: string,
   actions?: IHeroActionProps[],
   posts?: IPostItemProps[],
   colsCount?: Number,
   ItemComponent?: JSX.Element,
   enableCarousel?: boolean,
   carouselProps: ICarouselProps|any
}

const SectionPosts = (props: ISectionPros) => {
   const { ItemComponent } = props
   const partnersCarousel = useRef(null)
   return (
      <StyledComponent className={`SectionPosts ${props.className}`}>
         <Section.Container className="container mx-auto py-8 md:py-12">
            <div className="w-50">
               <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                     <h3 className="section-heading">
                     {props.title ?? 'In the news'}
                     </h3>
                  </div>
                  <div>{props.renderHeaderRight && props.renderHeaderRight()}</div>
               </div>
               {props.enableCarousel ? (
               <>
               <div className="relative">
               <Swiper
                  spaceBetween={50}
                  ref={partnersCarousel}
                  autoplay={{
                     delay: 2500,
                     disableOnInteraction: false,
                  }}
                  breakpoints={{
                     300: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                     },
                     768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                     },
                     1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                     },
                  }}
                  modules={[Autoplay]}
                  onSlideChange={() => console.log('slide change')}
                  
                  onSwiper={(swiper: any) => partnersCarousel.current = swiper}
                  {...props.carouselProps}
                  className="awards-carousel px-4 md:px-0"
               >
                  {props.posts?.map((postItem, slideIndex) => (
                     <SwiperSlide key={`slide_${slideIndex}`} >
                        <ItemComponent
                           date={postItem.date || 'MARCH 24, 2022'}
                           title={postItem.title}
                           source={postItem.source}
                           thumbnailUrl={postItem.image_url}
                           description={postItem.description}
                           reference = {postItem.reference}
                           author={postItem.author_name}
                           author_bio={postItem.author_bio}
                           aspect="aspect-[16/9]"
                           url={postItem.url}
                        />
                     </SwiperSlide>
                  ))}
               </Swiper>
               <div className="swiper-button--outer swiper-button-prev" onClick={() => partnersCarousel.current?.slidePrev()}></div>
               <div className="swiper-button--outer swiper-button-next" onClick={() => partnersCarousel.current?.slideNext()}></div>
               </div>
               </>
               ): (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 limit-3">
                  {props.posts?.map((postItem, slideIndex) => (
                     <ItemComponent
                     thumbnailUrl={postItem.image_url}
                     source={postItem.source}
                     aspect="aspect-[4/3]"

                        key={`slide_${slideIndex}`}
                        {...postItem}
                     />
                  ))}
                  </div>
               )}
            </div>

         </Section.Container>
      </StyledComponent>
   )
}

SectionPosts.defaultProps = {
   ItemComponent: PostItem,
   enableCarousel: true
}
export default SectionPosts
