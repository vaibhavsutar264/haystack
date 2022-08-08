import React from "react";
import Image from "next/image";
import ClinicianImg from "./are-you-clinician.png";

function AreYouClinician() {
    return (
        <>
            <section name="are-you-clinician" className="section-margin section-padding">
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
                            <div className="mt-lg-3 are-you-clinician-btn">
                                <button className="font-weight-normal text-uppercase me-lg-3 are-you-clinician-btn-left">Book a call</button>
                                <button className="font-weight-normal ms-1 text-uppercase are-you-clinician-btn-left are-you-clinician-btn-right">Know more</button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 py-5 p-4 are-you-clinician-img">
                            <Image src={ClinicianImg} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AreYouClinician;