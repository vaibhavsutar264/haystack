import React from "react";
import Image from "next/image";
import ProductTemplate from "../ProductTemplate";
import PowerOfOneTest from "../PowerOfOneTest";
import UniversalIdTestWorks from "../UniversalIdTestWorks";
import Benefits from "../Benefits";
import AppTemplate from "../components/templates/AppTemplate";
import HeroBanner from "../components/HeroBanner";
import PowerOfOneTestImg from "../power-of-one-test.png";
import UniversalIdTestWorksImg1 from "../assets/universal-id-test-works-img-1.png";
import UniversalIdTestWorksImg2 from "../assets/universal-id-test-works-img-2.png";
import UniversalIdTestWorksImg3 from "../assets/universal-id-test-works-img-3.png";
import UniversalIdTestWorksImg4 from "../assets/universal-id-test-works-img-4.png";
import BenefitsImg1 from "../assets/benefits-img-1.png";
import BenefitsImg2 from "../assets/benefits-img-2.png";
import BenefitsImg3 from "../assets/benefits-img-3.png";
import Link from "next/link";

export const HowWorkGrid = (props) => {
   return (
      <section className="section py-10">
         <div className="container px-3 md:px-0 mx-auto">
            <h3 className="text-4xl md:text-5xl text-black mb-8 font-bold ">
               How Does Universal ID Test Work?
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               <div className="grid__col">
                  <Image src={UniversalIdTestWorksImg1} />
               </div>
               <div className="grid__col">
                  <Image src={UniversalIdTestWorksImg2} />
               </div>
               <div className="grid__col">
                  <Image src={UniversalIdTestWorksImg3} />
               </div>
               <div className="grid__col">
                  <Image src={UniversalIdTestWorksImg4} />
               </div>
            </div>
         </div>
      </section>
   )
}

function UniversalId() {
   return (
      <AppTemplate
         renderMenu={(rprops = {}) => (
         <div className={`items-center gap-6 py-3 mt-3 flex md:mr-16 ${rprops.className}`} >
            {rprops.menuItems?.map((mi, miIndex) => (
            <Link key={`pmin_${miIndex}`} href={mi.url} >
               <a className={`font-bold ${mi.url.includes('universal') ? 'text-green-600': 'text-gray-600'}`}>
                  {mi.title}
               </a>
            </Link>
            ))}
         </div>
         )}
         >
         <HeroBanner
            bgColor="white"
            title={`Power Of One Test`}
            image={PowerOfOneTestImg}
            renderDescription={() => (
               <>
                  <p className="mb-6 text-xl md:text-2xl font-bold text-black ">
                     <big className="text-green-600">400+</big> Bacteria And Fungii In <br />
                     <big className="text-green-600">12</big> Hours On A Single Platform
                  </p>
                  <div className="bg-blue-100 p-6">
                     UID A life saving product, we’re proud of culture-free platform that can be directly used to analyse blood and works effectively on the rapid and portable ONT.
                  </div>
               </>
            )}
          />
         {/* <PowerOfOneTest /> */}
         <HowWorkGrid />
         <section className="section py-20 bg-blue-100">
            <div className="container px-3 md:px-0 mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-2 md:w-10/12 items-center gap-8">
                  <div className="grid__col">
                     <p className="text-base text-green-600">Why Choose Us?</p>
                     <h3 className="text-4xl md:text-5xl text-black mb-4 font-bold">
                     The Benefits
                     </h3>
                     <p>
                     UID A life saving product, we’re proud of culture-free platform that can be directly used to analyse blood and works effectively on the rapid and portable ONT.
                     </p>

                  </div>
                  <div className="grid__col">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="grid grid-cols-1 gap-3">
                           <div className="bg-white shadow-lg p-4 py-10">
                              <div className="benefits-img w-6/12 md:w-5/12">
                                 <Image src={BenefitsImg1} />
                              </div>
                              <p className="font-weight-normal benfits-para">
                                 Single Test comprehensive reporting low turnaround
                              </p>
                           </div>
                           <div className="bg-white shadow-lg p-4 py-10">
                              <div className="benefits-img w-6/12 md:w-5/12">
                                 <Image src={BenefitsImg2} />
                              </div>
                              <p className="font-weight-normal benfits-para">
                                 Easily set-up in any hospital molecular diagnostic lab
                                 set-up
                              </p>
                           </div>
                        </div>
                        <div className="grid grid-cols-1 gap-3 items-center">
                           <div className="bg-white shadow-lg p-4 py-10">
                              <div className="benefits-img w-6/12 md:w-5/12">
                                 <Image src={BenefitsImg3} />
                              </div>
                              <p className="font-weight-normal benfits-para">
                                 Identifies sepsis<br />causing pathogens<br /> and key AMR
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </section>
         {/* <UniversalIdTestWorks /> */}
         {/* <Benefits /> */}
      </AppTemplate>
   );
}

export default UniversalId;
