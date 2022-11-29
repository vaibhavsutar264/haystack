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
      min-height: calc(100vh - var(--safe-top-padding, 100px));
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
interface IHeroPros {
   title?: string|any,
   subtitle?: string|any,
   subtitle?: string,
   actions?: IHeroActionProps[]
}

const HeroSection = (props: IHeroPros) => {
   return (
      <StyledHeroSection className="HeroSection ">
         <Section.Container className="mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="grid__col"></div>
               <div className="grid__col bg-white py-8">
                  {props.title && (
                  <h3 className="mb-4 text-4xl font-extrabold">
                     {props.title}
                  </h3>
                  )}
                  <p className="font-bold text-muted">Stay on top with cutting edge technology</p>
                  {props.actions?.length ? (
                  <div className="mt-8 flex items-center gap-4">
                     {props.actions?.map((act, actIndex) => (
                     <Link href={'#'} key={`act_${actIndex}`} >
                        <a className="btn-primary">{act.title}</a>
                     </Link>
                     ))}
                  </div>
                  ): null}
               </div>
            </div>
         </Section.Container>
      </StyledHeroSection>
   )
}

export default HeroSection
