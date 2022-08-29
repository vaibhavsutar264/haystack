import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-aria/focus';
import React from 'react';
import { useToggleState } from '@react-stately/toggle';
import { useCheckbox } from '@react-aria/checkbox';
import styled from '@emotion/styled';

const StyledCheckbox = styled.div`
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

export default function Checkbox(props) {
   let state = useToggleState(props);
   let ref = React.useRef();
   let { inputProps } = useCheckbox(props, state, ref);
   let { isFocusVisible, focusProps } = useFocusRing();

   return (
      <StyledCheckbox className={`checkbox-control ${state.isSelected ? 'selected' : ''}`}>
         <label >
            <VisuallyHidden>
               <input {...inputProps} {...focusProps} ref={ref} />
            </VisuallyHidden>
            <svg
               width={24}
               height={24}
               aria-hidden="true"
               style={{ marginRight: 4 }}>
               <rect
                  x={state.isSelected ? 4 : 5}
                  y={state.isSelected ? 4 : 5}
                  width={state.isSelected ? 16 : 14}
                  height={state.isSelected ? 16 : 14}
                  fill={state.isSelected ? 'var(--primary-color)' : 'none'}
                  stroke={state.isSelected ? 'none' : 'gray'}
                  strokeWidth={2} />
               {state.isSelected &&
                  <path
                     transform="translate(7 7)"
                     d={`M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
               1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
               6A.999.999 0 0 1 3.788 9z`}
                  fill={state.isSelected ? 'white' : 'none'}
                  />
               }
               {isFocusVisible &&
                  <rect
                     x={1}
                     y={1}
                     width={22}
                     height={22}
                     fill="none"
                     stroke="var(--primary-color)"
                     strokeWidth={2} />
               }
            </svg>
            {props.children}
         </label>
      </StyledCheckbox>
   );
}
