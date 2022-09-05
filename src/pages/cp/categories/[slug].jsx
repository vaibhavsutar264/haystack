import { Bootstrap } from "../../../../cp/src";
import excuteQuery from "../../../db";

export default function post({ post }) {
   return (
      <Bootstrap>
         {JSON.stringify({ post })}
      </Bootstrap>
   )
}

export async function getStaticPaths() {
   // const slugs = paths
   let slugs = await excuteQuery({
      query: "SELECT slug FROM posts WHERE status = 'active'",
      // values: [ 1 ],
   })
   console.log({ slugs })
   slugs = slugs?.map(slg => slg.slug)

   return {
     paths: slugs,
     fallback: true,
   }
}


export async function getStaticProps(context) {
   console.log('context: ', { context })
   const data = await excuteQuery({
      query: "SELECT * FROM posts WHERE id = ?",
      values: [ 1 ],
   })

   const post = data[0]
   console.dir({ post, })
   return {
     props: {
      // paths: slugs,
      post: JSON.parse(JSON.stringify(post)),
      fallback: true,
     }, // will be passed to the page component as props
   }
}
