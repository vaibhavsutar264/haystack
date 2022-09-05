import Link from "next/link";
import { useRouter } from "next/router";
import { Bootstrap } from "../../../../cp/src";
import { ErrorBoundary } from "../../../../cp/src/components/molecules";
import { Table } from "../../../../cp/src/components/organisms";
import PageHeader from "../../../components/organisms/PageHeader";
import { getCategoryFiles } from "../../../utils/categories";

export default function categories({ categories }) {
   const router = useRouter()
   // const categories = {}
   return (
      <Bootstrap >
         {/* {JSON.stringify({ categories })} */}
         <PageHeader title={'Categories'} primaryAction={{ title: 'New category', onClick: () => router.push(`/cp/categories/create`) }} />
         <ErrorBoundary>
            {(categories && categories.length) ? (
            <Table>
               <Table.Header>
                  <Table.Col key={'title'} >
                     Title
                  </Table.Col>
                  <Table.Col key={'_action'} >

                  </Table.Col>
               </Table.Header>
               <Table.Body>
                  {categories?.map(row => (
                  <Table.Row key={`post_${row.id}`} >
                     <Table.Cell>
                        <Link href={`/cp/categories/${row.slug}`}>{row.title}</Link>
                     </Table.Cell>
                     <Table.Cell>
                        <Link href={`/cp/categories/${row.slug}`}>{'Edit'}</Link>
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
   let categories = getCategoryFiles()
   return {
     props: {
      categories: JSON.parse(JSON.stringify(categories))
     }, // will be passed to the page component as props
   }
}
