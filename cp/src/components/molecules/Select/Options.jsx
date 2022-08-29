import styled from '@emotion/styled';
import { useListBox, useOption } from '@react-aria/listbox';
import React from 'react';

const StyledListbox = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   list-style-type: none;
   max-height: 150px;
   overflow: auto;
   background: white;
   li {
      display: flex;
      line-height: 36px;
      height: 36px;
      padding: 0 1rem;
      outline: none;
      cursor: pointer
   }
`
export default function Options(props) {
   let ref = React.useRef();
   let { listBoxRef = ref, state } = props;
   let { listBoxProps } = useListBox(props, state, listBoxRef);

   return (
      <StyledListbox
         {...listBoxProps}
         ref={listBoxRef}
      >
         {[...state.collection].map((item) => (
            <Option
               key={item.key}
               item={item}
               state={state}
            />
         ))}
      </StyledListbox>
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
         }}
      >
         {item.rendered}
      </li>
   );
}
