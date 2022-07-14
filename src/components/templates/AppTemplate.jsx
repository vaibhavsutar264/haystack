import PreAnimationOnLoad from "../PreAnimationOnLoad";
import HambergerMenuWithScriptTag from "../HambergerMenuWithScriptTag";


function AppTemplate({ children, pageProps }) {
   return (
      <>
         {/* <HambergerMenuWithJQuery/> */}
         <PreAnimationOnLoad />

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
