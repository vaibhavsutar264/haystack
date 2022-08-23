// import { InertiaLink } from '@inertiajs/inertia-react';
import { useAsyncList } from "@react-stately/data";
import {
   Row,
   Cell,
   Column,
   TableBody,
   TableHeader,
} from "@react-stately/table";
import React from "react";
import { CollectionToolbar, Table } from "../../components/oragnisms";
import { Page } from "../../components/templates";
import { route } from "../../utils";

export default function show({ role }) {
   let [selectedKeys, setSelectedKeys] = React.useState(new Set());
   const { children: rolesData } = role;
   let roles = useAsyncList({
      async load({ signal }) {
         return {
            items: rolesData,
         };
      },
      async sort({ items, sortDescriptor }) {
         return {
            items: items.sort((a, b) => {
               let first = a[sortDescriptor.column];
               let second = b[sortDescriptor.column];
               let cmp =
                  (parseInt(first) || first) < (parseInt(second) || second)
                     ? -1
                     : 1;
               if (sortDescriptor.direction === "descending") {
                  cmp *= -1;
               }
               return cmp;
            }),
         };
      },
   });
   return (
      <Page title={role.title}>
         {/* <CollectionToolbar
            selectedRows={selectedKeys}
            onDeleteMany={rows => {
               console.log(Array.from(selectedKeys))
            }}
         /> */}
         <Page.Section>
            <CollectionToolbar>
               <Table
                  aria-label="Role subroles"
                  selectionMode="multiple"
                  sortDescriptor={roles.sortDescriptor}
                  onSortChange={roles.sort}
                  pagination={roles}
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
               >
                  <TableHeader>
                     <Column key={"title"} allowsSorting>
                        Title
                     </Column>
                     <Column key={"description"} allowsSorting>
                        Description
                     </Column>
                     <Column key={"created_at"} allowsSorting>
                        Created at
                     </Column>
                     <Column key={"updated_at"} allowsSorting>
                        Updated at
                     </Column>
                     {/* <Column allowsSorting>Date Modified</Column> */}
                  </TableHeader>
                  <TableBody items={roles.items}>
                     {(item) => (
                        <Row key={item.id}>
                           <Cell>
                              {/* <InertiaLink className='text-blue-700' href={route('admin.roles.show', item.id)}>{item.title}</InertiaLink> */}
                           </Cell>
                           <Cell>{item.description}</Cell>
                           <Cell>{item.created_at}</Cell>
                           <Cell>{item.updated_at}</Cell>
                           {/* {(columnKey) => <Cell textValue={item[columnKey]} >{item[columnKey]}</Cell>} */}
                        </Row>
                     )}
                  </TableBody>
               </Table>
            </CollectionToolbar>
         </Page.Section>
      </Page>
   );
}
