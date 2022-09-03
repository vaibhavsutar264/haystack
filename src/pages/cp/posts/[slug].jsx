import { Bootstrap } from "../../../../cp/src";
import { Field } from "../../../../cp/src/components/molecules";
import { Form } from "../../../../cp/src/components/organisms";
import { getPostFile, getPostFiles } from "../../../utils/posts";
// import excuteQuery from "../../../db";

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
               {/* <Field required={false} name={'description'} label={'description'} Component={ContentEditor} /> */}
               <div>
                  <Field required={true} name={'author_name'} label={'Author name'} />
                  <Field required={false} name={'author_bio'} label={'Author bio'} />
               </div>
               <Field required={false} name={'status'} label={'Status'} />
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
