import { useFocusRing } from '@react-aria/focus';
import { useTableCell } from '@react-aria/table';
import { mergeProps } from '@react-aria/utils';
import { useRef } from 'react';

export default function TableCell({ cell, state }) {
   let ref = useRef();
   let { gridCellProps } = useTableCell({ node: cell }, state, ref);
   let { isFocusVisible, focusProps } = useFocusRing();

   return (
      <td
         {...mergeProps(gridCellProps, focusProps)}
         className="border-b border-slate-100 dark:border-slate-700 p-3 text-slate-500 dark:text-slate-400"
         style={{
            outline: isFocusVisible ? '2px solid orange' : 'none',
            cursor: 'default'
         }}
         ref={ref}
      >
         <div className='whitespace-nowrap'>
            {cell.rendered}
         </div>
      </td>
   );
}
