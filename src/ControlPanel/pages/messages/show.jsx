// import { Inertia } from "@inertiajs/inertia";
// import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Page } from "../../components/templates";
import PageHeader from "../../widgets/PageHeader";

export default function show({ message, errors, ...props }) {
   // const { props: { errors  }} = usePage()
   return (
      <Page title={`Message for #${message.order_id}`}>
         <Page.Section>
            {/* <PageHeader /> */}
            <>
               {/* This example requires Tailwind CSS v2.0+ */}
               <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                     <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Message for #{message.order_id}
                     </h3>
                  </div>
                  <div className="border-t border-gray-200">
                     <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">{'Receipent name'}</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {message.receipent_name}
                           </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">{'Receipent email'}</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {message.receipent_email}
                           </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">{'Receipt mobile number'}</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {message.receipent_mobile_number}
                           </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">
                              {'Order ID'}
                           </dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {message.order_id}
                           </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">{'Attachment (audio/video)'}</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {message.attachment_url}
                           </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">
                              {'Created at'}
                           </dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {message.created_at}
                           </dd>
                        </div>
                     </dl>
                  </div>
               </div>
            </>

         </Page.Section>
      </Page>
   )
}
