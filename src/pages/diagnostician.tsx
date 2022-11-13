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
import SectionGridItems from "../components/organisms/SectionGridItems";

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

export default function Diagnostician({ Component, pageProps, news, settings }) {

   return (
      <StyledHome settings={settings}>
         <HeroSection />
         <Section className="bg-gray-100">
            <Section.Container className="container mx-auto py-12">
               <h3 className="section-heading text-center">
               Automated Bioinformatics Platform
               </h3>
               <p className="text-center mb-4 text-muted font-semibold">Localized Report with Software access</p>
               <div className="flex flex-col md:flex-row gap-4 my-8 mx-auto md:w-6/12 ">
                  <div className="flex-1">
                     <h3 className="heading">{`TGS Assessment Profile`}</h3>
                  </div>
                  <div className="md:w-5/12">
                     <h3 className="heading">{`TGS Assessment Profile`}</h3>
                  </div>
               </div>
            </Section.Container>
         </Section>
         <SectionGridItems
            gridClassName="grid-cols-1 md:grid-cols-4"
            title={`Why Choose Haystack`}
            items={[
               { title: `1200+ PATHOGENS`, description: `Comprehensive single screening test covering bacteria, fungi, protozoa`  },
               { title: `1200+ PATHOGENS`, description: `Comprehensive single screening test covering bacteria, fungi, protozoa`  },
               { title: `1200+ PATHOGENS`, description: `Comprehensive single screening test covering bacteria, fungi, protozoa`  },
               { title: `1200+ PATHOGENS`, description: `Comprehensive single screening test covering bacteria, fungi, protozoa`  },
            ]}
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


