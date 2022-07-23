import { useFocusRing } from '@react-aria/focus';
import { useTableColumnHeader } from '@react-aria/table';
import { mergeProps } from '@react-aria/utils';
import { useRef } from 'react';

export default function TableColumnHeader({ column, state }) {
   let ref = useRef();
   let { columnHeaderProps } = useTableColumnHeader(
      { node: column },
      state,
      ref
   );
   let { isFocusVisible, focusProps } = useFocusRing();
   let arrowIcon = state.sortDescriptor?.direction === 'ascending' ? '▲' : '▼';

   return (
      <th
         {...mergeProps(columnHeaderProps, focusProps)}
         colSpan={column.colspan}
         className="border-b dark:border-slate-600 font-medium p-3 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
         style={{
            textAlign: column.colspan > 1 ? 'center' : 'left',
            outline: isFocusVisible ? '2px solid orange' : 'none',
            cursor: 'default'
         }}
         ref={ref}
      >
         <span className='whitespace-nowrap'>{column.rendered}</span>
         {column.props.allowsSorting &&
            (
               <span
                  aria-hidden="true"
                  style={{
                     padding: '0 2px',
                     visibility: state.sortDescriptor?.column === column.key
                        ? 'visible'
                        : 'hidden'
                  }}
               >
                  {arrowIcon}
               </span>
            )}
      </th>
   );
}
