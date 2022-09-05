import { Bootstrap } from "../../../cp/src";
import { Field } from "../../../cp/src/components/molecules";
import { Form } from "../../../cp/src/components/organisms";
import { getSettings } from "../../utils/settings";

const SocialLinksForm = ({ initialValues }) => {
   return (
      <Form url={`/api/settings`} initialValues={initialValues}>
         <Field name="logo_url" label={'Logo URL'} />
         <Field name="email" label={'Email'} />
         <Field name="phone_number" label={'Contact number'} />
         <Field name="linkedin_url" label={'Linkedin URL'} />
         <Field name="twitter_url" label={'Twitter URL'} />
         <Field name="facebook_url" label={'Facebook URL'} />
         <Field name="instagram_url" label={'Instagram URL'} />
         <Field name="youtube_url" label={'Youtube URL'} />
         <Form.Actions submitLabel="Save settings" />
      </Form>
   )
}

export default function settings({ values }) {
   return (
      <Bootstrap>
         {/* <PageHeader title={''} /> */}
         <SocialLinksForm initialValues={values} />
      </Bootstrap>
   )
}


export async function getStaticProps(context) {
   const settings = getSettings()
   console.dir({ settings })
   return {
     props: {
      values: JSON.parse(JSON.stringify(settings))
     }, // will be passed to the page component as props
   }
}
