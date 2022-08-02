import Image from "next/image";
import React from "react";
import OmegaTbTestWorksImg from "./omega-tb-test-works-img.png";

function OmegaTbTestWorks() {
    return (
        <>
            <section name="universal-id-test-works">
                <div className="container py-xl-5 py-lg-5 py-md-5 py-sm-4 py-4">
                    <p className="h2 font-weight-normal text-capitalize mb-xl-5 mb-lg-5 mb-md-5 mb-sm-4 mb-4 universal-id-test-works-heading">
                        How Does Omega TB Test Work?
                    </p>
                    <div className="m-auto mb-xl-4 mb-lg-4 mb-md-4 mb-sm-3 omega-tb-test-works-img">
                        <Image src={OmegaTbTestWorksImg} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default OmegaTbTestWorks;