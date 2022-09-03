import { Bootstrap } from "../../../../cp/src";
import { Field } from "../../../../cp/src/components/molecules";
import { ContentEditor, Form } from "../../../../cp/src/components/organisms";
import excuteQuery from "../../../db";

export default function create({ post }) {
   function handleSubmit() {
      alert('sdf')
   }
   return (
      <Bootstrap>
         {/* {JSON.stringify({ post })} */}
         <div className="border p-4 rounded-lg shadow-sm mb-6">
            <Form url="/api/posts" primaryAction={{ title: 'Create post', onClick: handleSubmit }}>
               {/* <Form.Field name={'title'} /> */}
               <Field required={true} name={'title'} label={'title'} />
               <Field required={true} name={'slug'} label={'slug'} />
               {/* <Field required={false} name={'description'} label={'description'} Component={ContentEditor} /> */}
               <Field required={true} name={'author_name'} label={'author_name'} />
               <Field required={false} name={'author_bio'} label={'author_bio'} />
               <Field required={false} name={'status'} label={'status'} />
               <Form.Actions />
            </Form>
         </div>
      </Bootstrap>
   )
}

export async function getStaticProps(context) {
   console.log('context: ', { context })
   const data = await excuteQuery({
      query: "SELECT * FROM posts WHERE id = ?",
      values: [ 1 ],
   })

   const post = data[0]
   console.dir({ post, })
   return {
     props: {
      // paths: slugs,
      post: JSON.parse(JSON.stringify(post)),
      fallback: true,
     }, // will be passed to the page component as props
   }
}
