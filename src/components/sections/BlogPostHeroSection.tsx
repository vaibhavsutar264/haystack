// @ts-nocheck
import Section from "../atoms/Section"
import styled from "@emotion/styled";
import Link from "next/link";
// import settings

const StyledHeroSection = styled(Section)`
background-image: url(https://images.unsplash.com/photo-1659535901690-ab95a8539929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
background-size: 60%;
background-repeat: no-repeat;
background-position: right center;
.section__container {
   min-height: calc(80vh - var(--safe-top-padding, 100px));
   display: flex;
   flex-direction: column;
   justify-content: center;
}
`

const ShareButton = () => {
   return (
      <div className="flex items-center gap-2 text-sm text-blue-600 cursor-pointer share-button">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reply-fill" viewBox="0 0 16 16">
            <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
         </svg>
         <span></span>
      </div>
   )
}

const BlogPostHeroSection = ({ title, date, thumbnailUrl,author_name,author_bio }) => {
   return (
      <StyledHeroSection className="BlogPostHeroSection ">
         <Section.Container className="mx-auto ">
            <div className="flex gap-8 items-stretch">
               <div className="md:w-7/12">
                  <div className="aspect-w-16 aspect-h-9">
                     <img src={thumbnailUrl} alt="" className="bg-gray-100 w-full" />
                  </div>
               </div>
               <div className="flex-1 bg-white">
                  <div className="h-full flex flex-col justify-between">
                     <div className="flex justify-between mb-4">
                        <span className="text-base font-bold">{date}</span>
                        {/* <span className="text-green-600 font-medium">SHARE</span> */}
                        <ShareButton />
                     </div>
                     <h3 className="mb-4 md:mb-12 text-3xl font-bold md:w-4/5">
                        {title}
                     </h3>
                     <p className="font-bold mb-0 text-blue-600 text-sm md:w-4/5">by {author_name}, {author_bio}</p>
                  </div>

               </div>
            </div>
         </Section.Container>
      </StyledHeroSection>
   )
}

export default BlogPostHeroSection
