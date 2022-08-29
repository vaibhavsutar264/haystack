import styled from "@emotion/styled";
import { useMenuItem } from "@react-aria/menu";
import React from "react";
import { Icon } from "../../atoms";

const StyledMenuItem = styled.li`
   oulint: none;
   display: flex;
   gap: 0.5rem;
`

export default function MenuItem({ item, state, onAction, leftIcon, rightIcon }) {
   // Get props for the menu item element
   let ref = React.useRef();
   let isDisabled = state.disabledKeys.has(item.key);
   let isFocused = state.selectionManager.focusedKey === item.key;
   console.log({ leftIcon, rightIcon })

   let { menuItemProps } = useMenuItem({
      key: item.key,
      isDisabled,
      onAction
   }, state, ref);

   return (
      <StyledMenuItem
         {...menuItemProps}
         ref={ref}
         style={{
            background: isFocused ? 'var(--primary-color)' : 'transparent',
            color: isFocused ? 'white' : null,
            cursor: isDisabled ? 'default' : 'pointer'
         }}>
            {leftIcon && <Icon name={leftIcon} />}
            {item.rendered}
            {rightIcon && <rightIcon />}
      </StyledMenuItem>
   );
}
