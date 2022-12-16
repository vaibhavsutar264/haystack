/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import AppTemplate from "../components/templates/AppTemplate";
import { getSettings } from "../utils/settings";
import { getActiveNews } from "../utils/news";
import styled from "@emotion/styled";
import Section from '../components/atoms/Section'
import SectionGridItems from "../components/organisms/SectionGridItems";


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
   background-image: url("/assets/product-disease-banner.png");
   background-size: contain;
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
         <Section.Container className="mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="grid__col  py-8">
                  <h3 className="mb-4 text-4xl font-extrabold">
                     Universal Infectious <br />
                     Diseases Test
                  </h3>
                  <p className="text-muted text-sm md:text-base">A life saving product.</p>
                  <div className="mt-8 flex items-center gap-4">
                        {/* <a href="" target="_blank" className="btn-outline-info bg-transparent">VIEW PATHOGEN LIST</a> */}
                        <a href="https://drive.google.com/file/d/1GtlozhC8hEii-Ygrbj0v-V2alPe30tVW/view" target="_blank" className="btn-outline-info bg-transparent">VIEW BROCHURE</a>
                  </div>
               </div>
               <div className="grid__col block md:hidden">
                  <img src="/assets/universal-mob-ban.jpg" alt="" className="w-full" />
               </div>
            </div>
         </Section.Container>
      </StyledHeroSection>
   )
}

export default function Diseases({ Component, pageProps, news, settings }) {

   return (
      <StyledHome settings={settings}>
         <HeroSection />
         <Section className="">
            <Section.Container className="container mx-auto py-12">
               <h3 className="section-heading">
                  The current system needs an <br />upgrade to save lives
               </h3>
               <div className="table-wrapper overflow-auto table--striped table-icons">
                  <table className="w-full">
                     <thead>
                        <tr>
                           <th className="md:w/4/12">

                           </th>
                           <th className="text-left font-bold">
                              <span className="text-blue-600">UNIVERSAL<br />ID TEST</span>
                           </th>
                           <th className="text-left font-normal">
                              <span>MOLECULAR<br />PANEL</span>
                           </th>
                           <th className="text-left font-normal">
                              <span>SANGER<br />SEQUENCING</span>
                           </th>
                           <th className="text-left font-normal">
                              <span>CULTURE</span>
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>
                              <span>Turn around time</span>
                           </td>
                           <td className="text-green-600">
                              <span className="font-bold text-sm">{`Very Low <= 12hrs`}</span>
                           </td>
                           <td className="text-red-600">
                              <span className="font-bold text-sm">{`High*`}</span>
                           </td>
                           <td className="text-red-600">
                              <span className="font-bold text-sm">{`High`}</span>
                           </td>
                           <td className="text-red-600">
                              <span className="font-bold text-sm">{`High`}</span>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <span>Range of pathogens</span>
                           </td>
                           <td className="text-green-600">
                              <span className="font-bold text-sm">{`Not Limited By Probes`}</span>
                           </td>
                           <td className="text-red-600">
                              <span className="font-bold text-sm">{`Probe Based`}</span>
                           </td>
                           <td className="text-green-600">
                              <span className="font-bold text-sm">{`High`}</span>
                           </td>
                           <td className="text-red-600">
                              <span className="font-bold text-sm">{`Limited By Culturability`}</span>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <span>Range of antimicrobial resistance</span>
                           </td>
                           <td className="text-green-600">
                              <span className="font-bold text-sm">{`High/Genotypic`}</span>
                           </td>
                           <td className="text-red-600">
                              <span className="font-bold text-sm">{`Low/Genotypic`}</span>
                           </td>
                           <td className="text-red-600">
                              <span className="font-bold text-sm">{``}</span>
                           </td>
                           <td className="text-red-600">
                              <span className="font-bold text-sm">{`Low/Phenotypic`}</span>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <span>Sensitivity</span>
                           </td>
                           <td className="text-green-600">
                              <span className="font-bold text-sm">{`High (84-88%)`}</span>
                           </td>
                           <td className="text-red-600">
                              <span className="font-bold text-sm">{`Low`}</span>
                           </td>
                           <td className="text-green-600">
                              <span className="font-bold text-sm">{`High`}</span>
                           </td>
                           <td className="text-red-600">
                              <span className="font-bold text-sm">{`Low (15-20%)`}</span>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <span>Specificity</span>
                           </td>
                           <td className="text-green-600">
                              <span className="font-bold text-sm">{`Highest (99%)`}</span>
                           </td>
                           <td className="text-green-600">
                              <span className="font-bold text-sm">{`High`}</span>
                           </td>
                           <td className="text-green-600">
                              <span className="font-bold text-sm">{`Highest`}</span>
                           </td>
                           <td className="text-green-600">
                              <span className="font-bold text-sm">{`High`}</span>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <span>Site of testing</span>
                           </td>
                           <td className="text-green-600">
                              <span className="font-bold text-sm">{`On Site`}</span>
                           </td>
                           <td className="text-red-600">
                              <span className="font-bold text-sm">{`Centralised`}</span>
                           </td>
                           <td className="text-red-600">
                              <span className="font-bold text-sm">{`Centralised`}</span>
                           </td>
                           <td className="text-green-600">
                              <span className="font-bold text-sm">{`On Site`}</span>   
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <span>Manpower</span>
                           </td>
                           <td className="text-green-600">
                              <span className="font-bold text-sm">{`Zero Upskilling`}</span>
                           </td>
                           <td className="text-green-600">
                              <span className="font-bold text-sm">{`Zero Upskilling`}</span>
                           </td>
                           <td className="text-red-600">
                              <span className="font-bold text-sm">{`High Skill`}</span>
                           </td>
                           <td className="text-green-600">
                              <span className="font-bold text-sm">{`Zero Upskilling`}</span>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <span>Ease/Cost of use</span>
                           </td>
                           <td className="text-green-600">
                              <span className="font-bold text-sm">{`Low`}</span>
                           </td>
                           <td className="text-red-600">
                              <span className="font-bold text-sm">{`High`}</span>
                           </td>
                           <td className="text-red-600">
                              <span className="font-bold text-sm">{`High`}</span>
                           </td>
                           <td className="text-green-600">
                              <span className="font-bold text-sm">{`Low`}</span>
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

         <SectionGridItems
            title={`Benefits of UID`}
            titleClassName="text-center"
            gridClassName={'grid-cols-1 md:grid-cols-3 gap-8 w-11/12 mx-auto'}
            items={[
               { title: 'Personalised treatment/ therapy', thumbnailUrl: '/assets/diseas-personal-therapy.png', description: `Know the infection before starting the treatment` },
               { title: 'Accurate from start to finish', thumbnailUrl: '/assets/disease-accurate-finish.png', description: `1200+ pathogens including bacteria, fungi, protozoa.` },
               { title: 'Enabling antibiotic stewardship', thumbnailUrl: '/assets/disease-benefit-icon3.png', description: `Treat infections, protect patients from harm caused by unnecessary antibiotic use, and combat antibiotic resistance.` },
            ]}
         />

         {/* <TestimonialsSection
            title={`Testimonials`}
            items={testimonials.data}
            category={'universal'}
            bg="bg-white"
         /> */}
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


