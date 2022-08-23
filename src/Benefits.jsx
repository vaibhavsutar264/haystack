import Image from "next/image";
import React from "react";
import BenefitsImg1 from "./benefits-img-1.png";
import BenefitsImg2 from "./benefits-img-2.png";
import BenefitsImg3 from "./benefits-img-3.png";

function Benefits() {
    return (
        <>
            <section name="universal-id-benefits" id="benefits" className="section-padding">
                <div className="container row justify-content-center align-items-center m-auto mb-xl-5 mb-lg-5 mb-md-5 mb-sm-4 py-xl-5 py-lg-5 py-md-5 py-sm-4">
                    <div className="col-xl-8 col-lg-8 col-md-8 d-flex flex-column justify-content-center align-items-center why-choose-us">
                        <div className="why-choose-us-content">
                            <p className="h5 font-weight-normal text-capitalize why-choose-us-sub-heading">
                                Why Choose Us?
                            </p>
                            <p className="h2 font-wieght-normal text-capitalize why-choose-us-heading">
                                The Benefits
                            </p>
                            <p className="font-weight-normal why-choose-us-para">
                                UID A life saving product, we’re proud of
                                culture-free platform that can be directly used to analyse blood and works effectively on the rapid and portable ONT.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 d-flex flex-column justify-content-center align-items-center dual-tabs">
                        <div className="tab mx-xl-2 mx-lg-2 mx-md-1 mx-sm-1 my-xl-2 my-lg-2 my-md-1 my-sm-1 p-2">
                            <div className="benefits-img">
                                <Image src={BenefitsImg1} />
                            </div>
                            <p className="font-weight-normal benfits-para">
                                Single Test comprehensive reporting low turnaround
                            </p>
                        </div>
                        <div className="tab mx-xl-2 mx-lg-2 mx-md-2 mx-sm-1 my-xl-2 my-lg-2 my-md-1 my-sm-1 p-2">
                            <div className="benefits-img">
                                <Image src={BenefitsImg2} />
                            </div>
                            <p className="font-weight-normal benfits-para">
                                Easily set-up in any hospital molecular diagnostic lab set-up
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 d-flex flex-column justify-content-center align-items-center single-tab">
                        <div className="tab mx-xl-2 mx-lg-2 mx-md-2 mx-sm-1 my-xl-2 my-lg-2 my-md-1 my-sm-1 p-2">
                            <div className="benefits-img">
                                <Image src={BenefitsImg3} />
                            </div>
                            <p className="font-weight-normal benfits-para">
                                Identifies sepsis causing pathogens and key AMR
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Benefits;