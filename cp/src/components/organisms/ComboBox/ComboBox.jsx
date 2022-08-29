/* eslint-disable react/jsx-pascal-case */
import StyledComboBox from "./StyledComboBox";
import { Item } from '@react-stately/collections';
import { useButton } from '@react-aria/button';
import { useComboBoxState } from '@react-stately/combobox';
import { useComboBox } from '@react-aria/combobox';
import { useFilter } from '@react-aria/i18n';

// Reuse the ListBox and Popover from your component library. See below for details.
import React from "react";
import ComboBox_ListBox from "./ComboBox_ListBox";
import ComboBox_Popover from "./ComboBox_Popover";
import { IconButton, TextInput } from "../../atoms";


export default function ComboBox(props) {
   // Setup filter function and state.
   let { contains } = useFilter({ sensitivity: 'base' });
   let state = useComboBoxState({ ...props, defaultFilter: contains });

   // Setup refs and get props for child elements.
   let buttonRef = React.useRef(null);
   let inputRef = React.useRef(null);
   let listBoxRef = React.useRef(null);
   let popoverRef = React.useRef(null);

   let { buttonProps: triggerProps, inputProps, listBoxProps, labelProps } = useComboBox({
            ...props,
            inputRef,
            buttonRef,
            listBoxRef,
            popoverRef
         },
         state
      );

   // Call useButton to get props for the button element. Alternatively, you can
   // pass the triggerProps to a separate Button component using useButton
   // that you might already have in your component library.
   let { buttonProps } = useButton(triggerProps, buttonRef);
   return (
      <StyledComboBox>
         <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
            <label {...labelProps}>{props.label}</label>
            <div style={{ position: 'relative', display: 'inline-block' }}>
               <TextInput
                  {...inputProps}
                  ref={inputRef}
                  append={() => (
                     <IconButton
                        name={'chevronDown'}
                        size="sm"
                        {...buttonProps}
                        ref={buttonRef}
                     />
                  )}
               />
               {state.isOpen &&
                  (
                     <ComboBox_Popover
                        popoverRef={popoverRef}
                        isOpen={state.isOpen}
                        onClose={state.close}
                     >
                        <ComboBox_ListBox
                           {...listBoxProps}
                           listBoxRef={listBoxRef}
                           state={state}
                        />
                     </ComboBox_Popover>
                  )}
            </div>
         </div>
      </StyledComboBox>
   )
}

ComboBox.Item = Item
ComboBox.defaultProps = {
   allowsCustomValue: true,
   menuTrigger: 'focus'
}
