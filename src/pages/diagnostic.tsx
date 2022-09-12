import React from "react";
import ResearchPapers from "../ResearchPapers";
import WhyThisTechnology from "../WhyThisTechnology";
import Image from "next/image";
import DiagnosticImg1 from "../assets/are-you-diagnostic-img.png";
import AutomatedBioinformaticsImg from "../assets/automated-bioinformatics-img.png";
import AppTemplate from "../components/templates/AppTemplate";
import { FeatureCards, WhyChooseHaystack } from "./clinician";
import HeroBanner from "../components/HeroBanner";

function Diagnostic() {
   return (
      <AppTemplate>
         <HeroBanner
            title={`are you diagnostic lab or a hospital?`}
            image={DiagnosticImg1}
            description={`Be Ahead Of Competition With Revolutionary Technology`}
            content={`Easy To Onboard Tech`}
         >
            <div className="container mx-auto px-3 md:px-10 mb-10 bg-blue-300 py-10">
               <div className="grid grid-cols-2 gap-6 items-center">
                  <div className="grid__col">
                     <Image src={AutomatedBioinformaticsImg} />
                  </div>
                  <div className="grid__col text-white">
                     <p className="text-2xl font-medium mb-3 ">
                        Automated Bioinformatics Platform
                     </p>
                     <p className="mb-3 text-lg">
                        Localized Report with software access
                     </p>
                     <ul className="marker-list list-disc ml-5">
                        <li>No Upskilling</li>
                        <li>No Man Power Addition</li>
                        <li>No system upgrades required</li>
                     </ul>
                     <div className="bg-white p-4 px-8 rounded-xl flex justify-between items-center gap-4 mt-4">
                        <p className="text-black">
                           Book a Detailed Call With Our Expert Today
                        </p>
                        <button className="text-white border-2 border-black uppercase bg-green-600 px-6 py-3 rounded-full">
                           Contact us
                        </button>
                     </div>

                  </div>
               </div>
            </div>
         </HeroBanner>
         <WhyChooseHaystack />
         <FeatureCards />
      </AppTemplate>
   );
}

export default Diagnostic;
