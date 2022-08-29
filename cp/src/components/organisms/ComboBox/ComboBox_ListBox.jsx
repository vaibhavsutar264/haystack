import { useListBox, useOption } from '@react-aria/listbox';
import React from 'react';

export default function ComboBox_ListBox(props) {
   let ref = React.useRef();
   let { listBoxRef = ref, state } = props;
   let { listBoxProps } = useListBox(props, state, listBoxRef);

   return (
      <ul
         {...listBoxProps}
         ref={listBoxRef}
         className={"ComboBox__list"}
      >
         {[...state.collection].map((item) => (
            <Option
               key={item.key}
               item={item}
               state={state}
            />
         ))}
      </ul>
   );
}

function Option({ item, state }) {
   let ref = React.useRef();
   let { optionProps, isSelected, isFocused, isDisabled } = useOption(
      { key: item.key },
      state,
      ref
   );

   let backgroundColor;
   let color = 'black';

   if (isSelected) {
      backgroundColor = 'var(--primary-color)';
      color = 'white';
   } else if (isFocused) {
      backgroundColor = 'var(--dark-3)';
   } else if (isDisabled) {
      backgroundColor = 'transparent';
      color = 'var(--dark-3)';
   }

   return (
      <li
         {...optionProps}
         ref={ref}
         style={{
            background: backgroundColor,
            color: color,
            padding: '2px 5px',
            outline: 'none',
            cursor: 'pointer'
         }}
      >
         {item.rendered}
      </li>
   );
}
