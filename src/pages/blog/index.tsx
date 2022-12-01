// @ts-nocheck
import AppTemplate from "../../components/templates/AppTemplate";
import { getSettings } from "../../utils/settings";
import { getActivePosts } from "../../utils/posts";
import styled from "@emotion/styled";
import Section from '../../components/atoms/Section'
import Link from "next/link";
import SectionPosts from "../../components/organisms/SectionPosts";
import SectionBlogPosts from "../../components/organisms/SectionBlogPosts";
import WebinarItem from "../../components/molecules/WebinarItem";
import { sortBy } from "lodash";

import webinars from '../../json/webinars.json'

const StyledHome = styled(AppTemplate)`
   .HeroSection {
      background-image: url("https://images.unsplash.com/photo-1659535901690-ab95a8539929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
      background-size: 60%;
      background-repeat: no-repeat;
      background-position: right center;
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
const StyledHeroSection = styled(Section)`
   background-image: url(https://images.unsplash.com/photo-1659535901690-ab95a8539929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
   background-size: 60%;
   background-repeat: no-repeat;
   background-position: right center;
   .section__container {
      min-height: calc(90vh - var(--safe-top-padding, 100px));
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
`

const HeroSection = ({ title, date, description, citation, image, url }) => {
   return (
      <StyledHeroSection className="HeroSection ">
         <Section.Container className="mx-auto ">
            <h3 className="mb-8 font-extrabold text-blue-600 text-3xl">Blogs</h3>
            <div className="flex gap-8 items-start">
               <div className="md:w-7/12">
                  <picture>
                     <img src={image} alt="" className="bg-gray-200 w-full aspect-[16/9]" />
                  </picture>
               </div>
               <div className="flex-1 bg-white">
                  <div className="flex justify-between mb-4">
                     <span className="text-base font-bold">{date}</span>
                     <span className="text-green-600 font-normal text-base flex items-center gap-2 share-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reply-fill" viewBox="0 0 16 16">
                        <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
                     </svg>SHARE</span>
                  </div>
                  <h3 className="mb-4 md:mb-12 text-3xl font-bold md:w-4/5">
                     {title}
                  </h3>
                  <p className="font-semibold mb-4 md:mb-8 text-blue-600 text-sm">{citation}</p>
                  <p className="font-base text-muted line-clamp-4 md:w-4/5">
                     {description}
                  </p>
                  <div className="-mt-2 flex items-center justify-end gap-4">
                     <Link href={url} >
                        <a className="text-green-600 italic text-sm">Read More...</a>
                     </Link>
                  </div>
               </div>
            </div>
         </Section.Container>
      </StyledHeroSection>
   )
}

export default function Diagnostician({ Component, pageProps, posts, settings }) {
   const heroPost = posts?.find(post => post.isfeatured)
   const otherPosts = posts?.filter(p => !p.isfeatured)

   return (
      <StyledHome settings={settings}>
         <HeroSection
            title={heroPost.title}
            date={heroPost.date}
            url={`/blog/${heroPost.slug}`}
            description={heroPost.excerpt}
            image={heroPost.image_url}
            citation={`by ${heroPost.author_name}, ${heroPost.author_bio}`}
         />
         <SectionBlogPosts
            title={'Recent Articles'}
            enableCarousel={true}
            posts={sortBy(otherPosts, 'date', 'desc')}
         />
         <SectionPosts
            enableCarousel={webinars.data?.length > 3}
            className="webinar"
            renderHeaderRight={() => (
               <>
                  <a href="https://www.youtube.com/@haystackanalytics3946" className="flex items-center gap-3 text-sm mb-4 md:mb-8">
                     <img src="https://yt3.ggpht.com/IorwJ9Fi2ZSmiRtYqha8GiI9qJYSROhiahjFn-K9_ARla8lzC9OiLCSWHhh4Yix9uisYm7Hvsg=s176-c-k-c0x00ffffff-no-rj" alt="Haystack Analytics" className="w-10 h-10" />
                     <div className="mr-3">
                        <p className="font-semibold mb-0">Haystack Analytics</p>
                        <span className="text-xs">77 subscribers</span>
                     </div>
                     <span className="bg-black text-white px-4 py-2 rounded-full">SUBSCRIBE</span>
                  </a>
               </>
            )}
            ItemComponent={WebinarItem}
            title={'Webinars'}
            posts={sortBy(webinars.data, 'date', 'desc')}
         />
      </StyledHome>
   )
}

export async function getStaticProps(context) {
   let posts = getActivePosts()
   console.log({ posts })
   const settings = getSettings()

   return {
     props: {
      posts: JSON.parse(JSON.stringify(posts)),
      settings: JSON.parse(JSON.stringify(settings))
     }, // will be passed to the page component as props
   }
}


