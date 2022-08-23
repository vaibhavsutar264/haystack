import { useCheckbox } from "@react-aria/checkbox";
import {
   useTableColumnHeader,
   useTableSelectAllCheckbox,
} from "@react-aria/table";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useToggleState } from "@react-stately/toggle";
import { useRef } from "react";

export default function TableSelectAllCell({ column, state }) {
   let ref = useRef();
   let isSingleSelectionMode =
      state.selectionManager.selectionMode === "single";
   let { columnHeaderProps } = useTableColumnHeader(
      { node: column },
      state,
      ref
   );

   let { checkboxProps } = useTableSelectAllCheckbox(state);
   let inputRef = useRef(null);
   let { inputProps } = useCheckbox(
      checkboxProps,
      useToggleState(checkboxProps),
      inputRef
   );

   return (
      <th
         {...columnHeaderProps}
         ref={ref}
         className="border-b w-2 dark:border-slate-600 font-medium p-3 pl-6 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
         style={{ width: "20px" }}
      >
         {state.selectionManager.selectionMode === "single" ? (
            <VisuallyHidden>{inputProps["aria-label"]}</VisuallyHidden>
         ) : (
            <input {...inputProps} ref={inputRef} />
         )}
      </th>
   );
}
