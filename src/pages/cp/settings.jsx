import { Bootstrap } from "../../../cp/src";
import excuteQuery from "../../db";

export default function settings({ values }) {
   return (
      <Bootstrap>
         Settings
         {JSON.stringify({ values })}
      </Bootstrap>
   )
}


export async function getStaticProps(context) {
   const data = await excuteQuery({
      query: "SELECT * FROM settings"
   })
   // data.
   const settings = data
   console.dir({ settings })
   return {
     props: {
      values: JSON.parse(JSON.stringify(settings))
     }, // will be passed to the page component as props
   }
}
