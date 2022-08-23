// import { Inertia } from "@inertiajs/inertia";
// import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Button, TextInput } from "../../components/atoms";
import { Page } from "../../components/templates";

export default function create({ message, errors, ...props }) {
   // const { props: { errors  }} = usePage()
   function onSubmit(e) {
      e.preventDefault();
      // if (message?.id) {
      //    Inertia.post(route('admin.messages.update', message.id), new FormData(e.target))
      // } else {
      //    Inertia.post(route('admin.messages.store'), new FormData(e.target))
      // }
   }
   return (
      <Page title={"Message"}>
         <Page.Section>
            <form onSubmit={onSubmit} className="md:w-6/12">
               {/* {JSON.stringify(message)} */}
               <div className="mb-4">
                  <label>Order ID</label>
                  <TextInput name={"order_id"} value={message.order_id} />
               </div>
               <div className="mb-4">
                  <label>From name</label>
                  <TextInput name={"from_name"} value={message.from_name} />
               </div>
               <div className="mb-4">
                  <label>From email</label>
                  <TextInput name={"from_email"} value={message.from_email} />
               </div>
               <div className="mb-4">
                  <label>From mobile number</label>
                  <TextInput
                     name={"from_mobile_number"}
                     value={message.from_mobile_number}
                  />
               </div>
               <div className="mb-4">
                  <label>Receipent name</label>
                  <TextInput
                     name={"receipent_name"}
                     value={message.receipent_name}
                  />
               </div>
               <div className="mb-4">
                  <label>Receipent email</label>
                  <TextInput
                     name={"receipent_email"}
                     value={message.receipent_email}
                  />
               </div>
               <div className="mb-4">
                  <label>Receipent mobile number</label>
                  <TextInput
                     name={"receipent_mobile_number"}
                     value={message.receipent_mobile_number}
                  />
               </div>
               <div className="mb-20">
                  <Button title={"Submit"} onClick={onSubmit} />
               </div>
            </form>
         </Page.Section>
      </Page>
   );
}
