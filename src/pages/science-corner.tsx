import styled from "@emotion/styled";
import AppTemplate from "../components/templates/AppTemplate";
import Section from '../components/atoms/Section'
import {getAllCategories} from "../utils/categories";
import Link from "next/link";

const StyledPage = styled(AppTemplate)``

export default function ScienceCorner({ categories, }) {
   return (
      <StyledPage title={'Science Corner'}>
         <Section className="py-10">
            <div className="grid grid-cols-2 gap-6 md:w-10/12 mx-auto " >
               {categories?.map((cat, catIndex) => (
                  <Link href={`/blog/${cat.slug}`} key={`cat_${catIndex}`} >
                     <div className="grid_col bg-blue-600 text-white flex items-center justify-center p-10" >{cat.title}</div>
                  </Link>
               ))}
            </div>
         </Section>
      </StyledPage>
   )
}

ScienceCorner.defaultProps = {
   categories: [],
}

export async function getStaticProps(context) {
   let categories = getAllCategories()
   return {
      props: {
         categories: JSON.parse(JSON.stringify(categories)),
      }, // will be passed to the page component as props
   }
}