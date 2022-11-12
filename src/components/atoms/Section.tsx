// @ts-nocheck
import styled from "@emotion/styled"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { InView } from "react-intersection-observer"

const StyledSection = styled(motion.section)`
   --container-size: 100%;
   @media screen and (min-width: 800px)
   {
      --container-size: 1200px;
   }
   @apply container
`
interface ISection {
   // children?: any,
   children?: any,
   onScroll?: Function,
   [x: string]: any;
}
interface ISectionTitleProps {
   variant: string,
}
interface ISectionProps {
   [x: string]: any;
}
export default function Section({ children, onScroll, ...props }: ISection) {
   return (
      <StyledSection
         {...props}
         >
         {children}
      </StyledSection>
   )
}

const Container = (props: ISectionProps) => {
   return (
      <div className={`section__container container ${props.className} px-3 md:px-0`}>
         {props.children}
      </div>
   )
}

Section.Container = Container

const Title = (props: ISectionTitleProps) => {
   return (
      <h3 className={`section__heading ${props.className}`}>
         {props.children}
      </h3>
   )
}

Section.Title = Title

Section.defaultProps = {
   // containerClass: 'container'
}
