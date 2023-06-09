import styled from "@emotion/styled";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useEffect } from "react";
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import settings from '../../json/settings.json'
const StyledTemplate = styled.div`
   margin: 0;
   padding: 0;
   border: none;
   box-sizing: border-box;

   padding: 0px;
   margin: 0px;
`

function AppTemplate({ children, pageProps = {}, bodyClassName = '', renderMenu, ...props  }) {

   return (
      <StyledTemplate {...props} className={`body__content ${bodyClassName}`}>
         <Navbar renderMenu={renderMenu} />
         {children}
         <Footer settings={settings} />
      </StyledTemplate>
   );
}

export default AppTemplate;
