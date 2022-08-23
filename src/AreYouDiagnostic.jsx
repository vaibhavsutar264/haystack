import Image from "next/image";
import React from "react";
import DiagnosticImg1 from "./are-you-diagnostic-img.png";
import AutomatedBioinformaticsImg from "./automated-bioinformatics-img.png";
// import AbsoluteImg1 from "./automated-bioinformatics-absolute-img-1.png";
// import AbsoluteImg2 from "./automated-bioinformatics-absolute-img-2.png";
// import AbsoluteImg3 from "./automated-bioinformatics-absolute-img-3.png";

function AreYouDiagnostic() {
   return (
      <>
         <section
            name="are-you-diagnostic"
            className="section-padding section-margin"
         >
            <div className="are-you-diagnostic d-flex justify-content-center">
               <div className="container row">
                  <div className="col-lg-7 col-md-6 d-flex flex-column justify-content-center">
                     <p className="h2 font-weight-normal text-uppercase are-you-diagnostic-heading">
                        are you diagnostic lab or a hospital?
                     </p>
                     <p className="h2 font-weight-normal text-capitalize are-you-diagnostic-sub-heading">
                        Be Ahead of competition with Revolutionary Technology
                     </p>
                     <p className="h5 font-weight-normal text-capitalize w-75 are-you-diagnostic-para">
                        Easy to onboard Tech
                     </p>
                  </div>
                  <div className="col-lg-5 col-md-6 p-lg-4 are-you-diagnostic-img">
                     <Image src={DiagnosticImg1} />
                  </div>
               </div>
            </div>
            {/* <div className="d-flex w-50 justify-content-between position-relative automated-bioinformatics-absolute-div">
                    <p className="font-weight-normal text-capitalize automated-bioinformatics-absolute-text automated-bioinformatics-absolute-text-1">
                        One click Vieweing
                    </p>
                    <p className="font-weight-normal text-capitalize automated-bioinformatics-absolute-text automated-bioinformatics-absolute-text-2">
                        User Existing Systems
                    </p>
                    <div className="position-absolute automated-bioinformatics-absolute-img-1">
                        <Image src={AbsoluteImg1} />
                    </div>
                    <div className="position-absolute automated-bioinformatics-absolute-img-2">
                        <Image src={AbsoluteImg2} />
                    </div>
                </div> */}
            <div className="automated-bioinformatics container section-padding section-margin">
               <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-6 col-md-6 automated-bioinformatics-img">
                     <Image src={AutomatedBioinformaticsImg} />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                     <p className="h3 font-weight-normal mt-xl-5 mt-lg-5 mt-md-5 mt-sm-4 automated-bioinformatics-heading">
                        Automated Bioinformatics Platform
                     </p>
                     <p className="h5 font-weight-normal automated-bioinformatics-sub-heading text-capitalize">
                        Localized Report with software access
                     </p>
                     <ul className="marker-list">
                        <li>No Upskilling</li>
                        <li>No Man Power Addition</li>
                        <li>No system upgrades required</li>
                     </ul>
                     <div className="row justify-content-around p-xl-2 p-lg-2 p-md-2 p-sm-2 automated-bioinformatics-inner-container">
                        <p className="col-6 h5 mt-2 w-50 font-weight-normal text-uppercase automated-bioinformatics-inner-container-text">
                           Book a Detailed Call With Our Expert Today
                        </p>
                        <button className="col-lg-6 font-weight-normal text-uppercase me-lg-3 automated-informatics-btn">
                           Contact us
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            {/* <div className="position-relative w-50">
                    <div className="position-absolute automated-bioinformatics-absolute-img-3">
                        <Image src={AbsoluteImg3} />
                    </div>
                    <br />
                    <br />
                    <p className="font-weight-normal text-center text-capitalize automated-bioinformatics-absolute-text automated-bioinformatics-absolute-text-3">
                        One click Report Generation
                    </p>
                </div> */}
         </section>
      </>
   );
}

export default AreYouDiagnostic;
