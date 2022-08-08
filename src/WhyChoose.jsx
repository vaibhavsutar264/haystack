import Image from "next/image";
import React from "react";
import EasyToReadImg from "./easy-to-read.png";
import SampleCollectionImg from "./sample-collection.png";
import DigitalAgeImg from "./digital-age.png";

function WhyChoose() {
    return (
        <>
            <section name="why-choose" id="why-choose" className="section-margin section-padding">
                <div className="container">
                    <div className="container row align-items-center mt-xl-5 mt-lg-4 mt-md-3 mt-sm-3">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="mx-auto why-choose-haystack-img-1">
                                <Image src={SampleCollectionImg} />
                            </div>
                            <p className="mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize why-choose-us-text">One test for complete
                                genome analysis of mycobaterium TB</p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="mx-auto why-choose-haystack-img-2">
                                <Image src={SampleCollectionImg} />
                            </div>
                            <p className="mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize why-choose-us-text">No change in sample collection</p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="mx-auto mt-4 why-choose-haystack-img-3">
                                <Image src={EasyToReadImg} />
                            </div>
                            <p className="mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize why-choose-us-text">Easy to read reports </p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="mx-auto why-choose-haystack-img-4">
                                <Image src={DigitalAgeImg} />
                            </div>
                            <p className="mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize why-choose-us-text">Digital Age Ready</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WhyChoose;