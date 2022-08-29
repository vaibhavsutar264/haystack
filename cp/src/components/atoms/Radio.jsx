import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-aria/focus';
import { useRadioGroupState } from '@react-stately/radio';
import { useRadio, useRadioGroup } from '@react-aria/radio';
import React from 'react';
import styled from '@emotion/styled';

const StyledRadioGroup = styled.div`
   label {
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      margin-bottom: 0.2rem;
      svg {
         margin-right: 4px;
         margin-left: -4px;
         transform: scale(1.2);
         cursor: pointer;
         rect, circle {
            transition: all .2s ease;
         }
      }
   }
`

// RadioGroup is the same as in the previous example
let RadioContext = React.createContext(null);

export default function Radio(props) {
   let { children, label } = props;
   let state = useRadioGroupState(props);
   let { radioGroupProps, labelProps } = useRadioGroup(props, state);

   return (
      <StyledRadioGroup {...radioGroupProps}>
         <span {...labelProps}>{label}</span>
         <RadioContext.Provider value={state}>
            {children}
         </RadioContext.Provider>
      </StyledRadioGroup>
   )
}

function RadioItem(props) {
   let { children } = props;
   let state = React.useContext(RadioContext);
   let ref = React.useRef(null);
   let { inputProps } = useRadio(props, state, ref);
   let { isFocusVisible, focusProps } = useFocusRing();

   let isSelected = state.selectedValue === props.value;
   let strokeWidth = isSelected ? 6 : 2;

   return (
      <label >
         <VisuallyHidden>
            <input {...inputProps} {...focusProps} ref={ref} />
         </VisuallyHidden>
         <svg
            width={24}
            height={24}
            aria-hidden="true"
            style={{ marginRight: 4 }}>
            <circle
               cx={12}
               cy={12}
               r={8 - strokeWidth / 2}
               fill="none"
               stroke={isSelected ? 'var(--primary-color)' : 'gray'}
               strokeWidth={strokeWidth} />
            {isFocusVisible &&
               <circle
                  cx={12}
                  cy={12}
                  r={11}
                  fill="none"
                  stroke="var(--primary-color)"
                  strokeWidth={2} />
            }
         </svg>
         {children}
      </label>
   );
}

Radio.Item = RadioItem
