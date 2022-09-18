import data from "../data/data.json";
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

const StyledHome = styled(AppTemplate)`
   .hero-section {

   }
`

const HeroSection = styled(Section)`
   background-image: url(${heroBg.src});
   background-size: cover;
   min-height: 100vh;
   display: flex;
   align-items: center;
`

function Home({ Component, pageProps, news, settings }) {
   const onScroll = useMemo((e: any) => {
      const bgColor = e?.target?.getAttribute('data-body-bg')
      globalThis.document?.body?.setAttribute(`style`, `--current-bg-color: ${bgColor}`)

   }, [  ])
   return (
      <StyledHome bodyClassName="home" settings={settings}>
         <HeroSection>
            <TextVideo />
         </HeroSection>
         <VideoRemakeByPratikSir />
         <Section data-aos="fade-in" data-aos-delay="800" data-aos-easing="linear" data-aos-duration="1000" onScroll={onScroll} className="py-10 md:py-28 bg-black" fromBg="#000" toBg="#000">
            <Upgrade />
         </Section>
         <Section data-aos="fade-in" data-aos-delay="800" data-aos-easing="linear" data-aos-duration="1000" onScroll={onScroll} containerClass="" fromBg="#3570d3" toBg="#3570d3" className="py-10 md:pt-28 bg-blue-600 pb-0 ">
            <OurPartners ourPartner={data.ourPartner} />
         </Section>
         <Section data-aos="fade-in" data-aos-delay="800" data-aos-easing="linear" data-aos-duration="1000" onScroll={onScroll} containerClass="" className="py-10 pb-0 bg-white">
            <ClientsCarousel items={data.ourPartner} />
         </Section>
         <Precision />
         {/* <Section onScroll={onScroll}>
         </Section> */}
         <Section data-aos="fade-in" data-aos-delay="800" data-aos-easing="linear" data-aos-duration="1000" onScroll={onScroll} className="bg-white py-10 pb-16 _" fromBg="white" toBg="white">
            <WeGotCovered news={news} />
         </Section>
      </StyledHome>
   )
}

export async function getStaticProps(context) {
   let news = getActiveNews()
   const settings = getSettings()

   return {
     props: {
      news: JSON.parse(JSON.stringify(news)),
      settings: JSON.parse(JSON.stringify(settings))
     }, // will be passed to the page component as props
   }
}


export default Home;
