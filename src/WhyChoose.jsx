import Image from "next/image";
import React from "react";
import EasyAccessImg from "./easy-access.png";
import EasyToReadImg from "./easy-to-read.png";
import SampleCollectionImg from "./sample-collection.png";
import DigitalAgeImg from "./digital-age.png";

function WhyChoose() {
    return (
        <>
            <section name="why-choose" id="why-choose">
                <div className="container py-xl-5 py-lg-5 py-md-5 py-sm-4">
                    <div className="container row align-items-center mt-xl-5 mt-lg-4 mt-md-3 mt-sm-3">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="mx-auto why-choose-haystack-img-1">
                                <Image src={EasyAccessImg} />
                            </div>
                            <p className="w-50 mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 text-center text-capitalize">One test for complete
                                genome analysis of mycobaterium TB</p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="mx-auto why-choose-haystack-img-2">
                                <Image src={SampleCollectionImg} />
                            </div>
                            <p className="w-50 mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 text-center text-capitalize">No change in sample collection</p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="mx-auto why-choose-haystack-img-3">
                                <Image src={EasyToReadImg} />
                            </div>
                            <p className="w-50 mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 text-center text-capitalize">Easy to read reports </p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="mx-auto why-choose-haystack-img-4">
                                <Image src={DigitalAgeImg} />
                            </div>
                            <p className="w-50 mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 text-center text-capitalize">Digital Age Ready</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WhyChoose;