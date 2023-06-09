import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import { Bootstrap } from "../../../../cp/src";
import { ErrorBoundary } from "../../../../cp/src/components/molecules";
import { Table } from "../../../../cp/src/components/organisms";
import PageHeader from "../../../components/organisms/PageHeader";
import { getPostFile, getPostFiles } from "../../../utils/posts";

export default function posts({ posts }) {
   const router = useRouter()
   // const posts = {}
   return (
      <Bootstrap >
         {/* {JSON.stringify({ posts })} */}
         <PageHeader title={'Posts'} primaryAction={{ title: 'New post', onClick: () => router.push(`/cp/posts/create`) }} />
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
