// import "./app.css";
import React from "react";
// import image from "./box.png";

function Upgrade() {
   return (
      <section name="upgrade">
         <div className="upgrade-main">
            <div>
               <h2 className="upgrade-heading">
                  Upgrade your lab
                  <br />
                  without hassle
               </h2>
               <p className="upgrade-para">Some detail about the test</p>
               <p className="upgrade-para">Some detail about the test</p>
               <button className="btn-test">View UID Test</button>
            </div>
            <div className="upgrade-img">
               {/* <img  src={image} alt="" /> */}
            </div>
         </div>
      </section>
   );
}

export default Upgrade;
