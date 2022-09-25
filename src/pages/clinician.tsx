import React from "react";
// import AreYouClinician from "../AreYouClinician";
import Image from "next/image";

import WhyThisTechnology from "../WhyThisTechnology";
import AppTemplate from "../components/templates/AppTemplate";
import ClinicianImg from "../are-you-clinician.png";
import testiImg1 from '../assets/testimonials/savitri.png'
import ResearchPapersImg from "../assets/research-papers.png";

import EasyAccessImg from "../assets/observation_icon.png";
import EasyToReadImg from "../assets/easy-to-read.png";
import SampleCollectionImg from "../assets/sample-collection.png";
import DigitalAgeImg from "../assets/digital-age.png";
import HeroBanner from "../components/HeroBanner";
import { KnowMoreButton } from "../components/buttons";
import { getClinicianFeatures } from '../utils/clinician'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import styled from "@emotion/styled";

import allResearchPapers from '../json/research_papers.json'
import allTestimonials from '../json/testimonials.json'
import AreYouClinicianTestimonial from "../AreYouClinicianTestimonial";
import {isEven} from "../utils";

const researchPapers = allResearchPapers.data?.filter(row => row.category == 'clinician')
const testmonials = allTestimonials.data?.filter(row => row.category == 'clinician')

function ResearchPapers() {
   return (
      <section
         className="py-10 bg-blue-100 ResearchPapers"
      >
         <div className="container px-3 md:px-0 mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">
               Research papers
            </h3>
            <Swiper
               modules={[ Autoplay, Navigation ]}
               navigation={true}
               spaceBetween={50}
               slidesPerView={1}
               loop={false}
               autoplay={{
                  delay: 3000,
               }}
               breakpoints={{
                  300: {
                     slidesPerView: 1,
                     loop: false,
                     navigation: true,
                  },
                  // when window width is >= 768px
                  768: {
                     slidesPerView: 3,
                     loop: false,
                     navigation: false,
                  },
               }}

               // onSlideChange={() => console.log('slide change')}
               // onSwiper={(swiper) => console.log(swiper)}
               >
               {researchPapers.map((item, index) => (
                  <SwiperSlide key={`slide_${index}`}>
                     <figure className="flex items-center gap-3">
                        <div className="w-5/12">
                           <img src={item.thumbnail_url} alt={'Research paper'} className="bg-gray-100 aspect-square w-56 h-56" />
                        </div>
                        <figcaption>
                           <p>
                              <a href={item.url} className="text-md text-blue-600">{item.title}</a>
                           </p>
                           <p className="text-sm">
                              {item.excerpt}
                           </p>
                        </figcaption>
                     </figure>
                  </SwiperSlide>
                  ))}
            </Swiper>
         </div>
      </section>
   );
}


export function WhyChooseHaystack() {
   return (
      <>
         <section
            className="py-10"
         >
            <div className="container mx-auto px-3 md:px-0">
               <p className="text-4xl md:text-5xl font-bold mb-6 text-black">
                  Why Choose Haystack
               </p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-end my-10">
                  <div className="flex flex-col gap-3">
                     <div className="mx-auto why-choose-haystack-img-1">
                        <div className="w-4/12 mx-auto">
                           <Image src={EasyAccessImg} className="w-full" />
                        </div>
                     </div>
                     <p className="w-50 mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize">
                        Easy Access 200+ Partner Labs
                     </p>
                  </div>
                  <div className="flex flex-col gap-3">
                     <div className="mx-auto why-choose-haystack-img-2">
                        <div className="w-4/12 mx-auto">
                           <Image src={SampleCollectionImg} className="w-full" />
                        </div>
                     </div>
                     <p className="w-50 mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize">
                        No change in sample collection
                     </p>
                  </div>
                  <div className="flex flex-col gap-3">
                     <div className="mx-auto why-choose-haystack-img-3">
                        <div className="w-4/12 mx-auto">
                           <Image src={EasyToReadImg} className="w-full" />
                        </div>
                     </div>
                     <p className="w-50 mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize">
                        Easy to read reports{" "}
                     </p>
                  </div>
                  <div className="flex flex-col gap-3">
                     <div className="mx-auto why-choose-haystack-img-4">
                        <div className="w-4/12 mx-auto">
                           <Image src={DigitalAgeImg} className="w-full" />
                        </div>
                     </div>
                     <p className="w-50 mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize">
                        Digital Age Ready
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export const FeatureCard = ({ title, image, url }) => {
   return (
      <figure className="bg-white p-4 rounded-sm text-center flex flex-col gap-3">
         <div>
            <p className="text-black font-medium text-sm">
               {title}
            </p>
         </div>
         <div>
            <Image src={require(`../assets/icons/${image}`)} alt="image" className="w-full aspect-square" />
         </div>
         <div className="text-center">
            <KnowMoreButton className="text-green-600 flex items-center gap-3 justify-center align-self-center mx-auto" />
         </div>
      </figure>
   )
}

export const FeatureCards = ({ items }: { items: Array<any> }) => {
   return (
      <section className="py-10 bg-blue-100">
         <div className="container mx-auto px-3 md:px-0">
            <h3 className="text-4xl md:text-5xl font-bold mb-5 text-black">
               WHY THIS TECHNOLOGY FOR YOU?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10">
               {items?.map((item) => (
               <div className="grid__col" key={`feat_${item.id}`}>
                  <FeatureCard
                     title={item.title}
                     image={item.thumbnail_url}
                  />
               </div>
               ))}
            </div>
         </div>
      </section>
   )
}

const StyledPage = styled(AppTemplate)`
   .ResearchPapers {
.swiper-button-prev,
.swiper-button-next {
display: none;
}
      @media screen and (min-width: 800px) {
         .swiper-button-prev,
         .swiper-button-next {
            display: none;
         }

      }
   }
`

export default function Clinician({ data = {} }) {
   const { features } = data || {}
   return (
      <StyledPage>
         <HeroBanner
            title={`are you clinician?`}
            image={ClinicianImg}
            description={`Bringing genomics technology to patient care`}
            content={`Stay at the top with cutting edge technology`}
            primaryAction={{  }}
            secondaryAction={{  }}
         >
            {testmonials?.map((testm, testmIndex) => (
               <div key={`test_${testmIndex}`} className={`bg-white container px-3 md:px-0 mb-8 ${isEven(testmIndex) ? 'ml-auto': 'mr-auto'}`}>
                  <div className={`flex items-center ${isEven(testmIndex) ? '': 'flex-row-reverse  text-right'} gap-4 p-4 md:p-8`}>
                     <img src={testm.avatar_url} alt="" className="w-22 h-22 rounded-full" width={120} height={120} />
                     <div className="md:w-8/12 w-11/12">
                        <p className="mb-3 font-bold">{testm.author.name}</p>
                        <p>
                           {testm.message}
                        </p>
                     </div>
                  </div>
               </div>
            ))}

         </HeroBanner>
         <ResearchPapers />
         <WhyChooseHaystack />
         <FeatureCards items={features} />
      </StyledPage>
   );
}


export async function getStaticProps(context) {
   let data = getClinicianFeatures()

   return {
     props: {
      data: JSON.parse(JSON.stringify(data)),
     }, // will be passed to the page component as props
   }
}
