// import { Inertia } from "@inertiajs/inertia";
// import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Page } from "../../components/templates";

export default function create({ team, errors, ...props }) {
   // const { props: { errors  }} = usePage()
   function onSubmit(e) {
      e.preventDefault()
      // Inertia.post(route('admin.resources.store'), new FormData(e.target))
   }
   return (
      <Page title={'Category'}>
         <Page.Section>
            <form onSubmit={onSubmit}>
               <input name={'title'} />
               <button>Submit</button>
            </form>
            {/* {JSON.stringify({ team })} */}
            {JSON.stringify(errors)}
         </Page.Section>
      </Page>
   )
}
