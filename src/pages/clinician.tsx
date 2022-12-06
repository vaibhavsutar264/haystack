// @ts-nocheck
import data from "../json/data.json";
import research_papers from "../json/research_papers.json";
import testimonials from "../json/testimonials.json";
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
import { filteredPosts, filteredResearchPapers, filteredTestimonials } from "../utils/index";
import styled from "@emotion/styled";
import heroBg from '../assets/haystack-body-bg.png'
import { useEffect, useMemo } from "react";
import Section from '../components/atoms/Section'
import Link from "next/link";
import PostItem from "../components/molecules/PostItem";
import SectionPosts from "../components/organisms/SectionPosts";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import DiagnosticianPostItem from "../components/molecules/DiagnosticianPostItem";
import ResearchItem from "../components/molecules/ResearchItem";
import { Navigation } from "../components/organisms/SidebarNav/Navigation";

const StyledHome = styled(AppTemplate)`
`

const StyledHeroSection = styled(Section)`
   background-repeat: no-repeat;
   background-position: bottom center;
   background-image: url(${props => props.bg});
   background-repeat: no-repeat;
   background-size: 100%;
   .section__container {
      min-height: calc(95vh - var(--safe-top-padding, 100px));
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
`

const HeroSection = (props) => {
   return (
      <StyledHeroSection className="HeroSection " bg={props.bg} data-aos="fade-up">
         <Section.Container className="mx-auto ">
            <div className="flex items-center justify-center">
               <div className="w-7/12"></div>
               <div className="w-5/12 p-8 md:pl-10">
                  <h3 className="mb-4 text-3xl font-extrabold" dangerouslySetInnerHTML={{ __html: props.title }}>
                  </h3>
                  <p className="font-bold text-muted text-lg">Stay on top with cutting edge technology</p>
                  <div className="mt-24 flex items-center gap-4">
                     {props.primaryAction && (
                     <Link href={props.primaryAction.href} >
                        <a className="btn-primary">{props.primaryAction.title}</a>
                     </Link>
                     )}
                     {props.secondaryAction && (
                     <Link href={props.secondaryAction.href} >
                        <a className="btn-secondary opacity-50">{props.secondaryAction.title}</a>
                     </Link>
                     )}
                  </div>
               </div>
            </div>
         </Section.Container>
      </StyledHeroSection>
   )
}

export default function Clinician({ Component, pageProps, news, settings }) {

   return (
      <StyledHome settings={settings}>
         <HeroSection
            title={`Bringing precision therapy<br />
               with Genomics, ensuring<br />
               improved personalised<br />
               patient outcomes`}
            description={`Stay on top with cutting edge technology`}
            primaryAction={{ title: 'BOOK A CALL', href: '#' }}
            secondaryAction={{ title: 'KNOW MORE', href: '#' }}
            bg={'/assets/clinician-bg.jpg'}
         />
         <TestimonialsSection
            title="Testimonials"
            items={filteredTestimonials(testimonials.data)}
            category="clinician"
         />
         <SectionPosts
            title={'Research Papers'}
            enableCarousel={true}
            carouselProps={{  modules: [ Navigation ], navigation: true, }}
            ItemComponent={ResearchItem}
            posts={filteredResearchPapers(research_papers.data)}
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
      settings: JSON.parse(JSON.stringify(settings))
     }, // will be passed to the page component as props
   }
}


