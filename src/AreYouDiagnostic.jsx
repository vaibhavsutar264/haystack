import React from "react";
// import DiagnosticImg1 from "./are-you-diagnostic-img.png";

function AreYouDiagnostic() {
    return (
        <>
            <section name="are-you-diagnostic">
                <div className="are-you-diagnostic d-flex justify-content-center">
                    <div className="container row">
                        <div className="col-lg-7 col-md-6 d-flex flex-column justify-content-center">
                            <p className="h2 font-weight-normal text-uppercase are-you-diagnostic-heading">
                                are you diagnostic lab or a hospital?
                            </p>
                            <p className="h2 font-weight-normal text-capitalize are-you-diagnostic-sub-heading">
                                Be Ahead of competition with Revolutionary
                                Technology
                            </p>
                            <p className="h5 font-weight-normal text-capitalize w-lg-75 w-md-50 are-you-diagnostic-para">
                                Easy to onboard Tech
                            </p>
                        </div>
                        <div className="col-lg-5 col-md-6 are-you-diagnostic-img">
                            {/* <img src={DiagnosticImg1} alt="" /> */}
                        </div>
                    </div>
                </div>
                <div className="automated-bioinformatics container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-md-6 automated-bioinformatics-img">
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <p className="h3 font-weight-normal mt-xl-5 mt-lg-5 mt-md-5 mt-sm-4 automated-bioinformatics-heading">
                                Automated Bioinformatics Platform
                            </p>
                            <p className="h5 font-weight-normal automated-bioinformatics-sub-heading text-capitalize">
                                Localized Report with software access
                            </p>
                            <ul className="marker-list">
                                <li>
                                    No Upskilling
                                </li>
                                <li>
                                    No Man Power Addition
                                </li>
                                <li>
                                    No system upgrades required
                                </li>
                            </ul>
                            <div className="row justify-content-around p-xl-2 p-lg-2 p-md-2 p-sm-2 automated-bioinformatics-inner-container">
                                <p className="col-6 h5 mt-2 w-50 font-weight-normal text-uppercase automated-bioinformatics-inner-container-text">
                                    Book a Detailed Call With Our Expert Today
                                </p>
                                <button className="col-lg-6 font-weight-normal text-uppercase me-lg-3 automated-informatics-btn">Contact us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AreYouDiagnostic;