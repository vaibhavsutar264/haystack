import { useMenu, useMenuItem } from '@react-aria/menu';
import { useTreeState } from '@react-stately/tree';
import { Item } from '@react-stately/collections';
import { useFocus } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';
import React from 'react';
import MenuItem from './MenuItem';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import MenuSection from './MenuSection';

const StyledMenu = styled.ul`
   overflow: hidden;
   display: flex;

   ${props => {
      if (props.inline) {
         return css`
            flex-direction: row;
         `
      }
      return css`
         flex-direction: column;
      `
   }}
   li {
      border-radius: 6px;
      padding: 0.5rem 1rem;
      overflow: hidden;
   }
`

export default function Menu(props) {
   // Create state based on the incoming props
   let state = useTreeState({ ...props, selectionMode: 'none' });

   // Get props for the menu element
   let ref = React.useRef();
   let { menuProps } = useMenu(props, state, ref);

   return (
      <StyledMenu
         {...props}
         {...menuProps}
         ref={ref}
         style={{
            padding: 0,
            listStyle: 'none',
            maxWidth: 250
         }}>
         {[...state.collection].map(item => (
            <>
               <MenuItem
                  key={item.key}
                  item={item}
                  state={state}
                  {...item.props}
                  onAction={props.onAction} />
            </>
         ))}
      </StyledMenu>
   );
}

Menu.Item = Item
Menu.Section = MenuSection
