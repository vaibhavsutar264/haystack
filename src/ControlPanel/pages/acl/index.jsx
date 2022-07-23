// import { InertiaLink } from '@inertiajs/inertia-react';
import { Item } from '@react-stately/collections';
import { useAsyncList } from '@react-stately/data';
import { Row, Cell, Column, TableBody, TableHeader } from '@react-stately/table';
import React from 'react'
import { CollectionToolbar, Table } from '../../components/oragnisms';
import { Page } from '../../components/templates'
import { route } from '../../utils';

export default function acl({ roles }) {
   let [selectedKeys, setSelectedKeys] = React.useState(new Set([2]));

   let list = useAsyncList({
      async load({ signal }) {
         let res = await fetch(`https://swapi.py4e.com/api/people/?search`, {
            signal
         });
         let json = await res.json();
         return {
            items: roles?.data
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
   return (
      <Page title={'Roles & permissions'}>
         <CollectionToolbar
            selectedRows={selectedKeys}
            actions={[
               {
                  key: 'create',
                  label: 'New user',
                  children: (
                     <button>Click to new</button>
                  )
               },
               {
                  key: 'delete',
                  label: 'Delete',
                  children: (
                     <button>Delete selected</button>
                  )
               },
            ]}
            onAction={actionName => alert('Action: ' + actionName)}
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
               pagination={roles}
               selectedKeys={selectedKeys}
               onSelectionChange={setSelectedKeys}

            >
               <TableHeader>
                  <Column key={'title'} allowsSorting>Title</Column>
                  <Column key={'description'} allowsSorting>Description</Column>
                  <Column key={'created_at'} allowsSorting>Created at</Column>
                  <Column key={'updated_at'} allowsSorting>Updated at</Column>
                  {/* <Column allowsSorting>Date Modified</Column> */}
               </TableHeader>
               <TableBody items={list.items}>
                  {(item) => (
                     <Row key={item.name}>
                        <Cell >
                           {/* <InertiaLink className='text-blue-700' href={route('admin.roles.show', item.id)}>{item.title}</InertiaLink> */}
                        </Cell>
                        <Cell >{item.description}</Cell>
                        <Cell >{item.created_at}</Cell>
                        <Cell >{item.updated_at}</Cell>
                        {/* {(columnKey) => <Cell textValue={item[columnKey]} >{item[columnKey]}</Cell>} */}
                     </Row>
                  )}
               </TableBody>
            </Table>
         </Page.Section>
      </Page>
   )
}
