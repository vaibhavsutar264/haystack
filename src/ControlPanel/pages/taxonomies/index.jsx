import React from 'react'
// import { Inertia } from "@inertiajs/inertia";
// import { InertiaLink } from "@inertiajs/inertia-react";
// import DataGrid from 'react-data-grid';
import { useEffect, useState } from "react";
// import { Inertia } from '@inertiajs/inertia';
import { Page } from '../../components/templates';

const columns = [
   { key: 'id', name: 'ID' },
   { key: 'title', name: 'Title' }
 ];

 const rows = [
   { id: 0, title: 'Example' },
   { id: 1, title: 'Demo' }
 ];


export default function taxonomies({ taxonomies }) {
   const [ search, setSearch ] = useState(null)
   const [ selectedRows, setSelectedRows ] = useState([])
   const cols = Object.keys(taxonomies.data[0] ?? {}).map(ok => ({
      key: ok,
      name: ok,
   }))
   useEffect(() => {
      if (search && search.length) {
         // Inertia.get(route('admin.taxonomies.index', { q: search }))
      }
   }, [ search ])
   return (
      <Page title={'Taxonomies'}>
         <Page.Section>
            <input value={search} onChange={ev => setSearch(ev.target.value)} />
            <div className="container mx-auto py-3">
               {/* <InertiaLink href={route('admin.taxonomies.create')}>New Category</InertiaLink> */}
            </div>
            {/* <DataGrid
               className="rdg-light"
               columns={cols}
               rows={taxonomies.data}
               defaultColumnOptions={{
                  sortable: true,
                  resizable: true
               }}
               selectedRows={selectedRows}
               onSelectedRowsChange={setSelectedRows}
            /> */}

            {/* {JSON.stringify(taxonomies)} */}
         </Page.Section>
      </Page>
   )
}
