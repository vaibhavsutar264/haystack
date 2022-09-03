import Link from "next/link";
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
         {(posts && posts.length) ? (
         <Table>
            <Table.Header>
               <Table.Col key={'title'} >
                  Title
               </Table.Col>
               <Table.Col key={'slug'} >
                  Slug
               </Table.Col>
               <Table.Col key={'description'} >
                  Description
               </Table.Col>
               <Table.Col key={'author_name'} >
                  Author
               </Table.Col>
               <Table.Col key={'status'} >
                  Status
               </Table.Col>
               <Table.Col key={'created_at'} >
                  Created at
               </Table.Col>
               <Table.Col key={'_action'} >

               </Table.Col>
            </Table.Header>
            <Table.Body>
               {posts?.map(row => (
               <Table.Row key={`post_${row.id}`} >
                  <Table.Cell>
                     <Link href={`/cp/posts/${row.id}`}>{row.title}</Link>
                  </Table.Cell>
                  <Table.Cell>
                     {row.slug}
                  </Table.Cell>
                  <Table.Cell>
                     {row.description}
                  </Table.Cell>
                  <Table.Cell>
                     {row.author_name}
                  </Table.Cell>
                  <Table.Cell>
                     {row.status}
                  </Table.Cell>
                  <Table.Cell>
                     {row.description}
                  </Table.Cell>
                  <Table.Cell>
                     <Link href={`/cp/posts/${row.id}`}>{'Edit'}</Link>
                  </Table.Cell>
               </Table.Row>
               ))}
            </Table.Body>
         </Table>
         ) : (
            <>
            No posts yet
            </>
         )}

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
