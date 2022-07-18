import React from "react";
import "./jquerry";
import "./src";
import PreAnimationOnLoad from "./PreAnimationOnLoad";
import NavbarBgGrey from "./NavbarBgGrey";
import Footer from "./Footer";

const Template = ({ children }) => {
    return (
        <>
            <div className="content">
                <PreAnimationOnLoad />
                <NavbarBgGrey />
                {children}
                <Footer />
                <div className="cursor"></div>
            </div>
        </>
    );
}

export default Template;