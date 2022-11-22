// @ts-nocheck
import partners from "../json/partners.json";
import awards from "../json/awards.json";
import { Autoplay } from "swiper";
import AppTemplate from "../components/templates/AppTemplate";
import { getSettings } from "../utils/settings";
import { getActiveNews } from "../utils/news";
import styled from "@emotion/styled";
import heroBg from '../assets/HOME-03.jpg'
import sec5 from '../assets/section-clinician-bg-doctor.png'
import Section from '../components/atoms/Section'
import Link from "next/link";
import SectionGridItems from "../components/organisms/SectionGridItems";
import SectionPosts from "../components/organisms/SectionPosts";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import SepsisChart from "../components/SepsisChart";


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
   background-size: 60%;
   background-repeat: no-repeat;
   background-position: right center;
   background-image: var(--bg);
   .section__container {
      min-height: calc(100vh - var(--safe-top-padding, 100px));
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
`

const HeroSection = () => {
   return (
      <StyledHeroSection className="HeroSection " style={{ '--bg': `url(${heroBg.src})` }}>
         <Section.Container className="mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="grid__col  py-8">
                  <h3 className="mb-4 text-4xl font-extrabold text-white md:text-muted">Infectious Diseases<br /> Should Not Be Fatal</h3>
                  <p className="text-blue-600 text-lg font-bold">Universal Infectious Diseases Test (UID)</p>
                  <p className="text-muted">A Revolutionary Technology to Aid the Clinician</p>
                  <div className="mt-8">
                     <Link href={'#'} >
                        <a className="btn-outline-info">KNOW MORE</a>
                     </Link>
                  </div>
               </div>
            </div>
         </Section.Container>
      </StyledHeroSection>
   )
}

function Home({ Component, pageProps, news, settings }) {

   return (
      <StyledHome bodyClassName="home" settings={settings}>
         <HeroSection />
         <Section className="">
            <Section.Container className="container mx-auto py-12">
               <h3 className="section-heading">
                  Sepsis And Its Global Impact
               </h3>
               <p className="text-base text-muted">
                  {`Sepsis is the body's extreme response to an infection and is potentially life-threatening. This occurs when a pre-existing infection triggers a chain reaction throughout your body, often leading to shock, disability, multi organ failure, or even death.`}
               </p>
               <div className="flex flex-col md:flex-row gap-4 my-8">
                  <div className="md:w-5/12">
                     <h3 className="heading">SEPSIS AS A LEADING CAUSE OF DEATH</h3>
                     <SepsisChart />
                  </div>
                  <div className="flex-1">
                     <h3 className="heading ">{`>2 BILLION PEOPLE WITH THE FOLLOWING PRE-EXISTING`}<br />CONDITIONS ARE AT A HIGHER RISK OF SEPSIS</h3>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4 mt-8">
                        <div className="grid__col">
                           <div className="text-4xl font-extrabold text-green-600">18.5</div>
                           <div className="text-lg mb-3 font-extrabold text-green-600">millon</div>
                           <div className="text-base font-extrabold text-green-600">CANCER PATIENTS</div>
                        </div>
                        <div className="grid__col">
                           <div className="text-4xl font-extrabold text-green-600">422</div>
                           <div className="text-lg mb-3 font-extrabold text-green-600">millon</div>
                           <div className="text-base font-extrabold text-green-600">DIABETES PATIENTS</div>
                        </div>
                        <div className="grid__col">
                           <div className="text-4xl font-extrabold text-green-600">{'>1.5'}</div>
                           <div className="text-lg mb-3 font-extrabold text-green-600">billion</div>
                           <div className="text-base font-extrabold text-green-600">HYPERTENSION PATIENTS</div>
                        </div>
                        <div className="grid__col">
                           <div className="text-4xl font-extrabold text-green-600">140</div>
                           <div className="text-lg mb-3 font-extrabold text-green-600">millon</div>
                           <div className="text-base font-extrabold text-green-600">IMMUNE COMPROMISED PATIENTS</div>
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
         <Section className="">
            <Section.Container className="container mx-auto py-12">
               <h3 className="section-heading">
                  The Current System Needs An<br /> Upgrade To Save Lives
               </h3>
               <div className="table-wrapper w-full overflow-auto">
                  <table>
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
                     <tbody className="text-sm text-muted">
                        <tr className="bg-gray-100 bg-blue-100 mb-3 text-green-600 text-lg">
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
                        <tr className="bg-gray-100 hover:bg-blue-100 mb-3 hover:text-green-600">
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
                        <tr className="bg-gray-100 hover:bg-blue-100 mb-3 hover:text-green-600">
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
                        <tr className="bg-gray-100 hover:bg-blue-100 mb-3 hover:text-green-600 ">
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
               <p className="text-xs text-muted">
                  {`*In silico analysis, UID can identify >1200 pathogens, pre-clinical validation has been done for 48 pathogens`}
               </p>
            </Section.Container>
         </Section>

         <Section className="">
            <Section.Container className="container mx-auto py-12">
               <h3 className="section-heading text-center">
                  Our Partners
               </h3>
               <div className="md:w-6/12 mx-auto mb-12">
                  <div className="grid grid-cols-3">
                     <div className="bg-green-600 text-white p-8 text-center flex flex-col items-center justify-center">
                        <h3 className="text-3xl font-bold">100+</h3>
                        <p>CITIES</p>
                     </div>
                     <div className="bg-blue-600 text-white p-8 text-center flex flex-col items-center justify-center">
                        <h3 className="text-3xl font-bold">500+</h3>
                        <p>HOSPITALS</p>
                     </div>
                     <div className="bg-gray-600 text-white p-8 text-center flex flex-col items-center justify-center">
                        <h3 className="text-3xl font-bold">100+</h3>
                        <p>DOCTORS</p>
                     </div>
                  </div>
               </div>
               <div className="md:px-40">
                  <Swiper
                     className="partners-carousel"
                     spaceBetween={50}
                     autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                     }}
                     modules={[Autoplay]}
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
                     onSlideChange={() => console.log('slide change')}
                     onSwiper={(swiper: any) => console.log(swiper)}
                  >
                     {partners.data?.map((slide, slideIndex) => (
                        <SwiperSlide key={`slide_${slideIndex}`}>
                           <div className="w-40 h-40 flex items-center justify-center">
                              <img src={slide.thumbnailUrl} layout='contain' />
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </Section.Container>
         </Section>
         <Section className="bg-gray-100" style={{ '--bg': `url(${sec5.src})` }}>
            <Section.Container className="container mx-auto pt-12 md:py-0 flex flex-col md:flex-row justify-between items-center">
               <div className="grid__col">
                  <h3 className="section-heading">
                     How may we help you?
                  </h3>
                  <div className="flex flex-col md:flex-row gap-8">
                     <Link href={'/clinician'}>
                        <a className="btn-secondary">I AM A CLINICIAN</a>
                     </Link>
                     <Link href={'/diagnostician'}>
                        <a className="btn-primary">WE ARE A LAB / HOSPITAL</a>
                     </Link>
                  </div>
               </div>
               <div className="grid__col">
                  <div className="md:w-6/12 mx-auto flex">
                     {/* <Image src={sec5} /> */}
                  </div>
               </div>

            </Section.Container>
         </Section>
         {/* {JSON.stringify({ news })} */}
         <SectionPosts
            title={`In the news`}
            posts={news}
         />

         <Section className="">
            <Section.Container className="container mx-auto py-12">
               <h3 className="section-heading text-center">
                  {`Awards & Recognition`}
               </h3>
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
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper: any) => console.log(swiper)}
                  className="awards-carousel"
               >
                  {awards.data?.map((slide, slideIndex) => (
                     <SwiperSlide key={`slide_${slideIndex}`} >
                        <div className="w-48 h-48">
                           <img src={slide.thumbnailUrl} />
                        </div>
                        {/* {JSON.stringify({ slide })} */}
                     </SwiperSlide>
                  ))}
               </Swiper>
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