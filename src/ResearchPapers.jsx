import Image from "next/image";
import ResearchPapersImg from "./research-papers.png";

function ResearchPapers() {
    return (
        <>
            <section name="research-papers">
                <div className="container research-papers mt-xl-5 mt-lg-5 mt-md-5 mt-sm-4 pt-3">
                    <p className="h2 font-weight-normal text-uppercase research-papers-heading">
                        Research papers
                    </p>
                    <div className="row mt-xl-5 mt-lg-4 mt-md-3 mt-sm-3 research-papers-inner-container">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-9">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-lg-2 mb-md-2 mb-sm-2 me-1 research-papers-img">
                                    <Image src={ResearchPapersImg} />
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 research-papers-inner-container">
                                    <p className="h4 font-weight-normal research-papers-sub-heading">
                                        Highlights on the Application of Genomics and bioinformatics in the fight against infectious diseases - chellaneges and opportunities in africa
                                    </p>
                                    <div className="d-flex research-papers-text">
                                        <div>
                                            <p className="font-weight-normal research-papers-text-1">
                                                Saikoi Y Bah
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-weight-normal research-papers-text-2">
                                                Collins Misita Moranga
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-9">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-lg-2 mb-md-2 mb-sm-2 me-1 research-papers-img">
                                    <Image src={ResearchPapersImg} />
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 research-papers-inner-container">
                                    <p className="h4 font-weight-normal research-papers-sub-heading">
                                        The diagnosis of infectious diseases by whole genome next generation sequencing: a new era is opening
                                    </p>
                                    <div className="d-flex research-papers-text">
                                        <div>
                                            <p className="font-weight-normal research-papers-text-1">
                                                Saikoi Y Bah
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-weight-normal research-papers-text-2">
                                                Collins Misita Moranga
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-9">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-lg-2 mb-md-2 mb-sm-2 me-1 research-papers-img">
                                    <Image src={ResearchPapersImg} />
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 research-papers-inner-container">
                                    <p className="h4 font-weight-normal research-papers-sub-heading">
                                        The diagnosis of infectious diseases by whole genome next generation sequencing: a new era is opening
                                    </p>
                                    <div className="d-flex research-papers-text">
                                        <div>
                                            <p className="font-weight-normal research-papers-text-1">
                                                Saikoi Y Bah
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-weight-normal research-papers-text-2">
                                                Collins Misita Moranga
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ResearchPapers;