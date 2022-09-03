import { useTableHeaderRow } from '@react-aria/table';
import { useRef } from 'react';

export default function TableHeaderRow({ item, state, children }) {
   let ref = useRef();
   let { rowProps } = useTableHeaderRow({ node: item }, state, ref);

   return (
      <tr {...rowProps} ref={ref}>
         {children}
      </tr>
   );
}
