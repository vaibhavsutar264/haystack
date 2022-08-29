import { HiddenSelect, useSelect } from '@react-aria/select';

import { Item } from '@react-stately/collections';
import { useButton } from '@react-aria/button';
import { useSelectState } from '@react-stately/select';

// Reuse the ListBox and Popover from your component library. See below for details.
import React from 'react';
import SelectMenu from './SelectMenu';
import Options from './Options';
import styled from '@emotion/styled';
import { Button } from '../../atoms';

const StyledSelect = styled.div`
   position: 'relative';
   display: 'inline-block';
   button {
      &[aria-expanded="true"] {
         pointer-events: none;
      }
   }
`

export default function Select(props) {
   // Create state based on the incoming props
   let state = useSelectState(props);

   // Get props for child elements from useSelect
   let ref = React.useRef();
   let {
      labelProps,
      triggerProps,
      valueProps,
      menuProps
   } = useSelect(props, state, ref);

   // Get props for the button based on the trigger props from useSelect
   let { buttonProps } = useButton(triggerProps, ref);

   return (
      <StyledSelect>
         {/* <div {...labelProps}>{props.label}</div> */}
         <HiddenSelect
            state={state}
            triggerRef={ref}
            label={props.label}
            name={props.name}
         />
         <Button
            {...buttonProps}
            ref={ref}
            title={state.selectedItem ? state.selectedItem.rendered : 'Select an option'}
            rightElement={() => (
               <>
                  <span
                     aria-hidden="true"
                     style={{ paddingLeft: 5 }}
                  >
                     ▼
                  </span>
               </>
            )}
         />
            {/* <span {...valueProps}>
               {state.selectedItem
                  ? state.selectedItem.rendered
                  : 'Select an option'}
            </span> */}
         {/* </button> */}
         {state.isOpen &&
            (
               <SelectMenu isOpen={state.isOpen} onClose={state.close}>
                  <Options
                     {...menuProps}
                     state={state}
                  />
               </SelectMenu>
            )}
      </StyledSelect>
   );
}

Select.Item = Item
