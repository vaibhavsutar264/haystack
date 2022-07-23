import Image from "next/image";
import React from "react";
import OmegaTbImg from "./omega-tb.png";

function OmegaTb() {
    return (
        <>
            <section name="omega-tb">
                <div className="d-flex justify-content-center">
                    <div className="container row">
                        <div className="col-lg-6 col-md-6 my-3 d-flex flex-column justify-content-center">
                            <p className="h2 font-weight-normal text-uppercase omega-tb-heading">
                                Omega TB :
                            </p>
                            <p className="h2 font-weight-normal text-capitalize omega-tb-sub-heading">
                                Doing our part for TB Free world
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 my-3">
                            <div className="omega-tb-img">
                                <Image src={OmegaTbImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default OmegaTb;