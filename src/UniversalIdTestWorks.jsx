import Image from "next/image";
import React from "react";
import UniversalIdTestWorksImg1 from "./universal-id-test-works-img-1.jpg";
import UniversalIdTestWorksImg2 from "./universal-id-test-works-img-2.jpg";
import UniversalIdTestWorksImg3 from "./universal-id-test-works-img-3.jpg";
import UniversalIdTestWorksImg4 from "./universal-id-test-works-img-4.jpg";

function UniversalIdTestWorks() {
    return (
        <>
            <section name="universal-id-test-works">
                <div className="container py-xl-5 py-lg-5 py-md-5 py-sm-4">
                    <p className="h2 font-weight-normal text-capitalize mb-xl-5 mb-lg-5 mb-md-5 mb-md-4 mb-sm-3 universal-id-test-works-heading">
                        How Does Universal ID Test Work?
                    </p>
                    <div className="container row my-4 p-4 universal-id-test-works-img-container">
                        <div className="col-xl-3 col-lg-3 col-md-3 p-2 universal-id-test-works-img">
                            <Image src={UniversalIdTestWorksImg1} />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 p-2 universal-id-test-works-img">
                            <Image src={UniversalIdTestWorksImg2} />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 p-2 universal-id-test-works-img">
                            <Image src={UniversalIdTestWorksImg3} />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 p-2 universal-id-test-works-img">
                            <Image src={UniversalIdTestWorksImg4} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default UniversalIdTestWorks;