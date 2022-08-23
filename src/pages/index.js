import "../jquerry";
import "../src";
// import "../Footer";
import data from "../data/data.json";
import PreAnimationOnLoad from "../PreAnimationOnLoad";
// import HambergerMenuWithScriptTag from "../HambergerMenuWithScriptTag";
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


function Home({ Component, pageProps }) {
   if (typeof document !== "undefined") {
      return (
         <>
            {/* <HambergerMenuWithJQuery/> */}
            <PreAnimationOnLoad />
            <Navbar />
            <div className="section" >
               <TextVideo />
            </div>
            {/* <div className="section" >
            <Admin2 />
         </div> */}
            {/* <NavbarContent/> */}
            {/* <div className="section video-visibility-hidden" >
               <VideoRemakeByPratikSir2 />
            </div> */}
            {/* <div className="section video-visibility" > */}
            <div className="section" >
               <VideoRemakeByPratikSir />
            </div>
            <BgTransitionSection fromBg="white" toBg="black">
               <Upgrade />
            </BgTransitionSection>

            <BgTransitionSection fromBg="black" toBg="#3570d3" padding={0}>
               <OurPartners ourPartner={data.ourPartner} />
            </BgTransitionSection>
            {/* <MouseMoveScroll/> */}

            <div className="section">
               <Precision />
            </div>
            <div className="section bg-white" data-bg="#fff">
               <WeGotCovered />
            </div>
            {/* <Video/> */}

            {/* <VideoScrollTrial1/> */}
            <div className="bg-white">
               <Footer />
            </div>
         </>
      );
   }
}

export default Home;
