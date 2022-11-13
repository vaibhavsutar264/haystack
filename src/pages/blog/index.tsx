// @ts-nocheck
import AppTemplate from "../../components/templates/AppTemplate";
import { getSettings } from "../../utils/settings";
import { getActiveNews } from "../../utils/news";
import styled from "@emotion/styled";
import Section from '../../components/atoms/Section'
import Link from "next/link";
import SectionPosts from "../../components/organisms/SectionPosts";

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
            <div className="flex gap-8 items-start">
               <div className="md:w-6/12">
                  <picture>
                     <img src="//placehold.com" alt="" className="bg-gray-200 w-full" />
                  </picture>
               </div>
               <div className="flex-1 bg-white py-8">
                  <div className="flex justify-between mb-4">
                     <span>APRIL 28, 2022</span>
                     <span className="text-green-600 font-medium">SHARE</span>
                  </div>
                  <h3 className="mb-4 md:mb-8 text-4xl font-extrabold">
                     Past, Present and Future of TB diagnosis: Laboratory perspective
                  </h3>
                  <p className="font-bold mb-4 text-blue-600">by XYZ, Lorem Ipsum</p>
                  <p className="font-base text-muted line-clamp-4">
                     {`Clinicians worldwide rely heavily (almost 70%) on the laboratory results, for diagnosing the illness, recommending the appropriate treatment and follow-ups. Hence it becomes an onus on`}
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                     <Link href={'#'} >
                        <a className="#">BOOK A CALL</a>
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
         <SectionPosts
            title={'Related Articles'}
            posts={news}
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


