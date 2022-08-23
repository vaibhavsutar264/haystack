// import "./app.css";
import React from "react";
// import article from "./box-2.png";

function WeGotCovered() {
   return (
      <section className="we-got-covered">
         <h2 className="we-got-covered-heading">
            We got <br />
            Covered
         </h2>
         <div className="we-got-covered-inner-container">
            <div>
               {/* <img src={article} alt="" /> */}
               <div className="we-got-covered-img"></div>
               <h3>Haystack Analytics and faster genomics diagnostics</h3>
               <a href="#read-more">
                  <strong>Read more &gt;&gt;</strong>
               </a>
            </div>
            <div>
               <div className="we-got-covered-img"></div>
               <h3>Haystack Analytics and faster genomics diagnostics</h3>
               <a href="#read-more">
                  <strong>Read more &gt;&gt;</strong>
               </a>
            </div>
            <div>
               <div className="we-got-covered-img"></div>
               <h3>Haystack Analytics and faster genomics diagnostics</h3>
               <a href="#read-more">
                  <strong>Read more &gt;&gt;</strong>
               </a>
            </div>
            <div>
               <div className="we-got-covered-img"></div>
               <h3>Haystack Analytics and faster genomics diagnostics</h3>
               <a href="#read-more">
                  <strong>Read more &gt;&gt;</strong>
               </a>
            </div>
         </div>
      </section>
   );
}

export default WeGotCovered;
