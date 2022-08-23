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

function Home({ Component, pageProps }) {
   if (typeof document !== "undefined") {
      return (
         <>
            {/* <HambergerMenuWithJQuery/> */}
            <PreAnimationOnLoad />

            {/* <HambergerMenuWithScriptTag /> */}

            <Navbar />
            <div className="section" data-bg="#fff">
               <TextVideo />
            </div>
            {/* <div className="section" data-bg="#fff">
            <Admin2 />
         </div> */}
            {/* <NavbarContent/> */}
            {/* <div className="section video-visibility-hidden" data-bg="#fff">
               <VideoRemakeByPratikSir2 />
            </div> */}
            {/* <div className="section video-visibility" data-bg="#fff"> */}
            <div className="section" data-bg="#fff">
               <VideoRemakeByPratikSir />
            </div>
            {/* <VideoScrollTrial/> */}
            {/* <ScrollContainer>
        <ScrollPage>
          <Animator animation={ZoomOutScrollOut}> */}
            <div className="section" data-bg="rgb(20, 20, 20)">
               <Upgrade />
            </div>
            {/* </Animator>
      </ScrollPage>
      </ScrollContainer> */}

            {/* <div className="section" data-bg="rgb(36, 101, 237)">
            <OurPartnersMain />
         </div> */}

            <div className="section" data-bg="rgb(36, 101, 237)">
               <OurPartners ourPartner={data.ourPartner} />
            </div>
            {/* <MouseMoveScroll/> */}

            <div className="section">
               <Precision />
            </div>
            <div className="section" data-bg="#fff">
               <WeGotCovered />
            </div>
            {/* <Video/> */}

            {/* <VideoScrollTrial1/> */}
            <Footer />
         </>
      );
   }
}

export default Home;
