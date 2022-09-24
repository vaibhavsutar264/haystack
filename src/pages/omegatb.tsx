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

function OmegaTB({ navbarMenu }) {
   return (
      <AppTemplate
         renderMenu={() => (
            <div className="items-center gap-6 py-3 mt-3 hidden md:flex">
               <Link href="/universal" >
                  <a className="font-bold text-gray-600">Universal ID</a>
               </Link>
               <Link href="/omegatb" >
                  <a className="font-bold text-green-600">Omega TB</a>
               </Link>
            </div>
         )}>
         <HeroBanner
            bgColor="white"
            title={`OMEGA TB :`}
            description={`Doing Our Part For TB Free World`}
            image={OmegaTbImg}
         />
         <WhyChoose />
         <OmegaTbTestWorks />
      </AppTemplate>
   );
}

OmegaTB.defaultProps = {
   navbarMenu: menus.productsHeader,
}
export default OmegaTB;
