// @ts-nocheck
import AppTemplate from "../../components/templates/AppTemplate";
import { getSettings } from "../../utils/settings";
import { getActiveNews } from "../../utils/news";
import styled from "@emotion/styled";
import Section from '../../components/atoms/Section'
import Link from "next/link";
import SectionPosts from "../../components/organisms/SectionPosts";
import SectionBlogPosts from "../../components/organisms/SectionBlogPosts";
import WebinarItem from "../../components/molecules/WebinarItem";

import webinars from '../../json/webinars.json'

const StyledHome = styled(AppTemplate)`
   .HeroSection {
      background-image: url("https://images.unsplash.com/photo-1659535901690-ab95a8539929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
      background-size: 60%;
      background-repeat: no-repeat;
      background-position: right center;
   }

`

const StyledHeroSection = styled(Section)`
   background-image: url(https://images.unsplash.com/photo-1659535901690-ab95a8539929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
   background-size: 60%;
   background-repeat: no-repeat;
   background-position: right center;
   .section__container {
      min-height: calc(100vh - var(--safe-top-padding, 100px));
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
`

const HeroSection = () => {
   return (
      <StyledHeroSection className="HeroSection ">
         <Section.Container className="mx-auto ">
            <h3 className="mb-4 font-extrabold text-blue-600 text-3xl">Blogs</h3>
            <div className="flex gap-8 items-start">
               <div className="md:w-6/12">
                  <picture>
                     <img src="//placehold.com" alt="" className="bg-gray-200 w-full" />
                  </picture>
               </div>
               <div className="flex-1 bg-white  py-8">
                  <div className="flex justify-between mb-4">
                     <b>APRIL 28, 2022</b>
                     <span className="text-green-600 font-medium">SHARE</span>
                  </div>
                  <h3 className="mb-4 md:mb-12 text-4xl font-extrabold">
                     Past, Present and Future of TB diagnosis: Laboratory perspective
                  </h3>
                  <p className="font-bold mb-4 md:mb-8 text-blue-600">by XYZ, Lorem Ipsum</p>
                  <p className="font-base text-muted line-clamp-4">
                     {`Clinicians worldwide rely heavily (almost 70%) on the laboratory results, for diagnosing the illness, recommending the appropriate treatment and follow-ups. Hence it becomes an onus on`}
                  </p>
                  <div className="mt-8 flex items-center justify-end gap-4">
                     <Link href={'#'} >
                        <a className="text-green-600 text-italic">Read More...</a>
                     </Link>
                  </div>
               </div>
            </div>
         </Section.Container>
      </StyledHeroSection>
   )
}

export default function Diagnostician({ Component, pageProps, news, settings }) {

   return (
      <StyledHome settings={settings}>
         <HeroSection />
         <SectionBlogPosts
            title={'Recent Articles'}
            enableCarousel={true}
            posts={news}
         />
         <SectionPosts
            enableCarousel={true}
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
            posts={webinars.data}
         />
      </StyledHome>
   )
}

export async function getStaticProps(context) {
   let news = getActiveNews()
   console.log({ news })
   const settings = getSettings()

   return {
     props: {
      news: JSON.parse(JSON.stringify(news)),
      settings: JSON.parse(JSON.stringify(settings))
     }, // will be passed to the page component as props
   }
}


