// @ts-nocheck
import Section from "../atoms/Section"
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import ShareButton from "../molecules/ShareButton";
import { dateFormat } from "../../utils/index"
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


const BlogPostHeroSection = ({ title, date, thumbnailUrl,author_name,author_bio }) => {
   return (
      <StyledHeroSection className="BlogPostHeroSection " data-aos="fade-up">
         <Section.Container className="mx-auto ">
            <div className="flex gap-8 items-stretch">
               <div className="md:w-7/12">
                  <div className="aspect-w-16 aspect-h-9">
                     <img src={thumbnailUrl} alt={title} layout="cover" className="bg-gray-100 w-full" />
                  </div>
               </div>
               <div className="flex-1 bg-white">
                  <div className="h-full flex flex-col justify-between">
                     <div className="flex justify-between mb-4">
                        <span className="text-base font-bold">{dateFormat(date)}</span>
                        {/* <span className="text-green-600 font-medium">SHARE</span> */}
                        <ShareButton
                           title={globalThis.document?.title}
                           url={globalThis.location?.href}
                        />
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
