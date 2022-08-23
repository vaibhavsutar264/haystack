import Image from "next/image";
import React from "react";
import SavitriImg from "./savitri.png";
import KaranImg from "./karan-mathur.png";

function AreYouClinicianTestimonials() {
   return (
      <>
         <section
            name="are-you-clinician-testimonial"
            className="section-padding section-margin"
         >
            <div className="are-you-clinician-testimonial">
               <div className="container d-flex align-items-center p-lg-3 p-md-3 p-sm-2 p-3 ps-xl-4 ps-lg-4 ps-md-3 ps-sm-3 ps-3 py-xl-4 py-lg-4 py-md-4 py-sm-4 mb-xl-5 mb-lg-5 mb-md-4 mb-sm-3 mb-3 are-you-clinician-testimonial-1">
                  <div className="are-you-clinician-testimonial-img-1">
                     <Image src={SavitriImg} />
                  </div>
                  <div className="w-75 ms-3">
                     <p className="h5 font-weight-normal are-you-clinician-testimonial-1-heading">
                        Dr. Savitri
                     </p>
                     <p className="mb-0 are-you-clinician-testimonial-1-para font-weight-normal">
                        How genomics technology helped her save patients from
                        excessive use of antibiotices. He now recommends
                        Universal ID test to all his patients.
                     </p>
                  </div>
               </div>
               <div className="container d-flex justify-content-end align-items-center p-lg-3 p-md-3 p-sm-2 p-3 pe-xl-4 pe-lg-4 pe-md-3 pe-sm-3 pe-3 py-xl-4 py-lg-4 py-md-4 py-sm-4 are-you-clinician-testimonial-2">
                  <div className="w-75 me-3">
                     <p className="h5 font-weight-normal are-you-clinician-testimonial-2-heading">
                        Karan Mathur
                     </p>
                     <p className="mb-0 font-weight-normal are-you-clinician-testimonial-2-para">
                        From diagnostic nightmare to miracle solution, how
                        Univesal ID Test changed his life. He not only
                        identified the problem on time, but also found the
                        perfect medication.
                     </p>
                  </div>
                  <div className="align-items-center are-you-clinician-testimonial-img-2">
                     <Image src={KaranImg} />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default AreYouClinicianTestimonials;
