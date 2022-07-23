import React from 'react'
// import { Inertia } from "@inertiajs/inertia";
// import { InertiaLink } from "@inertiajs/inertia-react";
// import DataGrid from 'react-data-grid';
import { useEffect, useState } from "react";
import { Inertia } from '@inertiajs/inertia';

const columns = [
   { key: 'id', name: 'ID' },
   { key: 'title', name: 'Title' }
 ];

 const rows = [
   { id: 0, title: 'Example' },
   { id: 1, title: 'Demo' }
 ];


export default function tags({ tags }) {
   const [ search, setSearch ] = useState(null)
   const [ selectedRows, setSelectedRows ] = useState([])
   const cols = Object.keys(tags.data[0]).map(ok => ({
      key: ok,
      name: ok,
   }))
   useEffect(() => {
      if (search && search.length) {
         Inertia.get(route('admin.tags.index', { q: search }))
      }
   }, [ search ])
   return (
      <div>
         <input value={search} onChange={ev => setSearch(ev.target.value)} />
         <div className="container mx-auto py-3">
            {/* <InertiaLink href={route('admin.tags.create')}>New user</InertiaLink> */}
         </div>
         {/* <DataGrid
            className="rdg-light"
            columns={cols}
            rows={tags.data}
            defaultColumnOptions={{
               sortable: true,
               resizable: true
            }}
            selectedRows={selectedRows}
            onSelectedRowsChange={setSelectedRows}
         /> */}

         {/* {JSON.stringify(tags)} */}
      </div>
   )
}
