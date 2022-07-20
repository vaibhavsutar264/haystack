import Image from "next/image";
import React from "react";
import FeaturedImg from "./box-2.png";

function BlogListingPage() {
    return (
        <>
            <section name="blog-component">
                <div className="container">
                    <div className="py-4">
                        <p className="h1 font-weight-normal text-uppercase blog-listing-page-main-heading">Blogs</p>
                    </div>
                    <div className="row mt-3">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-listing-page-img">
                                <Image src={FeaturedImg} />
                            </div>
                            <h3 className="blog-listing-page-heading w-75 my-2">Haystack Analytics and faster genomics diagnostics</h3>
                            <p className="blog-listing-page-read-more font-weight-normal">
                                <a href="#read-more">Read more &gt;&gt;</a>
                            </p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-listing-page-img">
                                <Image src={FeaturedImg} />
                            </div>
                            <h3 className="blog-listing-page-heading w-75 my-2">Haystack Analytics and faster genomics diagnostics</h3>
                            <p className="blog-listing-page-read-more font-weight-normal">
                                <a href="#read-more">Read more &gt;&gt;</a>
                            </p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-listing-page-img">
                                <Image src={FeaturedImg} />
                            </div>
                            <h3 className="blog-listing-page-heading w-75 my-2">Haystack Analytics and faster genomics diagnostics</h3>
                            <p className="blog-listing-page-read-more font-weight-normal">
                                <a href="#read-more">Read more &gt;&gt;</a>
                            </p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-listing-page-img">
                                <Image src={FeaturedImg} />
                            </div>
                            <h3 className="blog-listing-page-heading w-75 my-2">Haystack Analytics and faster genomics diagnostics</h3>
                            <p className="blog-listing-page-read-more font-weight-normal">
                                <a href="#read-more">Read more &gt;&gt;</a>
                            </p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-listing-page-img">
                                <Image src={FeaturedImg} />
                            </div>
                            <h3 className="blog-listing-page-heading w-75 my-2">Haystack Analytics and faster genomics diagnostics</h3>
                            <p className="blog-listing-page-read-more font-weight-normal">
                                <a href="#read-more">Read more &gt;&gt;</a>
                            </p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-listing-page-img">
                                <Image src={FeaturedImg} />
                            </div>
                            <h3 className="blog-listing-page-heading w-75 my-2">Haystack Analytics and faster genomics diagnostics</h3>
                            <p className="blog-listing-page-read-more font-weight-normal">
                                <a href="#read-more">Read more &gt;&gt;</a>
                            </p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-listing-page-img">
                                <Image src={FeaturedImg} />
                            </div>
                            <h3 className="blog-listing-page-heading w-75 my-2">Haystack Analytics and faster genomics diagnostics</h3>
                            <p className="blog-listing-page-read-more font-weight-normal">
                                <a href="#read-more">Read more &gt;&gt;</a>
                            </p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-listing-page-img">
                                <Image src={FeaturedImg} />
                            </div>
                            <h3 className="blog-listing-page-heading w-75 my-2">Haystack Analytics and faster genomics diagnostics</h3>
                            <p className="blog-listing-page-read-more font-weight-normal">
                                <a href="#read-more">Read more &gt;&gt;</a>
                            </p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-listing-page-img">
                                <Image src={FeaturedImg} />
                            </div>
                            <h3 className="blog-listing-page-heading w-75 my-2">Haystack Analytics and faster genomics diagnostics</h3>
                            <p className="blog-listing-page-read-more font-weight-normal">
                                <a href="#read-more">Read more &gt;&gt;</a>
                            </p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-ceenter align-items-center my-3">
                        <button id="load-more-btn" className="btn btn-primary m-auto">
                            Load More
                        </button>
                    </div>
                </div>
            </section >
        </>
    );
}

export default BlogListingPage;