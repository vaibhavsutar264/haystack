import React from 'react';
import { DismissButton, useOverlay } from '@react-aria/overlays';
import { FocusScope } from '@react-aria/focus';
import styled from '@emotion/styled';

const StyledPopover = styled.div`
   position: absolute;
   width: 100%;
   margin-top: -20px;
   border: 1px solid var(--dark-2);
   max-width: 300px;
   padding: 0.5rem 0;
   border-radius: 0.5rem;
   overflow: hidden;
   background: white;
`

export default function SelectMenu(props) {
   let ref = React.useRef();
   let {
      popoverRef = ref,
      isOpen,
      onClose,
      children
   } = props;

   // Handle events that should cause the popup to close,
   // e.g. blur, clicking outside, or pressing the escape key.
   let { overlayProps } = useOverlay({
      isOpen,
      onClose,
      shouldCloseOnBlur: true,
      isDismissable: true
   }, popoverRef);

   // Add a hidden <DismissButton> component at the end of the popover
   // to allow screen reader users to dismiss the popup easily.
   return (
      <FocusScope restoreFocus>
         <StyledPopover
            {...overlayProps}
            ref={popoverRef}>
            {children}
            <DismissButton onDismiss={onClose} />
         </StyledPopover>
      </FocusScope>
   );
}
