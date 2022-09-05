import React from "react";
import "./jquerry";
import "./src";
import PreAnimationOnLoad from "./PreAnimationOnLoad";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "@emotion/styled";

const Styled = styled.div`
   .img-responsive {
      max-width: 100%;
   }
`
const Template = ({ children }) => {
   return (
      <>
         <Styled className="content">
            <PreAnimationOnLoad />
            <Navbar />
            {children}
            <Footer />
            <div className="cursor"></div>
         </Styled>
      </>
   );
};

export default Template;
