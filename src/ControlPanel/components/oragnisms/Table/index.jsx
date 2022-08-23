import {
   Cell,
   Column,
   Row,
   TableBody,
   TableHeader,
   useTableState,
} from "@react-stately/table";
import { mergeProps } from "@react-aria/utils";
import { useRef } from "react";
import { useFocusRing } from "@react-aria/focus";
import { useTable } from "@react-aria/table";
import TableRowGroup from "./TableRowGroup";
import TableHeaderRow from "./TableHeaderRow";
import TableSelectAllCell from "./TableSelectAllCell";
import TableColumnHeader from "./TableColumnHeader";
import TableRow from "./TableRow";
import TableCheckboxCell from "./TableCheckboxCell";
import TableCell from "./TableCell";
import Pagination from "../Pagination";

export default function Table(props) {
   let { selectionMode, selectionBehavior, pagination } = props;
   let state = useTableState({
      ...props,
      showSelectionCheckboxes:
         selectionMode === "multiple" && selectionBehavior !== "replace",
   });

   let ref = useRef();
   let { collection } = state;
   let { gridProps } = useTable(props, state, ref);

   return (
      <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25 mb-6 shadow-sm">
         <div
            className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
            style={{ backgroundPosition: "10px 10px" }}
         />
         <div className="relative rounded-xl overflow-auto">
            <div className="shadow-sm overflow-auto my-6">
               <table
                  className="border-collapse table-auto w-full text-sm"
                  {...gridProps}
                  ref={ref}
                  style={{ borderCollapse: "collapse" }}
               >
                  <TableRowGroup
                     type="thead"
                     style={{
                        borderBottom:
                           "2px solid var(--spectrum-global-color-gray-800)",
                     }}
                  >
                     {collection.headerRows.map((headerRow) => (
                        <TableHeaderRow
                           key={headerRow.key}
                           item={headerRow}
                           state={state}
                        >
                           {[...headerRow.childNodes].map((column) =>
                              column.props.isSelectionCell ? (
                                 <TableSelectAllCell
                                    key={column.key}
                                    column={column}
                                    state={state}
                                 />
                              ) : (
                                 <TableColumnHeader
                                    key={column.key}
                                    column={column}
                                    state={state}
                                 />
                              )
                           )}
                        </TableHeaderRow>
                     ))}
                  </TableRowGroup>
                  <TableRowGroup type="tbody">
                     {[...collection.body.childNodes].map((row) => (
                        <TableRow key={row.key} item={row} state={state}>
                           {[...row.childNodes].map((cell) =>
                              cell.props.isSelectionCell ? (
                                 <TableCheckboxCell
                                    key={cell.key}
                                    cell={cell}
                                    state={state}
                                 />
                              ) : (
                                 <TableCell
                                    key={cell.key}
                                    cell={cell}
                                    state={state}
                                 />
                              )
                           )}
                        </TableRow>
                     ))}
                  </TableRowGroup>
               </table>
            </div>
            {pagination &&
               (pagination.next_page_url || pagination.prev_page_url) && (
                  <div className="px-6 pb-3">
                     <Pagination pagination={pagination} />
                  </div>
               )}
         </div>
      </div>
   );
}
