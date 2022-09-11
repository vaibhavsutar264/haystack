import styled from "@emotion/styled";
import Footer from "../Footer";
import HambergerMenuWithScriptTag from "../../HambergerMenuWithScriptTag";
import Navbar from "../Navbar";
import PreAnimationOnLoad from "../../PreAnimationOnLoad";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
const StyledTemplate = styled.div`
   margin: 0;
   padding: 0;
   border: none;
   box-sizing: border-box;

   padding: 0px;
   margin: 0px;
`

function AppTemplate({ children, pageProps = {}, bodyClassName = '', settings = {}, ...props }) {
   useEffect(() => {
      if (AOS) {
         AOS.init();
      }
   }, [])
   return (
      <StyledTemplate {...props} className={`body__content ${bodyClassName}`}>
         <PreAnimationOnLoad />
         <Navbar />
         {children}
         <div className="bg-white">
            <Footer settings={settings} />
         </div>
      </StyledTemplate>
   );
}

export default AppTemplate;
