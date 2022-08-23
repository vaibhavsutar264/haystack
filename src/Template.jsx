import React from "react";
import "./jquerry";
import "./src";
import PreAnimationOnLoad from "./PreAnimationOnLoad";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Template = ({ children }) => {
   return (
      <>
         <div className="content">
            <PreAnimationOnLoad />
            <Navbar />
            {children}
            <Footer />
            <div className="cursor"></div>
         </div>
      </>
   );
};

export default Template;
