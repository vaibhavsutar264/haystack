// @ts-nocheck
import AppTemplate from "../../components/templates/AppTemplate";
import { getSettings } from "../../utils/settings";
import { getActivePosts, getPostFile, getRelatedPosts } from "../../utils/posts";
import styled from "@emotion/styled";
import Section from '../../components/atoms/Section'
import Link from "next/link";
import SectionPosts from "../../components/organisms/SectionPosts";
import SectionBlogPosts from "../../components/organisms/SectionBlogPosts";
import WebinarItem from "../../components/molecules/WebinarItem";
import settings from '../../json/settings.json'
// import settings from '../../json/settings.json'
import webinars from '../../json/webinars.json'
import BlogPostHeroSection from "../../components/sections/BlogPostHeroSection";
import { useEffect, useState } from "react";
import axios from 'axios'

const StyledHome = styled(AppTemplate)`

`


export default function Post({ Component, pageProps, post = {}, }) {

   const [ posts, setPosts ] = useState(null)
   useEffect(() => {
      axios.get(`/api/related-posts?category=${post.category}`).then(({ data }) => {
         setPosts(data.data)
      })
   }, [ post ])

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
         {posts ? (
         <SectionPosts
            title={`Recent Articles`}
            posts={posts}
         />
         ): null}
      </StyledHome>
   )
}

export async function getStaticProps(context) {
   // console.info(context)
   const slug = context.params['post-slug']
   const post = getPostFile(slug)
   // const relatedPosts = getRelatedPosts(post.category)
   return {
     props: {
      post: JSON.parse(JSON.stringify(post)),
      // relatedPosts: JSON.parse(JSON.stringify(relatedPosts))
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
