import Footer from "../../Footer";
import HambergerMenuWithScriptTag from "../../HambergerMenuWithScriptTag";
import PreAnimationOnLoad from "../../PreAnimationOnLoad";


function AppTemplate({ children, pageProps }) {
   return (
      <>
         {/* <HambergerMenuWithJQuery/> */}
         <PreAnimationOnLoad   />

         <HambergerMenuWithScriptTag />

         {children}
         {/* <Video/> */}

         {/* <VideoScrollTrial1/> */}

         <hr />
         <Footer />
      </>
   );
}

export default AppTemplate;
