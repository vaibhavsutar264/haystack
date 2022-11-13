// @ts-nocheck
import Section from "../atoms/Section"
import styled from "@emotion/styled";
import Link from "next/link";
import PostItem from "../molecules/PostItem";

const StyledComponent = styled(Section)`
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

interface IPostItemProps {
   title: string,
   description: string,
   thumbnailUrl: string,
   onClick?: Function,
   url?: string,
}

interface ISectionPros {
   title?: string|any,
   subtitle?: string|any,
   subtitle?: string,
   actions?: IHeroActionProps[],
   posts?: IPostItemProps[],
}

const SectionPosts = (props: ISectionPros) => {
   return (
      <StyledComponent className="SectionPosts ">
         <Section.Container className="container mx-auto py-12">
            <div className="w-50">
               <h3 className="section-heading">
               {props.title ?? 'In the news'}
               </h3>
               <div className={`grid grid-cols-2 md:grid-cols-${props.posts?.length ?? 4}  gap-4`}>
                  {props.posts?.map((postItem, postItemIndex) => (
                  <div className="grid__col" key={`postItemIndex_${postItemIndex}`}>
                     <PostItem
                        title={postItem.title}
                        thumbnailUrl={postItem.thumbnailUrl}
                        description={postItem.description}
                        url={postItem.url}
                     />
                  </div>
                  ))}
               </div>
            </div>

         </Section.Container>
      </StyledComponent>
   )
}

export default SectionPosts
