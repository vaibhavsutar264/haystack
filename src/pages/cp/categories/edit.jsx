import { Bootstrap } from "../../../../cp/src";

export default function edit({ post }) {
   return (
      <Bootstrap>
         {JSON.stringify({ post })}
      </Bootstrap>
   )
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
