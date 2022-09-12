import React from "react";
// import AreYouClinician from "../AreYouClinician";
import Image from "next/image";

import WhyThisTechnology from "../WhyThisTechnology";
import AppTemplate from "../components/templates/AppTemplate";
import ClinicianImg from "../are-you-clinician.png";
import testiImg1 from '../assets/testimonials/savitri.png'
import ResearchPapersImg from "../assets/research-papers.png";

import EasyAccessImg from "../assets/easy-access.png";
import EasyToReadImg from "../assets/easy-to-read.png";
import SampleCollectionImg from "../assets/sample-collection.png";
import DigitalAgeImg from "../assets/digital-age.png";
import HeroBanner from "../components/HeroBanner";
import { KnowMoreButton } from "../components/buttons";

const researchPapers = [
   {
      title: `Highlights on the Application of Genomics and bioinformatics in the fight against infectious diseases - chellaneges and opportunities in africa`,
      excerpt: `Saikoi Y Bah Collins Misita Moranga`
   },
   {
      title: `Highlights on the Application of Genomics and bioinformatics in the fight against infectious diseases - chellaneges and opportunities in africa`,
      excerpt: `Saikoi Y Bah Collins Misita Moranga`
   },
   {
      title: `Highlights on the Application of Genomics and bioinformatics in the fight against infectious diseases - chellaneges and opportunities in africa`,
      excerpt: `Saikoi Y Bah Collins Misita Moranga`
   },
]


function ResearchPapers() {
   return (
      <section
         className="py-10 bg-blue-100"
      >
         <div className="container px-3 md:px-0 mx-auto">
            <h3 className="text-5xl font-bold text-black mb-4">
               Research papers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-10">
               {researchPapers?.map(((rp, rpIndex) => (
               <div className="grid__col" key={`rp_${rpIndex}`}>
                  <figure className="flex items-center gap-3">
                     <div className="w-5/12">
                        <img src="" alt={'Research paper'} className="bg-gray-100" />
                     </div>
                     <figcaption>
                        <p>
                           <a href="" className="text-md text-blue-600">{rp.title}</a>
                        </p>
                        <p className="text-sm">
                           {rp.excerpt}
                        </p>
                     </figcaption>
                  </figure>
               </div>
               )))}
            </div>
         </div>
      </section>
   );
}


export function WhyChooseHaystack() {
   return (
      <>
         <section
            className="py-10"
         >
            <div className="container mx-auto px-3 md:px-0">
               <p className="text-5xl font-bold mb-6 text-black">
                  Why Choose Haystack
               </p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-end my-10">
                  <div className="flex flex-col gap-3">
                     <div className="mx-auto why-choose-haystack-img-1">
                        <div className="w-4/12 mx-auto">
                           <Image src={EasyAccessImg} className="w-full" />
                        </div>
                     </div>
                     <p className="w-50 mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize">
                        Easy Access 200+ Partner Labs
                     </p>
                  </div>
                  <div className="flex flex-col gap-3">
                     <div className="mx-auto why-choose-haystack-img-2">
                        <div className="w-4/12 mx-auto">
                           <Image src={SampleCollectionImg} className="w-full" />
                        </div>
                     </div>
                     <p className="w-50 mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize">
                        No change in sample collection
                     </p>
                  </div>
                  <div className="flex flex-col gap-3">
                     <div className="mx-auto why-choose-haystack-img-3">
                        <div className="w-4/12 mx-auto">
                           <Image src={EasyToReadImg} className="w-full" />
                        </div>
                     </div>
                     <p className="w-50 mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize">
                        Easy to read reports{" "}
                     </p>
                  </div>
                  <div className="flex flex-col gap-3">
                     <div className="mx-auto why-choose-haystack-img-4">
                        <div className="w-4/12 mx-auto">
                           <Image src={DigitalAgeImg} className="w-full" />
                        </div>
                     </div>
                     <p className="w-50 mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize">
                        Digital Age Ready
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export const FeatureCard = ({ title, image, url }) => {
   return (
      <figure className="bg-white p-4 rounded-sm text-center flex flex-col gap-3">
         <div>
            <p className="text-black font-medium text-sm">
               {title}
            </p>
         </div>
         <div>
            <img src={image} alt="image" className="w-full aspect-square" />
         </div>
         <div className="text-center">
            <KnowMoreButton className="text-green-600 flex items-center gap-3 justify-center align-self-center mx-auto" />
         </div>
      </figure>
   )
}

export const FeatureCards = () => {
   return (
      <section className="py-10 bg-blue-100">
         <div className="container mx-auto px-3 md:px-0">
            <h3 className="text-5xl font-bold mb-5 text-black">
               WHY THIS TECHNOLOGY FOR YOU?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10">
               <div className="grid__col">
                  <FeatureCard
                     title={`First Time Right Diagnostics`}
                  />
               </div>
               <div className="grid__col">
                  <FeatureCard
                     title={`Accessible & Afforable`}
                  />
               </div>
               <div className="grid__col">
                  <FeatureCard
                     title={`Cutting Edge Technology`}
                  />
               </div>
               <div className="grid__col">
                  <FeatureCard
                     title={`Makes Current Diagnostics Faster`}
                  />
               </div>
            </div>
         </div>
      </section>
   )
}

export default function Clinician() {
   return (
      <AppTemplate>
         <HeroBanner
            title={`are you clinician?`}
            image={ClinicianImg}
            description={`Bringing genomics technology to patient care`}
            content={`Stay at the top with cutting edge technology`}
            primaryAction={{  }}
            secondaryAction={{  }}
         >
            <div className="bg-white container px-3 md:px-0 mb-8 ml-auto">
               <div className="flex items-center gap-4 p-8">
                  <Image src={testiImg1} alt="" className="w-8 h-8 rounded-full" width={120} height={120} />
                  <div>
                     <p className="mb-3 text-bold">Dr. Savitri</p>
                     <p>
                     How genomics technology helped her save patients from excessive use of antibiotices. He now recommends Universal ID test to all his patients.
                     </p>
                  </div>
               </div>
            </div>
            <div className="bg-white container px-3 md:px-0 mb-8 mr-auto">
               <div className="flex flex-row-reverse justify-end text-right items-center gap-4 p-8">
                  <Image src={testiImg1} alt="" className="w-8 h-8 rounded-full" width={120} height={120} />
                  <div>
                     <p className="mb-3 text-bold">Dr. Savitri</p>
                     <p>
                     How genomics technology helped her save patients from excessive use of antibiotices. He now recommends Universal ID test to all his patients.
                     </p>
                  </div>
               </div>
            </div>
         </HeroBanner>
         <ResearchPapers />
         <WhyChooseHaystack />
         <FeatureCards />
      </AppTemplate>
   );
}
