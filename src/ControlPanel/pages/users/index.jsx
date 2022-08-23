import React from 'react'
// import { Inertia } from "@inertiajs/inertia";
// import { InertiaLink } from "@inertiajs/inertia-react";
import DataGrid, { useRowSelection } from 'react-data-grid';
import { useEffect, useState } from "react";
import { Inertia } from '@inertiajs/inertia';
import { Page } from '../../components/templates';
import { useMemo } from 'react';
import { CollectionToolbar, Table } from '../../components/oragnisms'
import { Cell, Column, Row, TableBody, TableHeader } from '@react-stately/table';
import { useAsyncList } from '@react-stately/data';

const SelectAllCell = ({
   value,
   isCellSelected,
   disabled,
   onChange,
   'aria-label': ariaLabel,
   'aria-labelledby': ariaLabelledBy
}) => {
   return (
      <input disabled={disabled} value={value} type={'checkbox'} checked={isCellSelected} onChange={onChange} />
   )
}

const SelectCell = ({
   value,
   isCellSelected,
   disabled,
   onChange,
   'aria-label': ariaLabel,
   'aria-labelledby': ariaLabelledBy
}) => {
   const [isRowSelected, onRowSelectionChange] = useRowSelection();
   return (
      <input disabled={disabled} value={value} type={'checkbox'} checked={isCellSelected} onChange={onChange} />
   )
}

export default function users({ users }) {
   const [search, setSearch] = useState(null)
   let [selectedKeys, setSelectedKeys] = React.useState(new Set([2]));

   let list = useAsyncList({
      async load({ signal }) {
         let res = await fetch(`https://swapi.py4e.com/api/people/?search`, {
            signal
         });
         let json = await res.json();
         return {
            items: users?.data
         };
      },
      async sort({ items, sortDescriptor }) {
         return {
            items: items.sort((a, b) => {
               let first = a[sortDescriptor.column];
               let second = b[sortDescriptor.column];
               let cmp = (parseInt(first) || first) < (parseInt(second) || second)
                  ? -1
                  : 1;
               if (sortDescriptor.direction === 'descending') {
                  cmp *= -1;
               }
               return cmp;
            })
         };
      }
   });
   if (!users) {
      return null
   }
   return (
      <Page title={'Users'}>
         <CollectionToolbar
            selectedRows={selectedKeys}
            onDeleteMany={rows => {

               console.log(Array.from(selectedKeys))
            }}
         />
         <Page.Section>
            <Table
               aria-label="Example static collection table"
               selectionMode="multiple"
               sortDescriptor={list.sortDescriptor}
               onSortChange={list.sort}
               pagination={users}
               selectedKeys={selectedKeys}
               onSelectionChange={setSelectedKeys}

            >
               <TableHeader>
                  <Column key={'name'} allowsSorting>Name</Column>
                  <Column key={'username'} allowsSorting>Username</Column>
                  <Column key={'email'} allowsSorting>Email</Column>
                  <Column key={'phone_number'} allowsSorting>Mobile number</Column>
                  <Column key={'created_at'} allowsSorting>Created at</Column>
                  <Column key={'updated_at'} allowsSorting>Updated at</Column>
                  {/* <Column allowsSorting>Date Modified</Column> */}
               </TableHeader>
               <TableBody items={list.items}>
                  {(item) => (
                     <Row key={item.name}>
                        <Cell key={'name'} allowsSorting>
                           {/* <InertiaLink href={route('admin.users.show', item.id)} className='hover:underline flex items-center gap-2 text-blue-600' style={{ width: '250px' }}>
                              <img className='w-8 h-8 rounded-full bg-gray-300' />
                              <div>
                                 {item.name}
                              </div>
                           </InertiaLink> */}
                        </Cell>
                        <Cell>{item.username}</Cell>
                        <Cell>{item.email}</Cell>
                        <Cell>{item.mobile_number}</Cell>
                        <Cell>{item.created_at}</Cell>
                        <Cell>{item.updated_at}</Cell>
                        {/* {(columnKey) => <Cell textValue={item[columnKey]} >{item[columnKey]}</Cell>} */}
                     </Row>
                  )}
               </TableBody>
            </Table>
         </Page.Section>
      </Page>
   )
}
