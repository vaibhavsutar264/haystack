import React from "react";
// import { Inertia } from "@inertiajs/inertia";
// import { InertiaLink } from "@inertiajs/inertia-react";
// import DataGrid from 'react-data-grid';
import { useEffect, useState } from "react";
// import { Inertia } from '@inertiajs/inertia';
import { Page } from "../../components/templates";

export default function resources({ resources }) {
   const [search, setSearch] = useState(null);
   const [selectedRows, setSelectedRows] = useState([]);
   const cols = Object.keys(resources.data[0] ?? {}).map((ok) => ({
      key: ok,
      name: ok,
   }));
   useEffect(() => {
      if (search && search.length) {
         // Inertia.get(route('admin.resources.index', { q: search }))
      }
   }, [search]);
   return (
      <Page title={"resources"}>
         <Page.Section>
            <input
               value={search}
               onChange={(ev) => setSearch(ev.target.value)}
            />
            <div className="container mx-auto py-3">
               {/* <InertiaLink href={route('admin.resources.create')}>New Category</InertiaLink> */}
            </div>
            {/* <DataGrid
               className="rdg-light"
               columns={cols}
               rows={resources.data}
               defaultColumnOptions={{
                  sortable: true,
                  resizable: true
               }}
               selectedRows={selectedRows}
               onSelectedRowsChange={setSelectedRows}
            /> */}

            {/* {JSON.stringify(resources)} */}
         </Page.Section>
      </Page>
   );
}
