import Footer from "../../Footer";
import HambergerMenuWithScriptTag from "../../HambergerMenuWithScriptTag";
import Navbar from "../../Navbar";
import PreAnimationOnLoad from "../../PreAnimationOnLoad";

function AppTemplate({ children, pageProps }) {
   return (
      <div className="AppTemplate">
         {/* <HambergerMenuWithJQuery/> */}
         <PreAnimationOnLoad />
         <Navbar />
         {children}
         <div className="bg-white">
            <Footer />
         </div>
      </div>
   );
}

export default AppTemplate;
