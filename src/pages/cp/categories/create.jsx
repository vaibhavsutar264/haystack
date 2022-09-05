import { Bootstrap } from "../../../../cp/src";
import { Field } from "../../../../cp/src/components/molecules";
import { Form } from "../../../../cp/src/components/organisms";
const ContentEditor = dynamic(() => import('../../../../cp/src/components/organisms/ContentEditor/ContentEditor'))
// import excuteQuery from "../../../db";
import { Field as FormikField } from 'formik'
import dynamic from "next/dynamic";
import { getCategoryFiles } from "../../../utils/categories";
const statusOptions = [
   { label: 'Draft', value: 'draft' },
   { label: 'Pending', value: 'pending' },
   { label: 'Archived', value: 'archived' },
   { label: 'Active', value: 'active' },
]

export default function create({ post, categories }) {
   function handleSubmit() {
      // alert('sdf')
   }
   return (
      <Bootstrap>
         <div className="border p-4 rounded-lg shadow-sm mb-6">
            <Form url="/api/categories" primaryAction={{ title: 'Create post', onClick: handleSubmit }}>
               {/* <Form.Field name={'title'} /> */}
               <Field required={true} name={'title'} label={'Title'} />
               <Field required={true} name={'slug'} label={'Slug'} />
               <Field required={false} name={'description'} label={'Description'} Component={ContentEditor} />
               <Field required={true} name={'image_url'} label={'Featured image'} />
               <Field required={true} name={'meta_title'} label={'Meta title'} />
               <Field required={true} name={'meta_description'} label={'Meta description'} />
               <div className="mb-3">
                  <label htmlFor="">Parent Category</label>
                  <FormikField as={'select'} name={'parent_category'} className="form-select w-full h-4">
                     {categories?.map(op => (
                     <option key={op.slug} value={op.slug}>{op.title}</option>
                     ))}
                  </FormikField>
               </div>
               <div className="mb-3">
                  <label htmlFor="">Status</label>
                  <FormikField as={'select'} name={'status'} className="form-select w-full h-4">
                     {statusOptions?.map(op => (
                     <option key={op.value} value={op.value}>{op.label}</option>
                     ))}
                  </FormikField>
               </div>
               <Form.Actions submitLabel="Save category" />
            </Form>
         </div>
      </Bootstrap>
   )
}

export async function getStaticProps(context) {
   const categories = getCategoryFiles()
   return {
     props: {
      categories,
      // paths: slugs,
      fallback: true,
     }, // will be passed to the page component as props
   }
}
