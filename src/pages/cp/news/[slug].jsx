import dynamic from "next/dynamic";
import { Bootstrap } from "../../../../cp/src";
import { Radio } from "../../../../cp/src/components/atoms";
import { RadioField } from "../../../../cp/src/components/atoms/Radio";
import { Field, Select } from "../../../../cp/src/components/molecules";
import { Field as FormikField } from 'formik'
import { Form } from "../../../../cp/src/components/organisms";

import { getPostFile, getPostFiles } from "../../../utils/posts";
const ContentEditor = dynamic(() => import('../../../../cp/src/components/organisms/ContentEditor/ContentEditor'), { ssr: false })
globalThis.self = globalThis
// import excuteQuery from "../../../db";
const statusOptions = [
   { label: 'Draft', value: 'draft' },
   { label: 'Pending', value: 'pending' },
   { label: 'Archived', value: 'archived' },
   { label: 'Active', value: 'active' },
]
export default function post({ post }) {
   const handleSubmit = () => {

   }
   return (
      <Bootstrap>
         {/* {JSON.stringify({ post })} */}
         <div className="border p-4 rounded-lg shadow-sm mb-6">
            <Form url="/api/posts" initialValues={post} primaryAction={{ title: 'Create post', onClick: handleSubmit }}>
               {/* <Form.Field name={'title'} /> */}
               <Field required={true} name={'title'} label={'Title'} />
               <Field required={true} name={'slug'} label={'Slug'} />
               <Field required={false} name={'description'} label={'Description'} Component={ContentEditor} />
               <Field required={false} name={'image_url'} label={'Featured image'} />
               <div className="mb-3">
                  <label htmlFor="">Status</label>
                  <FormikField as={'select'} name={'status'} className="form-select w-full h-4">
                     {statusOptions?.map(op => (
                     <option key={op.value} value={op.value}>{op.label}</option>
                     ))}
                  </FormikField>
               </div>
               {/* <Field required={false} name={'status'} label={'Status'} Component={RadioField} inputProps={{ options: statusOptions }} >
               </Field> */}
               <Form.Actions submitLabel="Update post" />
            </Form>
         </div>
      </Bootstrap>
   )
}

export async function getStaticPaths() {
   // const slugs = paths
   let slugs = getPostFiles()
   slugs = slugs?.map(slg => {
      return {
         params: { slug: slg.slug }
      }
   })
   console.log({ slugs })

   return {
     paths: slugs,
     fallback: true,
   }
}


export async function getStaticProps(context) {
   console.info({ context })
   const slug = context.params.slug
   const post = getPostFile(slug)
   console.log({post})
   return {
     props: {
      // paths: slugs,
      post: JSON.parse(JSON.stringify(post)),
      fallback: true,
     }, // will be passed to the page component as props
   }
}
