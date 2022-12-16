// @ts-nocheck
import partners from "../json/partners.json";
import awards from "../json/awards.json";
import { Autoplay } from "swiper";
import AppTemplate from "../components/templates/AppTemplate";
import { getSettings } from "../utils/settings";
import { getActiveNews } from "../utils/news";
import styled from "@emotion/styled";
import heroBg from '../assets/homepage-banner.png'
import sec5 from '../assets/section-clinician-bg-doctor.png'
import Section from '../components/atoms/Section'
import Link from "next/link";
import SectionGridItems from "../components/organisms/SectionGridItems";
import SectionPosts from "../components/organisms/SectionPosts";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SepsisChart from "../components/SepsisChart";
import { useRef } from "react";
import { filteredNews } from "../utils/index";

const loadPartnerImg = ({ src }) => {
   return `/assets/${src}`
}

const StyledHome = styled(AppTemplate)`
   .HeroSection {
      background-image: var(--bg);
      background-size: 60%;
      background-repeat: no-repeat;
      background-position: right center;
   }
   .awards-carousel {
      img {
         --size: 100px;
         width: var(--size);
         height: var(--size);
      }
   }
`

const StyledHeroSection = styled(Section)`
   background-repeat: no-repeat;
   background-position: right;
   background-size: contain;
   background-image: var(--bg);
   background-repeat: no-repeat;
   .section__container {
      min-height: calc(100vh - var(--safe-top-padding, 100px));
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
   @media (max-width: 768px) {
      background-image: none;
      background-position: bottom;
      .section__container {
         min-height: 40vh;
         display: flex;
         flex-direction: column;
         justify-content: flex-start;
      }
   }

`

const HeroSection = () => {
   return (
      <StyledHeroSection className="HeroSection " data-aos="fade-up"  style={{ '--bg': `url(${heroBg.src})` }}>
         <Section.Container className="mx-auto px-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="grid__col px-3 md:px-0o py-8">
                  <h3 className="mb-4 text-banner font-extrabold text-muted">Infectious Diseases<br /> Should Not Kill Anyone</h3>
                  <div className="my-8">
                     <p className="text-blue-600 text-lg font-bold">Universal Infectious Diseases Test (UID)</p>
                     <p className="text-muted">A Revolutionary Technology to Aid the Clinician</p>
                  </div>
                  <div className="mt-8 flex">
                     <Link href={'/universal-id'} >
                        <a className="btn-outline-info font-bold">KNOW MORE</a>
                     </Link>
                  </div>
               </div>
               <div className="grid__col block md:hidden">
                  <img src="/assets/mob-ban.png" alt="" className="w-full" />
               </div>
            </div>
         </Section.Container>
      </StyledHeroSection>
   )
}

