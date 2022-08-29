import React from 'react'
import { useListBox, useOption } from '@react-aria/listbox';
import { useListState } from '@react-stately/list';
// import { Item } from '@react-stately/collections';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

const ListBox = (props) => {
   // Create state based on the incoming props
   let state = useListState(props);

   // Get props for the listbox element
   let ref = React.useRef();
   let { listBoxProps, labelProps } = useListBox(props, state, ref);
   let options = [...props.state?.collection]
   // console.log(options)
   return (
      <>
         <div {...labelProps}>{props.label}</div>
         <ul
            {...listBoxProps}
            ref={ref}
            style={{
               padding: 0,
               margin: '5px 0',
               listStyle: 'none',
               border: '1px solid gray',
               maxWidth: 250
            }}
         >
            {/* {JSON.stringify({ items: [...state.collection].map(row => row.rendered) })} */}
            {options.map((item) => (
               <Option
                  key={item.key}
                  item={item}
                  state={state}
               />
            ))}
         </ul>
      </>
   );
}

function Option({ item, state }) {
   // Get props for the option element
   let ref = React.useRef();
   let { optionProps, isSelected, isDisabled } = useOption(
      { key: item.key },
      state,
      ref
   );

   // Determine whether we should show a keyboard
   // focus ring for accessibility
   let { isFocusVisible, focusProps } = useFocusRing();

   return (
      <li
         {...mergeProps(optionProps, focusProps)}
         ref={ref}
         style={{
            background: isSelected ? 'blueviolet' : 'transparent',
            color: isSelected ? 'white' : null,
            padding: '2px 5px',
            outline: isFocusVisible ? '2px solid orange' : 'none'
         }}
      >
         {item.rendered}
      </li>
   );
}

// ListBox.Option = Option

export default ListBox
