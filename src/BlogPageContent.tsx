import Image from "next/image";
import React from "react";
import BlogFeaturedImg from "./blog-featured-image.jpg";
import AuthorImg from "./blog-author-img.jpg";

function BlogPageContent({ post = {}, }: any) {
   const { title } = post
   return (
      <>
         <section >
            <div className="container">
               <div className="py-xl-3 py-lg-3 py-md-3 py-sm-2 border-bottom border-4 border-dark blog-header">
                  <p className="h1 font-weight-normal text-uppercase blog-title">
                     {title}
                  </p>
                  <div className="d-flex my-1">
                     <p className="px-2 font-weight-normal text-capitalize blog-header-author-name">
                        {post.author_name}
                     </p>
                     <p className="px-2 font-weight-normal text-capitalize blog-header-date">
                        {post.published_at}
                     </p>
                  </div>
               </div>
               <div className="container py-3 text-center blog-featured-image">
                  <img src={post.image_url} alt="post" className="img-responsive" />
               </div>
               <div className="m-auto py-4 blog-content">
                  <div className="font-weight-normal blog-content-text" dangerouslySetInnerHTML={{ __html: post.description }}></div>
               </div>
               <div className="d-flex border-top border-4 border-dark py-4 blog-author">
                  <div className="blog-author-img">
                     <Image alt="logo" src={AuthorImg} className="rounded-circle" width={'144'} height={'144'} />
                  </div>
                  <div className="ms-3 m-auto">
                     <p className="blog-author-name mb-1">{post.author_name}</p>
                     <p className="blog-author-description">
                        {post.author_bio}
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

BlogPageContent.defaultProps = {
   post: {}
}

export default BlogPageContent;
