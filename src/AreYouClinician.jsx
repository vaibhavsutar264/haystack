import React from "react";
import { ClinicianImg } from "./are-you-clinician.png";

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
                            <img src={ClinicianImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="are-you-clinician-testimonial py-xl-5 py-lg-5 py-md-5">
                    <div className="container w-75 d-flex p-lg-3 p-md-3 p-sm-2 mb-lg-5 mb-md-4 mb-sm-3 are-you-clinician-testimonial-1">
                        <div className="mt-sm-2 mt-xs-3 are-you-clinician-testimonial-img-1"></div>
                        <div className="w-75 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-3 mt-xs-4 ms-xl-4 ms-lg-4 ms-md-3 ms-sm-3 ms-xs-3">
                            <p className="h5 font-weight-normal are-you-clinician-testimonial-1-heading">
                                Dr. Savitri
                            </p>
                            <p className="are-you-clinician-testimonial-1-para font-weight-normal">
                                How genomics technology helped her save patients from excessive use of antibiotices. He now recommends Universal ID test to all his patients.
                            </p>
                        </div>
                    </div>
                    <div className="container w-75 d-flex justify-content-end p-lg-3 p-md-3 p-sm-2 are-you-clinician-testimonial-2">
                        <div className="w-75 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-3 mt-xs-4 me-xl-4 me-lg-4 me-md-3 me-sm-3 me-xs-3">
                            <p className="h5 font-weight-normal are-you-clinician-testimonial-2-heading">
                                Karan Mathur
                            </p>
                            <p className="font-weight-normal are-you-clinician-testimonial-2-para">
                                From diagnostic nightmare to miracle solution, how Univesal ID Test changed his life. He not only identified the problem on time, but also found the perfect medication.
                            </p>
                        </div>
                        <div className="mt-lg-4 mt-md-4 are-you-clinician-testimonial-img-2">
                            {/* <img src={ clinician } /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AreYouClinician;