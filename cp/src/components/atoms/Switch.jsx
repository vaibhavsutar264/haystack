import { useSwitch } from '@react-aria/switch';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToggleState } from '@react-stately/toggle';
import { useFocusRing } from '@react-aria/focus';
import React from 'react';
import styled from '@emotion/styled';

const StyledSwitch = styled.div`
   margin-bottom: 0.5rem;
   label {
      display: flex;
      align-items: center;
      cursor: default;
      user-select: none;
      svg {
         margin-right: 4px;
         transform: scale(1.2);
         cursor: pointer;
         rect, circle {
            transition: all .2s ease;
         }
      }
   }
`

export default function Switch(props) {
   let state = useToggleState(props);
   let ref = React.useRef();
   let { inputProps } = useSwitch(props, state, ref);
   let { isFocusVisible, focusProps } = useFocusRing();

   return (
      <StyledSwitch>
         <label>
            <VisuallyHidden>
               <input {...inputProps} {...focusProps} ref={ref} />
            </VisuallyHidden>
            <svg
               width={40}
               height={24}
               aria-hidden="true"
               >
               <rect
                  x={4}
                  y={4}
                  width={32}
                  height={16}
                  rx={8}
                  fill={state.isSelected ? 'var(--primary-color)' : 'gray'} />
               <circle
                  cx={state.isSelected ? 28 : 12}
                  cy={12}
                  r={5}
                  fill="white" />
               {isFocusVisible &&
                  <rect
                     x={1}
                     y={1}
                     width={38}
                     height={22}
                     rx={11}
                     fill="none"
                     stroke="orange"
                     strokeWidth={2} />
               }
            </svg>
            {props.children}
         </label>
      </StyledSwitch>
   );
}
