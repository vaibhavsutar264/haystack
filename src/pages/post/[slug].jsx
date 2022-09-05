import Link from "next/link";
import React from "react";
import BlogPageContent from "../../BlogPageContent";
import Template from "../../Template";
import { getCategoryFile, getCategoryFiles } from "../../utils/categories";
import { getActivePosts, getPostFile, getPostFiles } from "../../utils/posts";
import { getSettings } from "../../utils/settings";



export default function Post({ post, category }) {
   return (
      <>
         <Template>
            <BlogPageContent post={post} />
         </Template>
      </>
   );
}

export async function getStaticPaths() {
   // const slugs = paths
   let slugs = getPostFiles()
   slugs = slugs?.map(slg => {
      return {
         params: { 'slug': slg.slug }
      }
   })
   return {
     paths: slugs,
     fallback: true,
   }
}

export async function getStaticProps(context) {
   const postSlug = context.params['slug'];
   const post = getPostFile(postSlug)
   return {
      props: {
         post,
         // category
      }
   }
}
