import "../jquerry";
import "../src";

// Bootstrap

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
import AppTemplate from "../components/templates/AppTemplate";


function Home({ Component, pageProps }) {
   if (typeof document !== "undefined") {
      return (
         <>
         <AppTemplate>
            <div className="section" >
               <TextVideo />
            </div>
            <div className="section" >
               <VideoRemakeByPratikSir />
            </div>
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
               <WeGotCovered />
            </div>
         </AppTemplate>
         </>
      );
   }
}

export default Home;
