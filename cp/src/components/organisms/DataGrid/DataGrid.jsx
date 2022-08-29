import React from 'react';
import ReactDataGrid from 'react-data-grid';
import { ErrorBoundary } from '../../molecules';

const columns = [
   { key: 'id', name: 'ID' },
   { key: 'title', name: 'Title' }
];

const rows = [
   { id: 0, title: 'Example' },
   { id: 1, title: 'Demo' }
];

export default function DataGrid() {
   return (
      <ErrorBoundary>
         <ReactDataGrid columns={columns} rows={rows} />
      </ErrorBoundary>
   );
}
