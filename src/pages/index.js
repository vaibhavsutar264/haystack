import "../jquerry";
import "../src";

// Bootstrap

// import "../Footer";
import data from "../data/data.json";
import PreAnimationOnLoad from "../PreAnimationOnLoad";
// import NavbarContent from "../NavbarContent";
import Navbar from "../Navbar";
import OurPartners from "../OurPartners";
import TextVideo from "../TextVideo";
// import Admin2 from "./Admin2";
// import About from "./About";
import Precision from "../Precision";
import Upgrade from "../Upgrade";
import WeGotCovered from "../WeGotCovered";
import Footer from "../Footer";
import VideoRemakeByPratikSir2 from "../VideoRemakeByPratikSir2";
import VideoRemakeByPratikSir from "../VideoRemakeByPratikSir";
import OurPartnersMain from "../OurPartnersMain";
import BgTransitionSection from "../components/BgTransitionSection";
import AppTemplate from "../components/templates/AppTemplate";
import HambergerMenuWithScriptTag from "../HambergerMenuWithScriptTag";
import { getActivePosts, getPostFile, getPostFiles } from "../utils/posts";
import { getSettings } from "../utils/settings";
import { getActiveNews } from "../utils/news";
import styled from "@emotion/styled";
import heroBg from '../assets/haystack-body-bg.png'
import '../styles/index.module.css'
const StyledHome = styled(AppTemplate)`
   .hero-section {
      main {
         background-size: cover;
         background-repeat: no-repeat;
         background-position: center right;

         background-image: url(${heroBg.src});
      }
   }
`

function Home({ Component, pageProps, news, settings }) {
   if (typeof document !== "undefined") {
      return (
         <>
         <StyledHome settings={settings}>
            <div className="section hero-section" >
               <TextVideo />
            </div>
            <BgTransitionSection fromBg="white" toBg="white">
               <VideoRemakeByPratikSir />
            </BgTransitionSection>
            <BgTransitionSection fromBg="white" toBg="black">
               <Upgrade />
            </BgTransitionSection>
            <BgTransitionSection fromBg="black" toBg="#3570d3" padding={0}>
               <OurPartners ourPartner={data.ourPartner} />
            </BgTransitionSection>
            <div className="section">
               <Precision />
            </div>
            <div className="section bg-white" data-bg="#fff">
               <WeGotCovered news={news} />
            </div>
         </StyledHome>
         </>
      );
   }
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
