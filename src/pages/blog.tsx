import React from "react";
import BlogListingPage from "../BlogListingPage";
import AppTemplate from "../components/templates/AppTemplate";
import { getCategoryFile, getCategoryFiles } from "../utils/categories";
import { getSettings } from "../utils/settings";

function Blog({ categories }) {
   return (
      <AppTemplate>
         <BlogListingPage categories={categories} />
      </AppTemplate>
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
