// import { InertiaLink } from "@inertiajs/inertia-react";
import { route } from "../../utils";
import Headroom from 'react-headroom'

const Navicon = () => {
   return (
      <div className="Navicon bg-transparent" style={{ 'aspect-ratio': '21/9' }}>
         {/* <InertiaLink href={route('admin.dashboard')}>
            <img src={'/img/logo-final.png'} className="h-10" alt="Logo" />
         </InertiaLink> */}
      </div>
   )
}

const Menus = () => {
   return (
      <nav className="flex items-center ">
         <ol className="flex-1 flex items-center gap-3">
            <li>
               {/* <InertiaLink href={route('admin.dashboard')} className="px-3 py-1 leading-6 rounded-lg hover:text-gray-900 hover:bg-slate-100">
                  Home
               </InertiaLink> */}
            </li>
            <li>
               {/* <InertiaLink href={route('admin.messages.index')} className="px-3 py-1 leading-6 rounded-lg hover:text-gray-900 hover:bg-slate-100">
                  Messages
               </InertiaLink> */}
            </li>
            {/* <li>
               <InertiaLink href={route('admin.acl')} className="px-3 py-1 leading-6 rounded-lg hover:text-gray-900 hover:bg-slate-100">
                  Access Control
               </InertiaLink>
            </li> */}
         </ol>
      </nav>
   )
}

const NotificationsDrawer = () => {
   return (
      <div>
         {/* <InertiaLink href={route('admin.notifications')}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
               <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
         </InertiaLink> */}
      </div>
   )
}

const NavbarRight = () => {
   const user = window.user
   return (
      <div className="flex items-center gap-1 text-gray-600">
         {/* <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
         </svg> */}
         <div className="flex-1 cursor-pointer user-select-none admin-header-header-jsx">
            {user?.name}
         </div>
         <div className="md:ml-4 flex items-center gap-2 logout-header-header-jsx">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg> */}
            {/* <InertiaLink href="/logout" method="post" >Logout</InertiaLink> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
         </div>
      </div>
   )
}

export default function Header() {
   // const
   return (
      <Headroom>
         <nav className="background-color-for-header-jsx-file-header border-b border-gray-200">
            <div className="container mx-auto py-3 px-3 md:px-0">
               <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div className="md:w-32 flex items-center justify-between">
                     <Navicon />
                     <button type="button" className="block md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                           <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                     </button>
                  </div>
                  <div className="flex-1">
                     <Menus />
                  </div>
                  <div className="w-auto flex items-center gap-3 header-jsx-file-navbar-right">
                     {/* <NotificationsDrawer /> */}
                     <NavbarRight />
                  </div>
               </div>
            </div>
         </nav>
      </Headroom>
   )
}
