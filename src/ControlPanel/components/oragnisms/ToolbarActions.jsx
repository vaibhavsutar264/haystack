import React from "react";
import { useMenu, useMenuItem } from "@react-aria/menu";
import { useTreeState } from "@react-stately/tree";
import { Item } from "@react-stately/collections";
import { useFocus } from "@react-aria/interactions";
import { mergeProps } from "@react-aria/utils";

export default function ToolbarActions(props) {
   // Create state based on the incoming props
   let state = useTreeState({ ...props, selectionMode: "none" });

   // Get props for the menu element
   let ref = React.useRef();
   let { menuProps } = useMenu(props, state, ref);

   return (
      <ul {...menuProps} ref={ref} className="flex items-center gap-2">
         {[...state.collection].map((item) => (
            <ActionItem
               key={item.key}
               item={item}
               state={state}
               onAction={props.onAction}
            />
         ))}
      </ul>
   );
}

export function ActionItem({ item, state, onAction }) {
   // Get props for the menu item element
   let ref = React.useRef();
   let isDisabled = state.disabledKeys.has(item.key);
   let isFocused = state.selectionManager.focusedKey === item.key;

   let { menuItemProps } = useMenuItem(
      {
         key: item.key,
         isDisabled,
         onAction,
      },
      state,
      ref
   );

   return (
      <li
         {...menuItemProps}
         ref={ref}
         className={`${isFocused ? "is-focused" : ""}`}
         style={{
            cursor: isDisabled ? "default" : "pointer",
         }}
      >
         {item.rendered}
      </li>
   );
}
