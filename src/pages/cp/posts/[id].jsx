import { Bootstrap } from "../../../../cp/src";
import { getPostFiles } from "../../../utils/posts";
// import excuteQuery from "../../../db";

export default function post({ post }) {
   return (
      <Bootstrap>
         {JSON.stringify({ post })}
      </Bootstrap>
   )
}

export async function getStaticPaths() {
   // const slugs = paths
   let slugs = getPostFiles()
   console.log({ slugs })
   slugs = slugs?.map(slg => slg.file)

   return {
   //   paths: slugs,
     fallback: true,
   }
}


export async function getStaticProps(context) {

   return {
     props: {
      // paths: slugs,
      // post: JSON.parse(JSON.stringify(post)),
      fallback: true,
     }, // will be passed to the page component as props
   }
}
