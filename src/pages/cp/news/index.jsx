import Link from "next/link";
import { useRouter } from "next/router";
import { Bootstrap } from "../../../../cp/src";
import { ErrorBoundary } from "../../../../cp/src/components/molecules";
import { Table } from "../../../../cp/src/components/organisms";
import PageHeader from "../../../components/organisms/PageHeader";
import { getNewsFiles } from "../../../utils/news";

export default function news({ news }) {
   const router = useRouter()
   // const news = {}
   return (
      <Bootstrap >
         {/* {JSON.stringify({ news })} */}
         <PageHeader title={'News'} primaryAction={{ title: 'New news', onClick: () => router.push(`/cp/news/create`) }} />
         <ErrorBoundary>
            {(news && news.length) ? (
            <Table>
               <Table.Header>
                  <Table.Col key={'title'} >
                     Title
                  </Table.Col>
                  <Table.Col key={'_action'} >

                  </Table.Col>
               </Table.Header>
               <Table.Body>
                  {news?.map(row => (
                  <Table.Row key={`post_${row.id}`} >
                     <Table.Cell>
                        <Link href={`/cp/news/${row.slug}`}>{row.title}</Link>
                     </Table.Cell>
                     <Table.Cell>
                        <Link href={`/cp/news/${row.slug}`}>{'Edit'}</Link>
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
   let news = getNewsFiles()
   return {
     props: {
      news: JSON.parse(JSON.stringify(news))
     }, // will be passed to the page component as props
   }
}
