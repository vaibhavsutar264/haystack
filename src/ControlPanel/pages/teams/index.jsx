// import { InertiaLink } from "@inertiajs/inertia-react";
// import DataGrid from 'react-data-grid';
import { Page } from "../../components/templates";
const columns = [
   { key: 'id', name: 'ID' },
   { key: 'title', name: 'Title' }
 ];

 const rows = [
   { id: 0, title: 'Example' },
   { id: 1, title: 'Demo' }
 ];


export default function teams({ teams }) {
   return (
      <Page title={'Teams'}>
         <Page.Section>
            {/* <InertiaLink href={route('admin.teams.create')}>New team</InertiaLink> */}
            {/* <DataGrid className="rdg-light" columns={columns} rows={rows} /> */}
            {JSON.stringify({ teams })}
         </Page.Section>
      </Page>
   )
}
