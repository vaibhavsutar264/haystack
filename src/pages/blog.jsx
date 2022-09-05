import React from "react";
import Template from "../Template";
import BlogListingPage from "../BlogListingPage";
import { getCategoryFile, getCategoryFiles } from "../utils/categories";
import { getSettings } from "../utils/settings";

function Blog({ categories }) {
   return (
      <>
         <Template>
            <BlogListingPage categories={categories} />
         </Template>
      </>
   );
}

export async function getStaticProps(context) {
   let cats = getCategoryFiles()
   const settings = getSettings()

   let categories = []
   cats?.map((pm) => {
      categories.push(getCategoryFile(pm.slug))
   })
   return {
     props: {
      categories: JSON.parse(JSON.stringify(categories)),
      settings: JSON.parse(JSON.stringify(settings))
     }, // will be passed to the page component as props
   }
}



export default Blog;
