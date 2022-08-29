import { useListBox, useOption,  } from '@react-aria/listbox';
import { useListState } from '@react-stately/list';
import { Item } from '@react-stately/collections';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import React from 'react';
import styled from '@emotion/styled';
import MediaItem from './MediaItem';

export default function MediaList(props) {
   // Create state based on the incoming props
   let state = useListState(props);
   // Get props for the listbox element
   let ref = React.useRef();
   let { listBoxProps, labelProps } = useListBox(props, state, ref);

   return (
      <div className='list-container'>
         {props.label && <h5 {...labelProps}>{props.label}</h5>}
         <ul
            {...listBoxProps}
            ref={ref}
            className={'list'}
         >
            {[...state.collection].map((item) => (
               <Option
                  key={item.key}
                  item={item}
                  state={state}
               />
            ))}
         </ul>
      </div>
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
            background: isSelected ? 'var(--dark-1)' : 'transparent',
            color: isSelected ? 'white' : null,
            outline: isFocusVisible ? '2px solid orange' : 'none'
         }}
      >
         <MediaItem
            item={item}
         />
      </li>
   );
}
MediaList.Item = Item
MediaList.defaultProps = {
   selectionMode: 'multiple'
}

{/* <ListBox label="Choose an option" selectionMode="single">
  <Item>One</Item>
  <Item>Two</Item>
  <Item>Three</Item>
</ListBox> */}
