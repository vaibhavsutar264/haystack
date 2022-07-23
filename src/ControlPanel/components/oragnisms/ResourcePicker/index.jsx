export default function ResourcePicker({ }) {
   return (
      <div className="bg-white">
         <ul role="list" className="p-6 divide-y divide-slate-200">
            <li className="py-4 flex first:pt-0 last:pb-0">
               <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
               <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-slate-900">Kristen Ramos</p>
                  <p className="text-sm text-slate-500 truncate">kristen.ramos@example.com</p>
               </div>
            </li>
            <li className="py-4 flex first:pt-0 last:pb-0">
               <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
               <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-slate-900">Floyd Miles</p>
                  <p className="text-sm text-slate-500 truncate">floyd.miles@example.com</p>
               </div>
            </li>
            <li className="py-4 flex first:pt-0 last:pb-0">
               <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
               <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-slate-900">Courtney Henry</p>
                  <p className="text-sm text-slate-500 truncate">courtney.henry@example.com</p>
               </div>
            </li>
            <li className="py-4 flex first:pt-0 last:pb-0">
               <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
               <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-slate-900">Ted Fox</p>
                  <p className="text-sm text-slate-500 truncate">ted.fox@example.com</p>
               </div>
            </li>
         </ul>
      </div>
   )
}
