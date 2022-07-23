import React from 'react'
// import { Inertia } from "@inertiajs/inertia";
// import { InertiaLink } from "@inertiajs/inertia-react";
// import DataGrid, { useRowSelection } from 'react-data-grid';
import { useEffect, useState } from "react";
import { Inertia } from '@inertiajs/inertia';
import { Page } from '../../components/templates';
import { useMemo } from 'react';
import { CollectionToolbar, Table } from '../../components/oragnisms'
import { Cell, Column, Row, TableBody, TableHeader } from '@react-stately/table';
import { useAsyncList } from '@react-stately/data';
import { route } from '../../utils';


export default function messages({ title, messages }) {
   const [search, setSearch] = useState(null)
   let [selectedKeys, setSelectedKeys] = React.useState(new Set([]));

   let list = useAsyncList({
      async load({ signal, filterText }) {
         console.log({ filterText })
         return {
            items: messages?.data
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
   if (!messages) {
      return null
   }
   return (
      <Page title={title}>
         <CollectionToolbar
            onSearch={list.setFilterText}
            selectedRows={Array.from(selectedKeys)}
            onDeleteMany={rows => {
               Inertia.post(route('admin.messages.delete_many', {
                  ids: Array.from(selectedKeys),
                  _method: 'DELETE'
               }))
               console.log(Array.from(selectedKeys))
            }}
         />
         <Page.Section>
            <Table
               aria-label="Messages"
               selectionMode="multiple"
               sortDescriptor={list.sortDescriptor}
               onSortChange={list.sort}
               pagination={messages}
               selectedKeys={selectedKeys}
               onSelectionChange={setSelectedKeys}
               onAction={key => alert(key)}
            >
               <TableHeader>
                  <Column key={'order_id'} allowsSorting>Order Id</Column>
                  <Column key={'from_name'} allowsSorting>From Name</Column>
                  <Column key={'from_email'} allowsSorting>From Email</Column>
                  <Column key={'from_phone'} allowsSorting>From Mobile no.</Column>
                  <Column key={'receipent_name'} allowsSorting>Receipent Name</Column>
                  <Column key={'receipent_email'} allowsSorting>Receipent Email</Column>
                  <Column key={'receipent_mobile_number'} allowsSorting>Receipent Mobile no.</Column>
                  <Column key={'attachment_url'} allowsSorting>Attachment</Column>
                  <Column key={'sent_at'} allowsSorting>Send at</Column>
                  <Column key={'read_at'} allowsSorting>Read at</Column>
                  <Column key={'created_at'} allowsSorting>Created at</Column>
                  <Column key={'updated_at'} allowsSorting>Updated at</Column>
                  {/* <Column allowsSorting>Date Modified</Column> */}
               </TableHeader>
               <TableBody items={list.items}>
                  {(item) => (
                     <Row key={item.id}>
                        <Cell key={'receipent_name'} allowsSorting>
                           {/* <InertiaLink href={route('admin.messages.show', item.id)} className='hover:underline flex items-center gap-2 text-blue-600' style={{ width: '250px' }}>
                              <div>
                                 {item.order_id ?? `${item.id}`}
                              </div>
                           </InertiaLink> */}
                           <div className='flex items-center gap-2 text-xs mt-1'>
                              {/* <InertiaLink></InertiaLink> */}
                              {/* <InertiaLink href={route('admin.messages.edit', item.id)} className='hover:underline  text-blue-800'>Edit</InertiaLink> */}
                              <a target={'_blank'} method='post' href={route('admin.messages.make_pdf', item.id)} className='hover:underline  text-gray-700'>Generate PDF</a>
                              {/* <InertiaLink method='post' href={route('admin.messages.send_mail', item.id)} className='hover:underline  text-gray-700'>Send mail</InertiaLink> */}
                           </div>
                        </Cell>
                        <Cell>{item.from_name}</Cell>
                        <Cell>{item.from_email}</Cell>
                        <Cell>{item.from_mobile_number}</Cell>
                        <Cell>{item.receipent_name}</Cell>
                        <Cell>{item.receipent_email}</Cell>
                        <Cell>{item.receipent_mobile_number}</Cell>
                        <Cell>{item.attachment_url}</Cell>
                        <Cell>{item.sent_at}</Cell>
                        <Cell>{item.read_at}</Cell>
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
