// @ts-nocheck
import research_papers from "../json/research_papers.json";
import testimonials from "../json/testimonials.json";
import AppTemplate from "../components/templates/AppTemplate";
import { getSettings } from "../utils/settings";
import { getActiveNews } from "../utils/news";
import {  filteredResearchPapers, filteredTestimonials } from "../utils/index";
import styled from "@emotion/styled";
import Section from '../components/atoms/Section'
import Link from "next/link";
import SectionPosts from "../components/organisms/SectionPosts";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ResearchItem from "../components/molecules/ResearchItem";
import { Navigation } from "../components/organisms/SidebarNav/Navigation";
import ContactFormProvider from "../components/providers/ContactFormProvider";

const StyledHome = styled(AppTemplate)`
`

const StyledHeroSection = styled(Section)`
   background-position: right center;
   background-color: #3470D320;
   background-repeat: no-repeat;
   background-size: 100%;
   .section__container {
      min-height: calc(80vh - var(--safe-top-padding, 100px));
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
`

const HeroSection = (props) => {
   return (
      <StyledHeroSection className="HeroSection " bg={props.bg} data-aos="fade-up">
         <Section.Container className="mx-auto ">
            <div className="flex flex-col-reverse md:flex-row items-center px-2 md:px-0 justify-center">
            <div className="p-4 md:p-0 md:w-7/12">
                  <img src="/assets/clinician-image.png" className="w-full md:w-9/12" />
               </div>
               <div className="md:w-5/12 py-8 md:p-8 md:pl-10">
                  <h3 className="mb-4 text-3xl font-extrabold" dangerouslySetInnerHTML={{ __html: props.title }}>
                  </h3>
                  <p className="font-bold text-muted text-lg">Stay on top with cutting edge technology</p>
                  <div className="mt-8 md:mt-24 flex items-center gap-4">
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
                     {props.defaultAction && (
                     <ContactFormProvider
                        renderTrigger={(rprops) => (
                           <>
                           <a {...rprops} className="btn-secondary opacity-50 cursor-pointer">{'KNOW MORE'}</a>
                           </>
                        )}
                     />
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
            defaultAction={true}
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


