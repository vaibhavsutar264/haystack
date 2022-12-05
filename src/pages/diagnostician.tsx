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
import { useEffect, useMemo, useState } from "react";
import Section from '../components/atoms/Section'
import Link from "../../node_modules/next/link";
import PostItem from "../components/molecules/PostItem";
import SectionGridItems from "../components/organisms/SectionGridItems";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import testimonials from "../json/testimonials.json";
import research_papers from "../json/research_papers.json";
import SectionPosts from "../components/organisms/SectionPosts";
import DiagnosticianPostItem from "../components/molecules/DiagnosticianPostItem";
import { filteredPosts, filteredResearchPapers } from "../utils/index";
import ResearchItem from "../components/molecules/ResearchItem";

const StyledHome = styled(AppTemplate)`

`

const StyledHeroSection = styled(Section)`
   background-position: right center;
   background-image: url('/assets/diagnostician-banner.png');
   background-repeat: no-repeat;
   background-size: 100%;
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
            <div className="flex items-center justify-center">
               <div className="w-7/12"></div>
               <div className="w-5/12 md:ml-12 py-8">
                  <h3 className="mb-4 text-3xl font-extrabold">
                     Get started with<br />
                     Genomics today with<br />
                     a fully automatic AI based<br />
                     bioinformatics platform
                  </h3>
                  <p className="font-bold text-muted text-lg">
                     Be Ahead Of The Competition <br />
                     With Revolutionary Technology
                  </p>
                  <div className="mt-16 flex items-center gap-4">
                     <Link href={'#'} >
                        <a className="btn-primary">BOOK A CALL</a>
                     </Link>
                     <Link href={'#'} >
                        <a className="btn-secondary opacity-50">KNOW MORE</a>
                     </Link>
                  </div>
               </div>
            </div>
         </Section.Container>
      </StyledHeroSection>
   )
}

export default function Diagnostician({ Component, pageProps, news, settings }) {

   const [ activeTab, setActiveTab ] = useState()
   const [ activeTab2, setActiveTab2 ] = useState()

   return (
      <StyledHome settings={settings}>
         <HeroSection />
         <Section className="bg-gray-100">
            <Section.Container className="container mx-auto py-12">
               <h3 className="font-extrabold text-center text-3xl mb-4">
               Automated Bioinformatics Platform
               </h3>
               <p className="text-center mb-4 text-muted font-bold">Localized Report with Software access</p>
               <div className="grid grid-cols-3 gap-4 my-16 mb-24 mx-auto md:w-6/12 ">
                  <div className="grid__col">
                     <div className="flex gap-2">
                        <div>
                           <img src="/assets/diagnostician-icon1.png" className="w-10 h-10" />
                        </div>
                        <div className="flex-1">
                           <h3 className="text-blue-600 font-bold">ZERO <br/>UPSKILLING REQUIRED</h3>
                        </div>
                     </div>
                  </div>
                  <div className="grid__col">
                     <div className="flex gap-2">
                        <div>
                           <img src="/assets/diagnostician-icon2.png" className="w-10 h-10" />
                        </div>
                        <div className="flex-1">
                           <h3 className="text-blue-600 font-bold">COMPLETE BIOINFORMATICS PLATFORM</h3>
                        </div>
                     </div>
                  </div>
                  <div className="grid__col md:ml-5">
                     <div className="flex gap-2">
                        <div>
                           <img src="/assets/diagnostician-icon3.png" className="w-10 h-10" />
                        </div>
                        <div className="flex-1">
                           <h3 className="text-blue-600 font-bold">NO SYSTEM UPGRADES REQUIRED</h3>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="text-center  mt-6 mb-6 flex items-center justify-center gap-4">
                  <div>
                     <h3 className="text-green-600 text-xl font-bold">Book a Detailed Call With Our Expert Today</h3>
                  </div>
                  <div>
                     <Link href="#">
                        <a className="text-white bg-green-600 px-4 py-3 font-bold">CONNECT WITH US</a>
                     </Link>
                  </div>
               </div>
            </Section.Container>
         </Section>
         <Section className=" bg-blue-800 text-white">
            <Section.Container className="container mx-auto py-20">
               <h3 className="text-white font-extrabold text-center text-3xl mb-4">
               Why Choose HaystackAnalytics
               </h3>
               <p className="text-white text-center text-sm">
               HaystackAnalytics enables you to get started with genomics, <br />
               via a fully automated AI-powered bio informatics platform
               </p>
               <div className="flex items-center justify-center gap-4 my-8">
                  <button type="button" onClick={() => setActiveTab('1')}  className={`border-2 border-white px-4 py-2 text-white hover:bg-white hover:text-blue-900 cursor-pointer font-bold ${activeTab == '1' ? 'active bg-white text-blue-900': ''}`}>
                     One click reporting
                  </button>
                  <button type="button" onClick={() => setActiveTab('2')}  className={`border-2 border-white px-4 py-2 text-white hover:bg-white hover:text-blue-900 cursor-pointer font-bold ${activeTab == '2' ? 'active bg-white text-blue-900': ''}`}>
                     Plug & play lab upgrade
                  </button>
                  <button type="button" onClick={() => setActiveTab('3')}  className={`border-2 border-white px-4 py-2 text-white hover:bg-white hover:text-blue-900 cursor-pointer font-bold ${activeTab == '3' ? 'active bg-white text-blue-900': ''}`}>
                     Access to several clinical applications
                  </button>
               </div>
               <div className="md:px-11 md:max-w-4xl mx-auto">
                  {activeTab == '1' && (
                  <div>
                     {`HaystackAnalytic's software is designed as a desktop application which provides access to several clinical pipelines having the capability of going from raw sequenced data to final clinical report through a single click interface.`}
                  </div>
                  )}
                  {activeTab == '2' && (
                  <div>
                     {`HaystackAnalytic's bioinformatics plugs into the current lab technology layer & allows the current team to get started on clinical genomics reporting with minimal training. The current lab team becomes proficient in clinical genomics reporting.`}
                  </div>
                  )}
                  {activeTab == '3' && (
                  <div>
                     {`HaystackAnalytic's bioinformatics platform has pre-validated clinical applications for several conditions across clinical genomics & human genomics spectrum.`}
                  </div>
                  )}
               </div>
            </Section.Container>
         </Section>

         <TestimonialsSection
            title={'Testimonials'}
            items={filteredPosts(testimonials.data)}
            category="diagnostician"
         />
         <SectionPosts
            title={'Research Papers'}
            enableCarousel={true}
            ItemComponent={ResearchItem}
            posts={filteredResearchPapers(research_papers.data)}
         />
         <Section className="SectionGridItems bg-blue-800 text-white ">
            <Section.Container className="container mx-auto py-24 text-center">
               <h3 className={`text-white section-heading section-heading--invert `}>
                  {'Why Partner With Us'}
               </h3>
               <div className="flex items-center gap-6 my-6 justify-center">
                  <button type="button" onClick={() => setActiveTab2('4')} className={`text-white font-bold px-4 py-3 border-2 border-white ${activeTab2 == '4' ? 'active bg-white text-blue-900': ''}`}>{`I have a sequencer`}</button>
                  <button type="button" onClick={() => setActiveTab2('5')} className={`text-white font-bold px-4 py-3 border-2 border-white ${activeTab2 == '5' ? 'active bg-white text-blue-900': ''}`}>{`I don't have a sequencer`}</button>
               </div>
               <div className="md:px-11 md:max-w-4xl mx-auto">
                  {activeTab2 == '4' && (
                  <div>
                     {`If you own a sequencer, HaystackAnalytics's bioinformatics platform is compatible with illumina, nanopore & BGI platforms.`}<br />
                     Connect with us to get access to several pre-validated clinical genomics applications.
                  </div>
                  )}
                  {activeTab2 == '5' && (
                  <div>
                     At HaystackAnalytics we have clinical apps for infectious diagnostics, built on nanopore platform which can be easily integrated into your lab with less than $10k of Capex. <br />
                     Connect with us to get access to our nanopore based<br />
                     applications & turnkey solutions.
                  </div>
                  )}
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


