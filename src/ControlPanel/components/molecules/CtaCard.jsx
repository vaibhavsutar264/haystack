import { InertiaLink } from "@inertiajs/inertia-react";

export default function CtaCard({ title, description, url, icon }) {
   return (
      <InertiaLink
         href={url}
         className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-gray-900/5 shadow-sm space-y-3 hover:bg-blue-500 hover:ring-blue-500"
      >
         <div className="flex items-center space-x-3">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-gray-500 group-hover:stroke-white" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg> */}
            <h3 className="text-gray-900 group-hover:text-white text-sm font-semibold">
               {title}
            </h3>
         </div>
         <p className="text-gray-500 group-hover:text-white text-sm">
            {description}
         </p>
      </InertiaLink>
   );
}
