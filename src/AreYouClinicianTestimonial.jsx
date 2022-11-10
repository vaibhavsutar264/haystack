import testimonials from './json/testimonials.json'

const isEven = (indexNumber) => indexNumber % 2 == 0

function AreYouClinicianTestimonial() {

   return (
      <>
         <section>
            <div className="are-you-clinician-testimonial">
               {testimonials.data?.map((testimonial, tsmI) => (
                  <div key={`test_${tsmI}`}
                     className={`container w-75 d-flex p-lg-3 p-md-3 p-sm-2 mb-lg-5 mb-md-4 mb-sm-3 are-you-clinician-testimonial-1 ${isEven(tsmI) ? 'justify-content-end': ''}`}>
                     <div className="mt-sm-2 mt-xs-3 are-you-clinician-testimonial-img-1"></div>
                     <div className="w-75 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-3 mt-xs-4 ms-xl-4 ms-lg-4 ms-md-3 ms-sm-3 ms-xs-3">
                        <p className="h5 font-weight-normal are-you-clinician-testimonial-1-heading">
                           {testimonial.author.name}
                        </p>
                        <p className="are-you-clinician-testimonial-1-para font-weight-normal">
                           {testimonial.message}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </section>
      </>
   );
}

export default AreYouClinicianTestimonial;
