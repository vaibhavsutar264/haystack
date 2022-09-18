import dynamic from "next/dynamic";
import { Bootstrap } from "../../../../cp/src";
import { ErrorBoundary, Field } from "../../../../cp/src/components/molecules";
import { Form } from "../../../../cp/src/components/organisms";
const ContentEditor = dynamic(() => import('../../../../cp/src/components/organisms/ContentEditor/ContentEditor'), { ssr: false })
import { Field as FormikField } from 'formik'

const statusOptions = [
   { label: 'Draft', value: 'draft' },
   { label: 'Pending', value: 'pending' },
   { label: 'Archived', value: 'archived' },
   { label: 'Active', value: 'active' },
]
export default function create({ news }) {
   function handleSubmit() {
      //alert('sdf')
   }
   return (
      <Bootstrap>
         {/* {JSON.stringify({ news })} */}
         <div className="border p-4 rounded-lg shadow-sm mb-6">
            <Form url="/api/news" primaryAction={{ title: 'Create news', onClick: handleSubmit }}>
               {/* <Form.Field name={'title'} /> */}
               <Field required={true} name={'title'} label={'Title'} />
               <Field required={true} name={'slug'} label={'Slug'} />
               <ErrorBoundary>
                  <Field required={true} name={'description'} label={'Description'} Component={ContentEditor} />
               </ErrorBoundary>
               <Field required={false} name={'image_url'} label={'Featured image'} />
               <Field required={true} name={'url'} label={'URL'} />
               <div className="mb-3">
                  <label htmlFor="">Status</label>
                  <FormikField as={'select'} name={'status'} className="form-select w-full h-4">
                     {statusOptions?.map(op => (
                     <option key={op.value} value={op.value}>{op.label}</option>
                     ))}
                  </FormikField>
               </div>
               <Form.Actions submitLabel="Save news" />
            </Form>
         </div>
      </Bootstrap>
   )
}

export async function getStaticProps(context) {

   return {
     props: {
      // paths: slugs,
      // post: JSON.parse(JSON.stringify(post)),
      fallback: true,
     }, // will be passed to the page component as props
   }
}
