// @ts-nocheck
import data from "../json/data.json";
import OurPartners, { ClientsCarousel } from "../OurPartners";
import TextVideo from "../TextVideo";
import Precision from "../Precision";
import Upgrade from "../Upgrade";
import WeGotCovered from "../WeGotCovered";
import VideoRemakeByPratikSir from "../VideoRemakeByPratikSir";
import BgTransitionSection from "../components/BgTransitionSection";
import AppTemplate from "../components/templates/AppTemplate";
import HambergerMenuWithScriptTag from "../HambergerMenuWithScriptTag";
import { getActivePosts, getPostFile, getPostFiles } from "../utils/posts";
import { getSettings } from "../utils/settings";
import { getActiveNews } from "../utils/news";
import styled from "@emotion/styled";
import heroBg from '../assets/haystack-body-bg.png'
import { useEffect, useMemo } from "react";
import Section from '../components/atoms/Section'
import Link from "../../node_modules/next/link";
import PostItem from "../components/molecules/PostItem";

const StyledHome = styled(AppTemplate)`
   .HeroSection {
      background-image: url("https://images.unsplash.com/photo-1659535901690-ab95a8539929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
      background-size: 60%;
      background-repeat: no-repeat;
      background-position: right center;
   }

`

const StyledHeroSection = styled(Section)`
   background-image: url(https://images.unsplash.com/photo-1659535901690-ab95a8539929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
   background-size: 60%;
   background-repeat: no-repeat;
   background-position: right center;
   .section__container {
      min-height: calc(100vh - var(--safe-top-padding, 100px));
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
`

const HeroSection = () => {
   return (
      <StyledHeroSection className="HeroSection ">
         <Section.Container className="mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="grid__col bg-white py-8">
                  <h3 className="mb-4 text-4xl font-extrabold">
                     Omega TB (ΩTB ) is<br/>
                     a Universal Drug<br/>
                     Resistance Test for TB
                  </h3>
                  <p className="text-muted">A single test for simultaneous evaluation of all resistance markers, as
well as the differentiation between mixed infection, relapse
and reinfection</p>
                  <div className="mt-8">
                     <Link href={'#'} >
                        <a className="btn-outline-info">VIEW BROCHURE</a>
                     </Link>
                  </div>
               </div>
            </div>
         </Section.Container>
      </StyledHeroSection>
   )
}

export default function OmegaTab({ Component, pageProps, news, settings }) {

   return (
      <StyledHome settings={settings}>
         <HeroSection />
         <Section className="">
            <Section.Container className="container mx-auto py-12">
               <h3 className="section-heading">
               Comparing ΩTB with current tests
               </h3>
               <div className="flex flex-col md:flex-row gap-4 my-8">
                  <div className="md:w-4/12">
                     <h3 className="heading">India accounts for <big className="text-blue-600">27Lakh</big> TB cases<br />out of <big className="text-blue-600">1Cr</big> cases across the world.</h3>
                     <div className="mb-3 flex"></div>
                     <img src="/assets/tbrand-pie-chart.svg" />
                  </div>
                  <div className="flex-1">
                     <img src="/assets/tbrand-global-countries-map.svg" />
                  </div>
               </div>
            </Section.Container>
         </Section>
         {/* Comparing ΩTB (Omega TB) with current tests */}
         <Section className="">
            <Section.Container className="container mx-auto py-16">
               <h3 className="section-heading">
               Comparing ΩTB (Omega TB) with current tests
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
            </Section.Container>
         </Section>

         <Section className=" bg-blue-800 text-white">
            <Section.Container className="container mx-auto py-12">
               <h3 className="text-white section-heading section-heading--invert text-center">
                  Benefits of ΩTB <sup>®</sup>
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-8">
                  <div className="grid__col">
                     <figure className="flex gap-4">
                        <picture className="w-4/12"></picture>
                        <figcaption className="flex-1 text-sm">
                           <h4>1200+ PATHOGENS</h4>
                           <p>Comprehensive single screening test covering bacteria, fungi, protozoa</p>
                        </figcaption>
                     </figure>
                  </div>
                  <div className="grid__col">
                     <figure className="flex gap-4">
                        <picture className="w-4/12"></picture>
                        <figcaption className="flex-1 text-sm">
                           <h4>1200+ PATHOGENS</h4>
                           <p>Comprehensive single screening test covering bacteria, fungi, protozoa</p>
                        </figcaption>
                     </figure>
                  </div>
                  <div className="grid__col">
                     <figure className="flex gap-4">
                        <picture className="w-4/12"></picture>
                        <figcaption className="flex-1 text-sm">
                           <h4>1200+ PATHOGENS</h4>
                           <p>Comprehensive single screening test covering bacteria, fungi, protozoa</p>
                        </figcaption>
                     </figure>
                  </div>
                  <div className="grid__col">
                     <figure className="flex gap-4">
                        <picture className="w-4/12"></picture>
                        <figcaption className="flex-1 text-sm">
                           <h4>1200+ PATHOGENS</h4>
                           <p>Comprehensive single screening test covering bacteria, fungi, protozoa</p>
                        </figcaption>
                     </figure>
                  </div>
                  <div className="grid__col">
                     <figure className="flex gap-4">
                        <picture className="w-4/12"></picture>
                        <figcaption className="flex-1 text-sm">
                           <h4>1200+ PATHOGENS</h4>
                           <p>Comprehensive single screening test covering bacteria, fungi, protozoa</p>
                        </figcaption>
                     </figure>
                  </div>
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


