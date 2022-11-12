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
                  <h3 className="mb-4 text-4xl font-extrabold">Infectious Diseases<br/> Should Not Be Fatal</h3>
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
                  </div>
                  <div className="flex-1">
                     <h3 className="heading">{`>2 BILLION PEOPLE WITH THE FOLLOWING PRE-EXISTING`}<br />CONDITIONS ARE AT A HIGHER RISK OF SEPSIS</h3>
                  </div>
               </div>
            </Section.Container>
         </Section>

         <Section className=" bg-blue-800 text-white">
            <Section.Container className="container mx-auto py-12">
               <h3 className="text-white section-heading section-heading--invert">
                  The Universal Infectious Diseases Test
               </h3>
               <p className="text-base text-white">
               {`UID Test is an NGS based culture-free test to identify causative pathogen in quick turn around time`}
               </p>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                  <div className="grid__col">
                     <figure className="flex gap-4">
                        <picture className="w-5/12"></picture>
                        <figcaption className="flex-1">
                           <h4>1200+ PATHOGENS</h4>
                           <p>Comprehensive single screening test covering bacteria, fungi, protozoa</p>
                        </figcaption>
                     </figure>
                  </div>
                  <div className="grid__col">
                     <figure className="flex gap-4">
                        <picture className="w-5/12"></picture>
                        <figcaption className="flex-1">
                           <h4>1200+ PATHOGENS</h4>
                           <p>Comprehensive single screening test covering bacteria, fungi, protozoa</p>
                        </figcaption>
                     </figure>
                  </div>
                  <div className="grid__col">
                     <figure className="flex gap-4">
                        <picture className="w-5/12"></picture>
                        <figcaption className="flex-1">
                           <h4>1200+ PATHOGENS</h4>
                           <p>Comprehensive single screening test covering bacteria, fungi, protozoa</p>
                        </figcaption>
                     </figure>
                  </div>
               </div>
            </Section.Container>
         </Section>
         <Section className="">
            <Section.Container className="container mx-auto py-12">
               <h3 className="section-heading">
               The current system needs an<br /> upgrade to save lives
               </h3>
               <div className="table-wrapper">
                  <table>
                     <thead>
                        <tr>
                           <th>

                           </th>
                           <th>
                           Pathogen <br />Coverage
                           </th>
                           <th>
                           Antibiotic <br />Coverage
                           </th>
                           <th>
                           TAT
                           </th>
                           <th>
                           Additional <br />Coverage
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
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
               <div className="md:w-6/12 mx-auto">
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
            </Section.Container>
         </Section>
         <Section className=" bg-gray-100">
            <Section.Container className="container mx-auto py-12">
               <div className="w-50">
                  <h3 className="section-heading">
                  How may we help you?
                  </h3>
                  <div className="flex flex-col md:flex-row gap-8">
                     <Link href={'/'}>
                        <a className="btn-secondary">I AM A CLINICIAN</a>
                     </Link>
                     <Link href={'/'}>
                        <a className="btn-primary">WE ARE A LAB / HOSPITAL</a>
                     </Link>
                  </div>
               </div>

            </Section.Container>
         </Section>
         <Section className=" ">
            <Section.Container className="container mx-auto py-12">
               <div className="w-50">
                  <h3 className="section-heading">
                  In the news
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     <div className="grid__col">
                        <PostItem
                           title="5TH AUGUST 2022"
                           thumbnailUrl="//unsplash.com"
                           description={`Early Detection and Accurate Diagnosis crucial to make India TB Free by 2025 – HaystackAnalytics Insights`}
                           url={'#'}
                        />
                     </div>
                     <div className="grid__col">
                        <PostItem
                           title="5TH AUGUST 2022"
                           thumbnailUrl="//unsplash.com"
                           description={`Early Detection and Accurate Diagnosis crucial to make India TB Free by 2025 – HaystackAnalytics Insights`}
                           url={'#'}
                        />
                     </div>
                     <div className="grid__col">
                        <PostItem
                           title="5TH AUGUST 2022"
                           thumbnailUrl="//unsplash.com"
                           description={`Early Detection and Accurate Diagnosis crucial to make India TB Free by 2025 – HaystackAnalytics Insights`}
                           url={'#'}
                        />
                     </div>
                     <div className="grid__col">
                        <PostItem
                           title="5TH AUGUST 2022"
                           thumbnailUrl="//unsplash.com"
                           description={`Early Detection and Accurate Diagnosis crucial to make India TB Free by 2025 – HaystackAnalytics Insights`}
                           url={'#'}
                        />
                     </div>
                  </div>
               </div>

            </Section.Container>
         </Section>
         <Section className="">
            <Section.Container className="container mx-auto py-12">
               <h3 className="section-heading text-center">
                  Awards
               </h3>
               <div className="md:w-6/12 mx-auto">
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
