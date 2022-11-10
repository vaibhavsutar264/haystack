import React from "react";
import ProductTemplate from "../ProductTemplate";
import OmegaTb from "../OmegaTb";
import WhyChoose from "../WhyChoose";
import OmegaTbTestWorks from "../OmegaTbTestWorks";
import AppTemplate from "../components/templates/AppTemplate";
import HeroBanner from "../components/HeroBanner";
import OmegaTbImg from "../omega-tb.png";
import Link from "next/link";
import menus from '../json/menus.json'
import {HowWorkGrid} from "./universal";

function OmegaTB({ navbarMenu }) {
   return (
      <AppTemplate
         renderMenu={(rprops = {}) => (
         <div className={`items-center gap-6 py-3 mt-3 flex md:mr-16 ${rprops.className}`} >
            {rprops.menuItems?.map((mi, miIndex) => (
            <Link key={`pmin_${miIndex}`} href={mi.url} >
               <a className={`font-bold ${mi.url.includes('omega') ? 'text-green-600': 'text-gray-600'}`}>
                  {mi.title}
               </a>

            </Link>
            ))}
         </div>
         )}>
         <HeroBanner
            bgColor="white"
            title={`Universal Drug Resistance Test for TB:`}
            image={OmegaTbImg}
            renderDescription={() => (
               <>
               <p className="mb-6 text-xl md:text-2xl font-bold text-black ">
                  Doing Our Part For TB Free World
               </p>
               <div className="bg-blue-100 p-6">
                  Single test for simultaneous evaluation of all resistance markers as well as differentiate between mixed infection, relapse and reinfection.
               </div>
               </>
               )}
         />
         <WhyChoose />
         <HowWorkGrid />
      </AppTemplate>
   );
}

OmegaTB.defaultProps = {
   navbarMenu: menus.productsHeader,
}

export default OmegaTB;
