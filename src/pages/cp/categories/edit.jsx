import { Bootstrap } from "../../../../cp/src";

export default function edit({ post }) {
   return (
      <Bootstrap>
         {JSON.stringify({ post })}
      </Bootstrap>
   )
}

export async function getStaticProps(context) {

   return {
     props: {
      // paths: slugs,
      post: JSON.parse(JSON.stringify({})),
      fallback: true,
     }, // will be passed to the page component as props
   }
}
