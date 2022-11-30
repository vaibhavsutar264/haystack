// @ts-nocheck
import AppTemplate from "../../components/templates/AppTemplate";
import { getSettings } from "../../utils/settings";
import { getActivePosts, getPostFile } from "../../utils/posts";
import styled from "@emotion/styled";
import Section from '../../components/atoms/Section'
import Link from "next/link";
import SectionPosts from "../../components/organisms/SectionPosts";
import SectionBlogPosts from "../../components/organisms/SectionBlogPosts";
import WebinarItem from "../../components/molecules/WebinarItem";
import settings from '../../json/settings.json'
import webinars from '../../json/webinars.json'
import BlogPostHeroSection from "../../components/sections/BlogPostHeroSection";

const StyledHome = styled(AppTemplate)`

`

export default function Post({ Component, pageProps, post = {}, }) {

   return (
      <StyledHome settings={settings}>
         <BlogPostHeroSection
            title={post.title}
            citation={post.citation}
            date={post.date}
            author_name={post.author_name}
            author_bio={post.author_bio}
            thumbnailUrl={post.image_url}
         />
         <Section>
            <Section.Container className="mx-auto mb-8 post-content">
               <div dangerouslySetInnerHTML={{ __html: post.description  }}></div>
            </Section.Container>
         </Section>
         {/* {JSON.stringify({ post })} */}
         <SectionPosts
            title={`Recent Articles`}

         />
      </StyledHome>
   )
}

export async function getStaticProps(context) {
   console.info(context)
   const slug = context.params['post-slug']
   const post = getPostFile(slug)

   return {
     props: {
      post: JSON.parse(JSON.stringify(post)),
     }, // will be passed to the page component as props
   }
}



export async function getStaticPaths(context) {
   let posts = getActivePosts()

   console.log({ posts })
   let slugs = []

   return {
     paths: slugs,
     fallback: true,
   }
}
