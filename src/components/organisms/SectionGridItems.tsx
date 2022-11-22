/* eslint-disable react/no-unknown-property */
// @ts-nocheck
import Section from "../atoms/Section"
import styled from "@emotion/styled";
import Link from "next/link";

const StyledHeroSection = styled(Section)`
background-image: url(https://images.unsplash.com/photo-1659535901690-ab95a8539929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
background-size: 60%;
background-repeat: no-repeat;
background-position: right center;
.section__container {
   min-height: calc(60vh - var(--safe-top-padding, 100px));
   display: flex;
   flex-direction: column;
   justify-content: center;
}
`

interface IHeroActionProps {
   title: string,
   variant: string,
   onClick?: Function,
   href?: string,
}

interface ISectionGridItem {
   thumbnailUrl?: string,
   title?: string,
   description?: string,
}

interface IHeroPros {
   gridClassName?: string,
   title?: string|any,
   subtitle?: string|any,
   subtitle?: string,
   actions?: IHeroActionProps[],
   items: ISectionGridItem[],
}


export const SectionGridItem = (props: ISectionGridItem) => {
   return (
      <figure className="flex gap-4 SectionGridItem">
         <picture className="w-20">
            <img src={props.thumbnailUrl} class="img" alt={props.title} className="w-100" />
         </picture>
         <figcaption className="flex-1">
            <h4 className="mb-4 font-extrabold text-lg">{props.title}</h4>
            <p className="text-sm">{props.description}</p>
         </figcaption>
      </figure>
   )
}

const SectionGridItems = (props: IHeroPros) => {
   return (
      <StyledHeroSection className="SectionGridItems bg-blue-800 text-white ">
         <Section.Container className="container mx-auto py-12">
            <h3 className="text-white section-heading section-heading--invert">
               {props.title}
            </h3>
            <p className="text-base text-white">
            {props.subtitle}
            </p>
            <div className={`grid ${props.gridClassName ?? 'grid-cols-1 md:grid-cols-3'}  gap-4 my-8`}>
               {props.items?.map((pitem, pitemIndex) => (
               <div className="grid__col" key={`pitemIndex_${pitemIndex}`}>
                  <SectionGridItem {...pitem} />
               </div>
               ))}
            </div>
         </Section.Container>
      </StyledHeroSection>
   )
}


export default SectionGridItems
