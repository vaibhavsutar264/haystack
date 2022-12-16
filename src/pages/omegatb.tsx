/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import testimonials from "../json/testimonials.json";
import research_papers from "../json/research_papers.json";
import AppTemplate from "../components/templates/AppTemplate";
import { getSettings } from "../utils/settings";
import { getActiveNews } from "../utils/news";
import styled from "@emotion/styled";
import Section from '../components/atoms/Section'
import SectionGridItems from "../components/organisms/SectionGridItems";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import SectionPosts from "../components/organisms/SectionPosts";
import ResearchItem from "../components/molecules/ResearchItem";
import TBWorldMap from "../components/TBWorldMap";
import TBPieChart from "../components/TBPieChart";


const page = {
   omegaComparisionTable: {
      data: [
         {
            drugAnalytic: 'ΩTB ®',
         }
      ]
   }
}

const StyledHome = styled(AppTemplate)`

`

const StyledHeroSection = styled(Section)`
  
   background-position: right;
   background-image: url("/assets/omega-tb-banner.png");
   background-size: cover;
   background-repeat: no-repeat;
   .section__container {
      min-height: calc(85vh - var(--safe-top-padding, 100px));
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
   @media (max-width: 768px) {
      background-image: none;
      background-size: contain;
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
      <StyledHeroSection className="HeroSection " data-aos="fade-up">
         <Section.Container className="mx-auto px-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="grid__col  py-8 px-3 md:px-0">
                  <h3 className="mb-4 text-4xl font-extrabold">
                     ΩTB® is a <br />
                     Universal Drug <br />
                     Resistance Test for TB
                  </h3>
                  <p className="text-muted w-11/12 text-sm md:text-base">A single test for simultaneous evaluation of all resistance markers,
                  as well as the differentiation between mixed infection, relapse
                  and reinfection</p>
                  <div className="mt-8">
                     <a href="https://drive.google.com/file/d/1PwrID_9uXI_qAy-NQnPpTtxBO_ANwtEW/view" target="_blank" className="btn-outline-info bg-transparent">VIEW BROCHURE</a>
                  </div>
               </div>
               <div className="grid__col block md:hidden">
                  <img src="/assets/omega-mob-ban.jpg" alt="" className="w-full" />
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
               TB and it’s global impact
               </h3>
               <div className="flex flex-col md:flex-row gap-4 my-8">
                  <div className="md:w-4/12">
                     <h3 className="text-md font-bold">India accounts for <big className="text-blue-600">27Lakh</big> TB cases<br />out of <big className="text-blue-600">1Cr</big> cases across the world.</h3>
                     <div className="mb-12 flex"></div>
                     {/* <img src="/assets/tb-pie-chart.png" alt="tb-pie-chart" /> */}
                     <TBPieChart />
                  </div>
                  <div className="flex-1">
                     {/* <img src="/assets/tb-world-map.png" alt="tb-world-map" className="map-image"/> */}
                     <TBWorldMap />
                  </div>
               </div>
            </Section.Container>
         </Section>
         {/* Comparing ΩTB (Omega TB) with current tests */}
         <Section className="">
            <Section.Container className="container mx-auto py-12 md:py-20">
               <h3 className="section-heading">
                  Comparing ΩTB® <span className="text-xl">(Omega TB)</span> with current tests
               </h3>
               <div className="flex flex-col md:flex-row justify-between">
                  <div className="md:w-6/12">
                     <div className="table-wrapper w-full overflow-auto flex flex-col justify-between h-full table--hover-sm">
                        <table className="w-full border-spacing-table table--striped">
                           <thead>
                              <tr className="text-blue-600 font-extrabold">
                                 <th className="text-left p-3 md:w-2/12">

                                 </th>
                                 <th className="text-left p-3 md:w-3/12">
                                    Drug Analysis
                                 </th>
                                 <th className="text-left p-3 ">
                                    Antibiotic Coverage
                                 </th>
                              </tr>
                           </thead>
                           <tbody className="text-sm text-muted">
                              <tr className="bg-blue-trans mb-3 text-green-600 text-base font-semibold">
                                 <td className="p-3">
                                    <div className="flex items-center justify-center gap-3">
                                       <img src="/assets/tests_icon.svg" alt="" className="w-8 h-8" />
                                    </div>
                                 </td>
                                 <td className="p-3">
                                    <span className="font-semibold">{'ΩTB®'}</span>
                                 </td>
                                 <td className="p-3">
                                    <div>{'18 antibiotics including bedaquiline, delamanid, etc.'}</div>
                                 </td>
                              </tr>
                              <tr className="bg-gray-trans mb-3 text-sm">
                                 <td className="p-3 py-1">
                                    <div className="flex items-center justify-center gap-3">
                                       <img src="/assets/culture_test.svg" alt="" className="w-5 h-5" />
                                    </div>
                                 </td>
                                 <td className="p-3 py-1">
                                    <span>Culture Test</span>
                                 </td>
                                 <td className="p-3 py-1">
                                    <div>{'13 - 15 anti-biotics'}</div>
                                 </td>
                              </tr>
                              <tr className="bg-gray-trans-1  mb-3 text-sm">
                                 <td className="p-3 py-1">
                                    <div className="flex items-center justify-center gap-3">
                                       <img src="/assets/cbnat.svg" alt="" className="w-5 h-5" />
                                    </div>
                                 </td>
                                 <td className="p-3 py-1">
                                    <span>CBNAAT</span>
                                 </td>
                                 <td className="p-3 py-1">
                                    <div>{'1 - 2 antibiotics'}</div>
                                 </td>
                              </tr>
                              <tr className="bg-gray-trans  mb-3 text-sm">
                                 <td className="p-3 py-1">
                                    <div className="flex items-center justify-center gap-3">
                                       <img src="/assets/testube-grey.svg" alt="" className="w-5 h-5" />
                                    </div>
                                 </td>
                                 <td className="p-3 py-1">
                                    <span>LPA</span>
                                 </td>
                                 <td className="p-3 py-1">
                                    <div>{'Targeted for first line or second line'}</div>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <p class="text-xs text-muted">*For smear positive samples</p>
                     </div>
                  </div>
                  <div className=" border my-4 md:my-0 md:ml-12 border-gray-300"></div>
                  <div className="md:w-5/12 ">
                     <h4>ΩTB<sup>®</sup> Assessment Profile</h4>
                     <div className="flex gap-4 md:mt-4">
                        <div className="w-6/12">
                           <img src="/assets/omega-tb-assessment-profile.png" alt="omega-tb-assessment-profile" />
                        </div>
                        <div className="flex-1">
                           <ol className="flex flex-col gap-2 text-xs">
                              <li className="bg-gray-100 px-3 py-2 ">
                                 Test 18 antibiotics
                              </li>
                              <li className="bg-gray-100 px-3 py-2">
                                 Specificity: 99.8%
                              </li>
                              <li className="bg-gray-100 px-3 py-2">
                                 Sensitivity: 85-98%
                              </li>
                              <li className="bg-gray-100 px-3 py-2">
                                 Phylogenetic reconstruction
                              </li>
                              <li className="bg-gray-100 px-3 py-2">
                                 Identify mixed infection and coinfections including NTM/MOTT
                              </li>
                              <li className="bg-gray-100 px-3 py-2">
                                 Strain Information
                              </li>
                           </ol>
                        </div>
                     </div>
                  </div>
               </div>

            </Section.Container>
         </Section>
         <SectionGridItems
            title={`Benefits of ΩTB®`}
            titleClassName="text-center"
            gridClassName={'grid-cols-1 md:grid-cols-4 gap-8 w-11/12 mx-auto'}
            items={[
               { title: 'Comprehensive', thumbnailUrl: '/assets/testtube.svg', description: `DR profile of 18 drugs, Mixed infections and Co-infections incl NTM` },
               { title: 'Validated', thumbnailUrl: '/assets/time.svg', description: `Tested and validated on >10,000 genomes and >300 clinical samples` },
               { title: 'Accurate', thumbnailUrl: '/assets/micro.svg', description: `High sensitivity and specificity comparable to molecular methods` },
               { title: 'Affordable', thumbnailUrl: '/assets/hand.svg', description: `Test cost less than or comparable to culture testing` },
            ]}
         />
         <TestimonialsSection
            title={`Testimonials`}
            items={testimonials.data}
            category={'omega'}
            bg="bg-gray-100"
         />
         <SectionPosts
            title={`Research Papers`}
            posts={research_papers.data}
            colsCount={3}
            ItemComponent={ResearchItem}
         />

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
         settings: JSON.parse(JSON.stringify(settings)),
      }, // will be passed to the page component as props
   }
}


