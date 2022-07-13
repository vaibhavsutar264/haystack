import React from "react";

function AreYouClinician() {
    return (
        <>
            <section name="are-you-clinician">
                <div className="are-you-clinician d-flex justify-content-center">
                    <div className="container row py-lg-5 my-lg-5">
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
                        <div className="col-lg-6 col-md-6 are-you-clinician-img"></div>
                    </div>
                    <div className="are-you-clinician-img-bg"></div>
                </div>
            </section>
        </>
    );
}

export default AreYouClinician;