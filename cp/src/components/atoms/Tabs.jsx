import { Item } from '@react-stately/collections';
import { useTab, useTabList, useTabPanel } from '@react-aria/tabs';
import { useTabListState } from '@react-stately/tabs';
import React from 'react';
import styled from '@emotion/styled';

const StyledTabs = styled.div`
   min-height: 150px;
   margin-bottom: 1.5rem;
   [role="tablist"] {
      display: flex;
      border-bottom: 1px solid var(--dark-2);
      max-width: 100vw;
      overflow: auto;

      [role="tab"] {
         outline: none;
         padding: 0.5rem 1rem;
         cursor: pointer;
         user-select: none;
         white-space: nowrap;
         &.disabled {
            cursor: not-allowed;
            opacity: 0.5;
         }
         &.selected {
            color: var(--primary-color);
            border-bottom: 3px solid var(--primary-color);
         }
      }
   }
`

export default function Tabs(props) {
   let state = useTabListState(props);
   let ref = React.useRef();
   let { tabListProps } = useTabList(props, state, ref);
   return (
      <StyledTabs >
         <div
            {...tabListProps}
            ref={ref}
         >
            {[...state.collection].map((item) => (
               <Tab key={item.key} item={item} state={state} />
            ))}
         </div>
         <TabPanel key={state.selectedItem?.key} state={state} />
      </StyledTabs>
   );
}

function Tab({ item, state }) {
   let { key, rendered } = item;
   let ref = React.useRef();
   let { tabProps } = useTab({ key }, state, ref);
   let isSelected = state.selectedKey === key;
   let isDisabled = state.disabledKeys.has(key);
   return (
      <div
         {...tabProps}
         ref={ref}
         className={`${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
      >
         {rendered}
      </div>
   );
}

function TabPanel({ state, ...props }) {
   let ref = React.useRef();
   let { tabPanelProps } = useTabPanel(props, state, ref);
   return (
      <div {...tabPanelProps} ref={ref} style={{ padding: '10px' }}>
         {state.selectedItem?.props.children}
      </div>
   );
}

Tabs.Item = Item
