import { HiddenSelect, useSelect } from '@react-aria/select';
import { Item } from '@react-stately/collections';
import { useButton } from '@react-aria/button';
import { useSelectState } from '@react-stately/select';

// Reuse the ListBox and Popover from your component library. See below for details.
// import { ListBox, Popover } from 'your-component-library';
import React from 'react';
import ListBox from './ListBox';

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
      <div style={{ position: 'relative', display: 'inline-block' }}>
         <div {...labelProps}>{props.label}</div>
         <HiddenSelect
            state={state}
            triggerRef={ref}
            label={props.label}
            name={props.name}
         />
         <button
            {...buttonProps}
            ref={ref}
            style={{ height: 30, fontSize: 14 }}
         >
            <span {...valueProps}>
               {state.selectedItem
                  ? state.selectedItem.rendered
                  : 'Select an option'}
            </span>
            <span
               aria-hidden="true"
               style={{ paddingLeft: 5 }}
            >
               ▼
            </span>
         </button>

         {state.isOpen &&
            (
               <div isOpen={state.isOpen} onClose={state.close}>
                  <ListBox
                     {...menuProps}
                     state={state}
                  />
               </div>
            )}
      </div>
   );
}

Select.Item = Item
