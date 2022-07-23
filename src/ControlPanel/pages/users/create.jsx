import { Page } from "../../components/templates";

export default function create({ team, errors, ...props }) {
   // const { props: { errors  }} = usePage()
   function onSubmit(e) {
      e.preventDefault()

   }
   return (
      <Page title={'User'}>
         <form onSubmit={onSubmit}>
            <input name={'title'} />
            <button>Submit</button>
         </form>
         {/* {JSON.stringify({ team })} */}
         {JSON.stringify(errors)}
      </Page>
   )
}
