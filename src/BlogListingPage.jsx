import Image from "next/image";
import Link from "next/link";
import React from "react";
import FeaturedImg from "./box-2.png";

function BlogListingPage({ categories }) {
   return (
      <section name="py-8">
         <div className="container mx-auto">
            <div className="py-xl-4 py-lg-4 py-md-2 py-sm-2">
               <p className="h1 font-weight-normal text-uppercase blog-listing-page-main-heading">
                  Blogs
               </p>
            </div>
            <div className="row mt-3">
               {categories?.map(cat => (
                  <div key={cat.slug} className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                     <div className="blog-listing-page-img">
                        <Image src={FeaturedImg} />
                     </div>
                     <h3 className="blog-listing-page-heading my-sm-2 my-1">
                        {cat.title}
                     </h3>
                     <p className="blog-listing-page-read-more font-weight-normal">
                        <Link href={`/blog/${cat.slug}`}>Read more &gt;&gt;</Link>
                     </p>
                  </div>
               ))}

            </div>
            {/* <div className="d-flex justify-content-ceenter align-items-center my-3">
               <button id="load-more-btn" className="btn btn-primary m-auto">
                  Load More
               </button>
            </div> */}
         </div>
      </section>
   );
}

export default BlogListingPage;
