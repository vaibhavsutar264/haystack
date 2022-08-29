import Script from "next/script";
import { Bootstrap } from "../../../../cp/src";
import { Table } from "../../../../cp/src/components/organisms";
import excuteQuery from "../../../db";
// import { Bootstrap, Screen } from "../../../cp/src";
// import { ErrorBoundary } from "../../../cp/src/components/molecules";

export default function posts({ posts }) {
   // const posts = {}
   return (
      <Bootstrap >
         {JSON.stringify(posts)}
         <Table>
            <Table.Row>
               <Table.
            </Table.Row>
         </Table>
      </Bootstrap>
   );
}

export async function getStaticProps(context) {
   const data = await excuteQuery({
      query: "SELECT * FROM posts ORDER BY id DESC"
   })
   // data.
   const posts = data
   console.dir({ posts })
   return {
     props: {
      posts: JSON.parse(JSON.stringify(posts))
     }, // will be passed to the page component as props
   }
}
