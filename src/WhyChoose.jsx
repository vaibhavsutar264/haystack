import Image from "next/image";
import React from "react";
import EasyToReadImg from "./assets/easy-to-read.png";
import SampleCollectionImg from "./assets/sample-collection.png";
import DigitalAgeImg from "./assets/digital-age.png";

function WhyChoose() {
   return (
      <>
         <section
            className="py-10"
            style={{ background: `#f2c94c33` }}
         >
            <div className="container mx-auto px-3 md:px-0 ">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                     <div className="mx-auto why-choose-haystack-img-1">
                        <div className="w-6/12 mx-auto">
                           <Image src={SampleCollectionImg} />
                        </div>
                     </div>
                     <p className="mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize why-choose-us-text">
                        One test for complete genome analysis of mycobaterium TB
                     </p>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                     <div className="mx-auto why-choose-haystack-img-2">
                        <div className="w-6/12 mx-auto">
                           <Image src={SampleCollectionImg} />
                        </div>
                     </div>
                     <p className="mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize why-choose-us-text">
                        No change in sample collection
                     </p>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                     <div className="mx-auto mt-4 why-choose-haystack-img-3">
                        <div className="w-6/12 mx-auto">
                           <Image src={EasyToReadImg} />
                        </div>
                     </div>
                     <p className="mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize why-choose-us-text">
                        Easy to read reports{" "}
                     </p>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                     <div className="mx-auto why-choose-haystack-img-4">
                        <div className="w-6/12 mx-auto">
                           <Image src={DigitalAgeImg} />
                        </div>
                     </div>
                     <p className="mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize why-choose-us-text">
                        Digital Age Ready
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default WhyChoose;
