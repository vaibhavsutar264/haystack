import React from "react";
// import { ClinicianImg } from "./are-you-clinician.png";

function AreYouClinician() {
    return (
        <>
            <section name="are-you-clinician">
                <div className="are-you-clinician d-flex justify-content-center">
                    <div className="container row">
                        <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center">
                            <p className="h2 font-weight-normal text-uppercase are-you-clinician-heading">
                                are you clinician?
                            </p>
                            <p className="h2 font-weight-normal text-capitalize are-you-clinician-sub-heading">
                                Bringing genomics technology to patient care
                            </p>
                            <p className="h5 font-weight-normal text-capitalize w-lg-75 w-md-50 are-you-clinician-para">
                                Stay at the top with cutting edge technology
                            </p>
                            <div className="mt-lg-3 mt-md-2 mt-sm-2 mt-xs-2">
                                <button className="font-weight-normal text-uppercase me-lg-3 are-you-clinician-btn-left">Book a call</button>
                                <button className="font-weight-normal text-uppercase are-you-clinician-btn-left are-you-clinician-btn-right">Know more</button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 are-you-clinician-img">
                            {/* <img src={ClinicianImg} alt="" /> */}
                        </div>
                    </div>
                </div>
                <div className="are-you-clinician-testimonial py-xl-5 py-lg-5 py-md-5">
                    <div className="container w-75 d-flex align-items-center p-lg-3 p-md-3 p-sm-2 ps-xl-5 ps-lg-5 ps-md-5 ps-sm-5 py-xl-4 py-lg-4 py-md-4 py-sm-4 mb-lg-5 mb-md-4 mb-sm-3 are-you-clinician-testimonial-1">
                        <div className="are-you-clinician-testimonial-img-1"></div>
                        <div className="w-75 ms-3">
                            <p className="h5 font-weight-normal are-you-clinician-testimonial-1-heading">
                                Dr. Savitri
                            </p>
                            <p className="mb-0 are-you-clinician-testimonial-1-para font-weight-normal">
                                How genomics technology helped her save patients from excessive use of antibiotices. He now recommends Universal ID test to all his patients.
                            </p>
                        </div>
                    </div>
                    <div className="container w-75 d-flex justify-content-end align-items-center p-lg-3 p-md-3 p-sm-2 pe-xl-5 pe-lg-5 pe-md-5 pe-sm-5 py-xl-4 py-lg-4 py-md-4 py-sm-4 are-you-clinician-testimonial-2">
                        <div className="w-75 me-3">
                            <p className="h5 font-weight-normal are-you-clinician-testimonial-2-heading">
                                Karan Mathur
                            </p>
                            <p className="mb-0 font-weight-normal are-you-clinician-testimonial-2-para">
                                From diagnostic nightmare to miracle solution, how Univesal ID Test changed his life. He not only identified the problem on time, but also found the perfect medication.
                            </p>
                        </div>
                        <div className="align-items-center are-you-clinician-testimonial-img-2">
                            {/* <img src={ clinician } /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AreYouClinician;