import { Bootstrap } from "../../../../cp/src";
import { getPostFile } from "../../../utils/posts";

export default function post({ post }) {
   return (
      <Bootstrap>
         {JSON.stringify({ post })}
      </Bootstrap>
   )
}

export async function getStaticPaths() {
   // const slugs = paths
   let slugs = []

   return {
     paths: slugs,
     fallback: true,
   }
}


export async function getStaticProps(context) {
   const slug = context.params.slug
   const post = getPostFile(slug)
   return {
     props: {
      // paths: slugs,
      // post: JSON.parse(JSON.stringify(post)),
      fallback: true,
     }, // will be passed to the page component as props
   }
}
