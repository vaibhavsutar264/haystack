import "../jquerry";
import "../src";
import "../Footer";
import data from "../data/data.json";
import PreAnimationOnLoad from "../PreAnimationOnLoad";
import HambergerMenuWithScriptTag from "../HambergerMenuWithScriptTag";
// import NavbarContent from "../NavbarContent";
// import Navbar from "../src/components/Navbar";
import OurPartners from "../OurPartners";
import TextVideo from "../TextVideo";
// import About from "./About";
import Precision from "../Precision";
import Upgrade from "../Upgrade";
import WeGotCovered from "../WeGotCovered";
import Footer from "../Footer";
import VideoRemake from "../VideoRemake";

function Home({ Component, pageProps }) {
   return (
      <>
         {/* <HambergerMenuWithJQuery/> */}
         <PreAnimationOnLoad />

         <HambergerMenuWithScriptTag />

         {/* <Navbar/> */}
         <div className="section" data-bg="white">
            <TextVideo />
         </div>
         {/* <NavbarContent/> */}
         <div className="section" data-bg="white">
            <VideoRemake />
         </div>

         {/* <VideoScrollTrial/> */}
         {/* <ScrollContainer>
        <ScrollPage>
          <Animator animation={ZoomOutScrollOut}> */}
         <div className="section" data-bg="rgb(36, 101, 237)">
            <Upgrade />
         </div>
         {/* </Animator>
      </ScrollPage>
      </ScrollContainer> */}

         <div className="section" data-bg="rgb(20, 20, 20)">
            <OurPartners ourPartner={data.ourPartner} />
         </div>
         {/* <MouseMoveScroll/> */}

         <div className="section" data-bg="rgb(36, 101, 237)">
            <Precision />
         </div>
         <div className="section" data-bg="white">
            <WeGotCovered />
         </div>
         {/* <Video/> */}

         {/* <VideoScrollTrial1/> */}

         <hr />
         <Footer />
      </>
   );
}

export default Home;
