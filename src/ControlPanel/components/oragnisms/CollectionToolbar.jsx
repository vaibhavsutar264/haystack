import { Item } from "@react-stately/collections";
import { useEffect } from "react";
import { useState } from "react";
import { Button, TextInput } from "../atoms";
import ToolbarActions from "./ToolbarActions";

const SelectedFilters = () => {
   return <div className="mb-3"></div>;
};

export default function CollectionToolbar({
   selectedRows,
   onDeleteMany,
   children,
   onAction,
   actions,
   onSearch,
}) {
   const [searchText, setSearchText] = useState("");
   useEffect(() => {
      onSearch && onSearch(searchText);
   }, [searchText]);
   return (
      <div className="container mx-auto mb-4 flex flex-col gap-4">
         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="md:w-6/12">
               <div className="flex items-center gap-1 flex-1 paddingleft">
                  <input
                     onChange={({ target }) => setSearchText(target.value)}
                     placeholder="Search"
                     className="border dark:text-white dark:bg-slate-600 dark:focus:ring-slate-800 dark:hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-blue-600 font-medium px-3 py-1 leading-7 rounded-lg sm:w-auto w-full"
                  />
                  {/* <TextInput /> */}
                  {/* <Button title={'Filters'} /> */}
                  {/* <button className="py-2 px-4 leading-5 flex items-center justify-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                     </svg>
                     <span>Filter</span>
                  </button> */}
               </div>
            </div>
            <div className="md:w-6/12 flex justify-end gap-3">
               <ToolbarActions onAction={onAction}>
                  {actions && actions.map((act) => <Item {...act} />)}
                  {/* <Item key={'create'}>
                     <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add New</button>
                  </Item>
                  <Item key={'deleteMany'}>Delete</Item>
                  <Item key={'import'}>Import</Item>
                  <Item key={'export'}>Export</Item> */}
               </ToolbarActions>

               {onDeleteMany && (
                  <button
                     type="button"
                     onClick={onDeleteMany}
                     disabled={!selectedRows?.length}
                     className={`text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm w-10 h-10 flex items-center justify-center text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ${
                        !selectedRows?.length ? "bg-gray-400" : ""
                     }`}
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                     >
                        <path
                           fillRule="evenodd"
                           d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                           clipRule="evenodd"
                        />
                     </svg>
                  </button>
               )}
               {/* <button className="w-10 h-10 flex items-center justify-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
               </button> */}
            </div>
         </div>
         <SelectedFilters />
         {children}
      </div>
   );
}

CollectionToolbar.defaultProps = {
   // onAction: alert
};
