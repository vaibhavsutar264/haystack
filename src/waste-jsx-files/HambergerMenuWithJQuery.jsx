import React, { componentDidMount } from "react";
import $ from "jquery";
// window.jQuery = $;

const HambergerMenuWithJQuery = () => {
   if (process.browser) {
      let abc = $(".menu_container");

      $("DOMContentLoaded", function () {
         var navToggle = $("#bgtoggle");
         var navMenu = $("#menu_container");
         navToggle.click,
            function (e) {
               //   navMenu.classList.toggle("open");
               navMenu.css("opacity", "1");
               //   console.log(abc);
            };
      });
      //   console.log(bgtoggle);
   }

   return (
      <div>
         <div onload="Animation:none">
            <input onclick="no" type="checkbox" id="bgtoggle" />
            <div class="frame">
               <label for="bgtoggle" class="menu"></label>
               <div class="menu_container" id="menu_container">
                  <h1>hystack content will be shown here</h1>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HambergerMenuWithJQuery;
