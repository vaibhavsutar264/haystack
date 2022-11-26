/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import testimonials from "../json/testimonials.json";
import research_papers from "../json/research_papers.json";
import AppTemplate from "../components/templates/AppTemplate";
import { getSettings } from "../utils/settings";
import { getActiveNews } from "../utils/news";
import styled from "@emotion/styled";
import Section from '../components/atoms/Section'
import Link from "../../node_modules/next/link";
import SectionGridItems from "../components/organisms/SectionGridItems";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import SectionPosts from "../components/organisms/SectionPosts";


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
   background-repeat: no-repeat;
   background-position: right center;
   background-image: url("/assets/omega-tb-banner.png");
   background-size: cover;
   .section__container {
      min-height: calc(100vh - var(--safe-top-padding, 100px));
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
`

const ShareButton = () => {
   return (
      <div className="flex items-center gap-2 text-sm hover:text-blue-600 cursor-pointer share-button">
         <span>SHARE</span>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reply-fill" viewBox="0 0 16 16">
            <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
         </svg>
         <span></span>
      </div>
   )
}

const PostItem = (props) => {
   return (
      <div>
         <figure className="flex md:flex-row flex-col gap-4 items-center">
            <div className="md:w-4/12 ">
               <div className="aspect-w-16 aspect-h-9">
                  <img src={props.thumbnail_url} alt="" className="w-full object-cover" />
               </div>
            </div>
            <figcaption className="flex-1">
               {/* {JSON.stringify({ props })} */}
               <div className="flex justify-end mb-4 md:-mt-6">
                  <div>
                     <ShareButton />
                  </div>
               </div>
               <p className="mb-3">
                  <a href="#" className="underline text-blue-600">
                  {props.title}
                  </a>
               </p>
               <p className="mb-6">
                  {props.excerpt}
               </p>
               <p className="font-semibold">
                  JULY 2020
               </p>
            </figcaption>
         </figure>
      </div>
   )
}


export default function ResearchPapers({ Component, pageProps, news, settings }) {

   return (
      <StyledHome settings={settings}>
         <Section className="">
            <Section.Container className="container mx-auto py-12">
               <h3 className="text-3xl font-bold text-blue-600 mb-4 md:mb-8">
                  RESEARCH PAPERS
               </h3>
               <ol className="flex flex-col gap-8 mb-6">
                  {research_papers.data?.map((rp, rpIndex) => (
                  <li key={`lis_${rpIndex}`}>
                     <PostItem {...rp} />
                  </li>
                  ))}
               </ol>
               <div className="flex justify-end">
                  <div>
                     <span>1 / 12 ...................</span>
                     <Link href="/">
                     View all
                     </Link>
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
         settings: JSON.parse(JSON.stringify(settings)),
      }, // will be passed to the page component as props
   }
}