function Home({ Component, pageProps, news, settings }) {
   const partnersCarousel = useRef(null)
   const awardsCarousel = useRef(null)

   return (
      <StyledHome bodyClassName="home" settings={settings}>
         <HeroSection />
         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16">
               <h3 className="section-heading">
                  Sepsis And Its Global Impact
               </h3>
               <p className="text-base text-muted">
                  Sepsis is the body's extreme response to an infection and is potentially life-threatening. This occurs when a pre-existing infection <br></br>triggers a chain reaction throughout your body, often leading to shock, disability, multi organ failure, or even death.
               </p>
               <div className="flex flex-col md:flex-row gap-4 my-8 mt-8 md:mt-24">
                  <div className="md:w-5/12">
                     <h3 className="heading">SEPSIS AS A LEADING CAUSE OF DEATH</h3>
                     <SepsisChart />
                  </div>
                  <div className="flex-1">
                     <h3 className="heading ">{`>2 BILLION PEOPLE WITH THE FOLLOWING PRE-EXISTING`}<br />CONDITIONS ARE AT A HIGHER RISK OF SEPSIS</h3>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4 mt-8">
                        <div className="grid__col">
                           <div className="text-4xl font-extrabold text-green-600">18.5</div>
                           <div className="text-3xl mb-3 font-extrabold text-green-600">million</div>
                           <div className="text-base font-semibold text-green-600">CANCER PATIENTS</div>
                        </div>
                        <div className="grid__col">
                           <div className="text-4xl font-extrabold text-green-600">422</div>
                           <div className="text-3xl mb-3 font-extrabold text-green-600">million</div>
                           <div className="text-base font-semibold text-green-600">DIABETES PATIENTS</div>
                        </div>
                        <div className="grid__col">
                           <div className="text-4xl font-extrabold text-green-600">{'>1.5'}</div>
                           <div className="text-3xl mb-3 font-extrabold text-green-600">billion</div>
                           <div className="text-base font-semibold text-green-600">HYPERTENSION PATIENTS</div>
                        </div>
                        <div className="grid__col">
                           <div className="text-4xl font-extrabold text-green-600">140</div>
                           <div className="text-3xl mb-3 font-extrabold text-green-600">million</div>
                           <div className="text-base font-semibold text-green-600">IMMUNE COMPROMISED PATIENTS</div>
                        </div>
                     </div>
                  </div>
               </div>
            </Section.Container>
         </Section>
         <SectionGridItems
            gridClassName={'grid-cols-1 md:grid-cols-3'}
            title={`The Universal Infectious Diseases Test`}
            description={`UID Test is an NGS based culture-free test to identify causative pathogen in quick turn around time`}
            items={[
               { title: '1200+ PATHOGENS', thumbnailUrl: '/assets/pathogens-icon.svg', description: 'Comprehensive single screening test covering bacteria, fungi, protozoa' },
               { title: 'ARG PROFILING', thumbnailUrl: '/assets/microscope_icon.svg', description: 'Identifies drug resistance based on ARG (Antibiotic Resistance Gene) profile' },
               { title: 'RESULT REPORTED IN 8-12 HOURS', thumbnailUrl: '/assets/timer_icon.svg', description: 'Hands on time < 4 hours Unbeatable turnaround time of 12 hours' },
            ]}
         />
         <Section className="bg-light">
            <Section.Container className="container mx-auto py-8 md:py-16 ">
               <h3 className="section-heading">
                  The Current System Needs An<br /> Upgrade To Save Lives
               </h3>
               <div className="table-wrapper w-full overflow-auto table--home">
                  <table className="border-spacing-table">
                     <thead>
                        <tr className="text-blue-600 font-extrabold">
                           <th className="text-left p-3 md:w-3/12">
                              Tests for <br />ID
                           </th>
                           <th className="text-left p-3 md:w-2/12">
                              Turn<br />
                              Around Time
                           </th>
                           <th className="text-left p-3">
                              Pathogen <br />Coverage
                           </th>
                           <th className="text-left p-3">
                              Antibiotic<br />Coverage
                           </th>
                           <th className="text-left p-3">
                              Additional <br />Information
                           </th>
                        </tr>
                     </thead>
                     <tbody className="text-sm text-muted-new">
                        <tr className="bg-gray-100 bg-blue-trans mb-3 text-green-600 text-lg">
                           <td className="p-3">
                              <div className="flex items-center gap-3">
                                 <img src="/assets/tests_icon.svg" alt="" className="w-10" />
                                 <span className="font-semibold">UID Test</span>
                              </div>
                           </td>
                           <td className="p-3">
                              <div className="flex items-center gap-3">
                                 <img src="/assets/turn_around_icon.svg" alt="" className="w-8" />
                                 <div>8-12 hours</div>
                              </div>
                           </td>
                           <td className="p-3">
                              <div>{'>1200 pathogens*'}</div>
                           </td>
                           <td className="p-3">
                              <div>{'ARGs'}</div>
                              <div>{'Anti-microbial Resistance Genes'}</div>
                           </td>
                           <td className="p-3">
                              <div>Species and Genus identification</div>
                              <div>Poly-microbial Identification</div>
                           </td>
                        </tr>
                        <tr className="bg-gray-trans mb-3">
                           <td className="p-3">
                              <div className="flex items-center gap-3">
                                 <img src="/assets/culture_test.svg" alt="" className="w-8" />
                                 <span className="font-semibold">Culture Test</span>
                              </div>
                           </td>
                           <td className="p-3">
                              <div>2-10 Days</div>
                           </td>
                           <td className="p-3">
                              <div>{'Culturable bacteria and fungi'}</div>
                           </td>
                           <td className="p-3">
                              <div>{'Selected Panel'}</div>
                           </td>
                           <td className="p-3">
                           </td>
                        </tr>
                        <tr className="bg-gray-trans-1 mb-3">
                           <td className="p-3">
                              <div className="flex items-center gap-3">
                                 <img src="/assets/molecular_test_icon.svg" alt="" className="w-8" />
                                 <span className="font-semibold">Molecular Test</span>
                              </div>
                           </td>
                           <td className="p-3">
                              <div>12-24 Hours</div>
                           </td>
                           <td className="p-3">
                              <div>{'Up to 43 pathogens'}</div>
                           </td>
                           <td className="p-3">
                              <div>{'1-5 Antibiotics'}</div>
                           </td>
                           <td className="p-3">
                              <div>Upgradation of technology on existing set up is not possible or is very difficult</div>
                           </td>
                        </tr>
                        <tr className="bg-gray-trans mb-3">
                           <td className="p-3">
                              <div className="flex items-center gap-3">
                                 <img src="/assets/sequence_test.svg" alt="" className="w-8" />
                                 <span className="font-semibold">Sequencing Test</span>
                              </div>
                           </td>
                           <td className="p-3">
                              <div>1-3 days</div>
                           </td>
                           <td className="p-3">
                              <div>{'Several pathogens'}</div>
                           </td>
                           <td className="p-3">
                              <div>{'Limitedly available with some'}</div>
                           </td>
                           <td className="p-3">

                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <p className="text-xs text-muted mt-4">
                  {`*In silico analysis, UID can identify >1200 pathogens, pre-clinical validation has been done for 48 pathogens`}
               </p>
            </Section.Container>
         </Section>

         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16">
               <h3 className="section-heading text-center">
                  Our Partners
               </h3>
               <div className="md:w-6/12 mx-auto mb-12">
                  <div className="grid grid-cols-3">
                     <div className="bg-green-600 text-white p-12 py-10 text-center flex flex-col items-center justify-center">
                        <h3 className="text-5xl font-bold text-white">100+</h3>
                        <p>CITIES</p>
                     </div>
                     <div className="bg-blue-600 text-white p-12 py-10 text-center flex flex-col items-center justify-center">
                        <h3 className="text-5xl font-bold text-white">100+</h3>
                        <p>HOSPITALS</p>
                     </div>
                     <div className="bg-gray-600 text-white p-12 py-10 text-center flex flex-col items-center justify-center">
                        <h3 className="text-5xl font-bold text-white">500+</h3>
                        <p>DOCTORS</p>
                     </div>
                  </div>
               </div>
               <div className="relative">
                  <Swiper
                     className="partners-carousel w-4/5"
                     spaceBetween={0}
                     navigation={true}
                     ref={partnersCarousel}
                     onSlideChange={console.info}
                     onReachEnd={console.info}
                     onReachBeginning={console.info}
                     autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                     }}
                     modules={[Navigation,Autoplay]}
                     breakpoints={{
                        300: {
                           slidesPerView: 2,
                           spaceBetween: 0,
                        },
                        768: {
                           slidesPerView: 4,
                           spaceBetween: 0,
                        },
                        1024: {
                           slidesPerView: 5,
                           spaceBetween: 0,
                        },
                     }}
                     onSwiper={(swiper: any) => partnersCarousel.current = swiper}
                  >
                     {partners.data?.map((slide, slideIndex) => (
                        <SwiperSlide className="" key={`slide_${slideIndex}`}>
                           <div className="w-36 flex items-center justify-center">
                              <img src={slide.thumbnailUrl} layout='contain' />
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  <div className="swiper-button--outer swiper-button-prev" onClick={() => partnersCarousel.current?.slidePrev()}></div>
                  <div className="swiper-button--outer swiper-button-next" onClick={() => partnersCarousel.current?.slideNext()}></div>
               </div>
            </Section.Container>
         </Section>
         <Section className="bg-gray-100" style={{ '--bg': `url(${sec5.src})` }}>
            <Section.Container className="container mx-auto flex flex-col md:flex-row justify-between items-center bg-highlight px-3">
               <div className="grid__col w-100">
                  <h3 className="section-heading font-5xl">
                     How may we help you?
                  </h3>
                  <div className="flex flex-col md:flex-row gap-8 mt-8">
                     <Link href={'/clinician'}>

                        <a className="btn-secondary bg-gray-400 text-xl">I AM A CLINICIAN</a>
                     </Link>
                     <Link href={'/diagnostician'}>
                        <a className="btn-secondary bg-gray-400 text-xl">WE ARE A LAB / HOSPITAL</a>
                     </Link>
                  </div>
               </div>

            </Section.Container>
         </Section>
         {/* {JSON.stringify({ news })} */}
         <SectionPosts
            title={`In the news`}
            posts={filteredNews(news, 'date')}
            colsCount={3}
            enableCarousel={false}
         />

         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16">
               <h3 className="section-heading text-center mb-6">
                  {`Awards & Recognition`}
               </h3>
               <div className="relative">
                  <Swiper
                     spaceBetween={50}
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
                           slidesPerView: 4,
                           spaceBetween: 40,
                        },
                        1024: {
                           slidesPerView: 5,
                           spaceBetween: 50,
                        },
                     }}
                     modules={[Autoplay]}
                     onSwiper={(swiper: any) => awardsCarousel.current = swiper}
                     className="awards-carousel"
                  >
                     {awards.data?.map((slide, slideIndex) => (
                        <SwiperSlide key={`slide_${slideIndex}`} >
                           <div className="w-48 h-36 hover-layer hover:text-white">
                              <img src={slide.thumbnailUrl} />
                              <div className="hover-layer__overlay">
                                 <span className="text-center px-2 text-sm">{slide.title}</span>
                              </div>
                           </div>
                           {/* {JSON.stringify({ slide })} */}
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  {/* <div className="swiper-button--outer swiper-button-prev" onClick={() => awardsCarousel.current?.slidePrev()}></div>
                  <div className="swiper-button--outer swiper-button-next" onClick={() => awardsCarousel.current?.slideNext()}></div> */}
               </div>
            </Section.Container>
         </Section>
      </StyledHome>
   )
}

export async function getStaticProps(context) {
   let news = getActiveNews()
   console.log({ news })
   const settings = getSettings()

   return {
      props: {
         news: JSON.parse(JSON.stringify(news)),
         settings: JSON.parse(JSON.stringify(settings))
      }, // will be passed to the page component as props
   }
}


export default Home;
