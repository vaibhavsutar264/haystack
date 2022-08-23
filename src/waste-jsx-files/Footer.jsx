// import "./app.css";
import React from "react";

function Footer() {
   return (
      <section name="footer">
         <div className="footer-center">
            <div className="footer-inner-container">
               <div className="footer-row-1">
                  <p className="footer-para">hello@haystackanalytics.in</p>
                  <div className="social-icon">
                     {/* <a href="#facebook"><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a>
                            <a href="#instagram"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                        <a href="#linkedin"><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>
                        <a href="#youtube"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                        <a href="#twitter"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a> */}
                  </div>
               </div>
               <div className="footer-row-2">
                  <a href="#science-corner">SCIENCE CORNER</a>
                  <a href="#product">PRODUCT</a>
                  <a href="#about-us">ABOUT US</a>
                  <a href="#latest-news">LATEST NEWS</a>
                  <a href="#blog">BLOG</a>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Footer;
