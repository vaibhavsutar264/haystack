import Link from "next/link";
import Script from "next/script";
import { Bootstrap } from "../../../../cp/src";
import { ErrorBoundary } from "../../../../cp/src/components/molecules";
import { Table } from "../../../../cp/src/components/organisms";
import { getPostFiles } from "../../../utils/posts";

export default function posts({ posts }) {
   // const posts = {}
   return (
      <Bootstrap >
         {/* {JSON.stringify({ posts })} */}
         <ErrorBoundary>
            {(posts && posts.length) ? (
            <Table>
               <Table.Header>
                  <Table.Col key={'title'} >
                     Title
                  </Table.Col>
                  <Table.Col key={'_action'} >

                  </Table.Col>
               </Table.Header>
               <Table.Body>
                  {posts?.map(row => (
                  <Table.Row key={`post_${row.id}`} >
                     <Table.Cell>
                        <Link href={`/cp/posts/${row.slug}`}>{row.title}</Link>
                     </Table.Cell>
                     <Table.Cell>
                        <Link href={`/cp/posts/${row.slug}`}>{'Edit'}</Link>
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
         </ErrorBoundary>

      </Bootstrap>
   );
}

export async function getStaticProps(context) {
   let posts = getPostFiles()
   return {
     props: {
      posts: JSON.parse(JSON.stringify(posts))
     }, // will be passed to the page component as props
   }
}
