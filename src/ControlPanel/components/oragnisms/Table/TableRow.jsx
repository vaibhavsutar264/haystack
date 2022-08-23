import { useFocusRing } from '@react-aria/focus';
import { useTableRow } from '@react-aria/table';
import { mergeProps } from '@react-aria/utils';
import { useRef } from 'react';

export default function TableRow({ item, children, state }) {
   let ref = useRef();
   let isSelected = state.selectionManager.isSelected(item.key);
   let { rowProps, isPressed } = useTableRow({
      node: item
   }, state, ref);
   let { isFocusVisible, focusProps } = useFocusRing();

   return (
      <tr
         className={`${isSelected ? 'bg-blue-50': ''}`}
         style={{
            background: isSelected
               ? ''
               : isPressed
                  ? 'var(--spectrum-global-color-gray-400)'
                  : item.index % 2
                     ? 'var(--spectrum-alias-highlight-hover)'
                     : 'none',
            color: isSelected ? 'white' : null,
            outline: isFocusVisible ? '2px solid orange' : 'none'
         }}
         {...mergeProps(rowProps, focusProps)}
         ref={ref}>
         {children}
      </tr>
   );
}
