import React from "react";
import Image from "next/image";
import PowerOfOneTestImg from "./power-of-one-test.png";

function PowerOfOneTest() {
    return (
        <>
            <section name="power-of-one-test" className="section-padding">
                <div className="d-flex justify-content-center py-5">
                    <div className="container row">
                        <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center">
                            <p className="h2 font-weight-normal text-capitalize power-of-one-test-heading">
                                Power of One Test
                            </p>
                            <p className="h2 font-weight-normal text-capitalize p-lg-2 p-md-1 p-sm-1 power-of-one-test-sub-heading">
                                <span>400+</span> Bacteria and Fungii in<br /><span>12 hours</span> on a single platform
                            </p>
                            <p className="font-weight-normal p-xl-4 p-lg-4 p-md-3 p-sm-2 power-of-one-test-para">
                                UID A life saving product, we’re proud of
                                culture-free platform that can be directly used to analyse blood and works effectively on the rapid and portable ONT.

                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 power-of-one-test-img">
                            <Image src={PowerOfOneTestImg} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PowerOfOneTest;