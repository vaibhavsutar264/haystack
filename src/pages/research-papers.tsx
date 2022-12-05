/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import research_papers from "../json/research_papers.json";
import AppTemplate from "../components/templates/AppTemplate";

import styled from "@emotion/styled";
import Section from '../components/atoms/Section'

import ShareButton from "../components/molecules/ShareButton";
import { dateFormat } from "../utils/index";
import { orderBy } from "lodash";

const StyledHome = styled(AppTemplate)`

`

const PostItem = (props) => {
   return (
      <div>
         <figure className="flex md:flex-row flex-col gap-4 items-center">
            <div className="md:w-4/12 ">
               <div className="aspect-w-16 aspect-h-9">
                  <img src={props.image_url} alt="" className="w-full object-cover" />
               </div>
            </div>
            <figcaption className="flex-1">
               {/* {JSON.stringify({ props })} */}
               <div className="flex justify-end mb-4 md:-mt-6">
                  <div>
                     <ShareButton
                        title={props?.title}
                        url={props.url}
                     />
                  </div>
               </div>
               <p className="mb-3 w-10/12">
                  <a href={props.url} className="hover:underline underline-offset-2 text-blue-600" target="_blank">
                  {props.title}
                  </a>
               </p>
               <p className="mb-6 text-sm w-7/12">
                  {props.reference}
               </p>
               <p className="font-semibold">
               {dateFormat(props.date)}
               </p>
            </figcaption>
         </figure>
      </div>
   )
}


export default function ResearchPapers({ settings }) {
   return (
      <StyledHome settings={settings}>
         <Section className="">
            <Section.Container className="container mx-auto py-12">
               <h3 className="text-3xl font-bold text-blue-600 mb-4 md:mb-8">
                  RESEARCH PAPERS
               </h3>
               <ol className="flex flex-col gap-8 mb-6">
                  {orderBy(research_papers.data, 'date', 'desc')?.map((rp, rpIndex) => (
                  <li key={`lis_${rpIndex}`}>
                     <PostItem {...rp} />
                  </li>
                  ))}
               </ol>
               {/* <div className="flex justify-end">
                  <div>
                     <span>1 / 12 ...................</span>
                     <Link href="/">
                     View all
                     </Link>
                  </div>
               </div> */}
            </Section.Container>
         </Section>


      </StyledHome>
   )
}


