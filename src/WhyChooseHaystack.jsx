import React from "react";
import Image from "next/image";
import EasyAccessImg from "./easy-access.png";
import EasyToReadImg from "./easy-to-read.png";
import SampleCollectionImg from "./sample-collection.png";
import DigitalAgeImg from "./digital-age.png";

function WhyChooseHaystack() {
    return (
        <>
            <section name="why-choose-haystack" id="why-choose-haystack" className="section-padding section-margin">
                <div className="container why-choose-haystack">
                    <p className="h2 font-weight-normal why-choose-haystack-heading">
                        Why Choose Haystack
                    </p>
                    <div className="container row mt-xl-5 mt-lg-4 mt-md-3 mt-sm-3 mt-3">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="mx-auto why-choose-haystack-img-1">
                                <Image src={EasyAccessImg} />
                            </div>
                            <p className="w-50 mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize">Easy Access 200+ Partner Labs</p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="mx-auto why-choose-haystack-img-2">
                                <Image src={SampleCollectionImg} />
                            </div>
                            <p className="w-50 mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize">No change in sample collection</p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="mx-auto why-choose-haystack-img-3">
                                <Image src={EasyToReadImg} />
                            </div>
                            <p className="w-50 mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize">Easy to read reports </p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="mx-auto why-choose-haystack-img-4">
                                <Image src={DigitalAgeImg} />
                            </div>
                            <p className="w-50 mx-auto mt-xl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 text-center text-capitalize">Digital Age Ready</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WhyChooseHaystack;