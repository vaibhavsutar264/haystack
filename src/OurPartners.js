import React, { useEffect } from "react";
import OurPartner from "./OurPartner";

import Script from "next/script";
// import "../styles/Offers.css"

const OurPartners = ({ ourPartner }) => {
   return (
      <>
         <section className="our-partners">
            <div className="container our-partners-main pt-5 mb-5">
               <h1 className="our-partner-heading">OUR PARTNERS </h1>
               <h4 className="font-weight-normal our-partners-sub-heading">
                  Make precision med a reality for millions
               </h4>
               <div className="d-flex pt-2 justify-content-end">
                  <div className="px-lg-5 px-md-4 px-sm-4 px-3 our-partners-tabs">
                     <p className="font-weight-normal our-partners-value m-0">
                        100+
                     </p>
                     <p className="font-weight-normal our-partners-text">
                        Cities
                     </p>
                  </div>
                  <div className="px-lg-5 px-md-4 px-sm-4 px-3 our-partners-tabs">
                     <p className="font-weight-normal our-partners-value m-0">
                        500+
                     </p>
                     <p className="font-weight-normal our-partners-text">
                        Hospitals
                     </p>
                  </div>
                  <div className="ps-lg-5 ps-md-4 ps-sm-4 ps-3">
                     <p className="font-weight-normal our-partners-value m-0">
                        100+
                     </p>
                     <p className="font-weight-normal our-partners-text">
                        Doctors
                     </p>
                  </div>
               </div>
            </div>
            <div className="carousel" data-ride="true">
               <div className="carousel-item"></div>
            </div>
            <div className="page-container">
               <div className="page-back">
                  <div id="example">
                     <div className="ourPartner mousemove-img our-partners-images">
                        {ourPartner.map((item, index) => (
                           <OurPartner
                              key={item.image}
                              index={index}
                              src={item.image}
                              link={item.url}
                           />
                        ))}
                     </div>
                  </div>
               </div>
               <Script src="jquerry.js"></Script>
               <Script src="src.js"></Script>
            </div>
         </section>
      </>
   );
};

export default OurPartners;
