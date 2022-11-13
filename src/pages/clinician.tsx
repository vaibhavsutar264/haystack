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
import SectionPosts from "../components/organisms/SectionPosts";

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
               <div className="grid__col"></div>
               <div className="grid__col bg-white py-8">
                  <h3 className="mb-4 text-4xl font-extrabold">
                     Bringing precision therapy<br />
                     with Genomics, ensuring<br />
                     improved personalised<br />
                     patient outcomes<br />
                  </h3>
                  <p className="font-bold text-muted">Stay on top with cutting edge technology</p>
                  <div className="mt-8 flex items-center gap-4">
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

export default function Clinician({ Component, pageProps, news, settings }) {

   return (
      <StyledHome settings={settings}>
         <HeroSection />
         <Section className="bg-gray-100">
            <Section.Container className="container mx-auto py-12">
               <h3 className="section-heading">
               Testimonials
               </h3>
               <div className="flex flex-col md:flex-row gap-4 my-8">
                  <div className="flex-1">
                     <h3 className="heading">{`TGS Assessment Profile`}</h3>
                  </div>
                  <div className="md:w-5/12">
                     <h3 className="heading">{`TGS Assessment Profile`}</h3>
                  </div>
               </div>
            </Section.Container>
         </Section>
         <SectionPosts
            title={`In the news`}
            posts={news}
         />
         <Section className=" bg-blue-800 text-white">
            <Section.Container className="container mx-auto py-12">
               <h3 className="text-white section-heading section-heading--invert text-center">
               Why Choose Haystack
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
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


