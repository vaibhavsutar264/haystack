import React from "react";
import "./jquerry";
import "./src";
import PreAnimationOnLoad from "./PreAnimationOnLoad";
import ProductNavbar from "./ProductNavbar";
import Footer from "./Footer";

const Template = ({ children }) => {
   return (
      <>
         <div className="content">
            <PreAnimationOnLoad />
            <ProductNavbar />
            {children}
            <Footer />
            <div className="cursor"></div>
         </div>
      </>
   );
};

export default Template;
