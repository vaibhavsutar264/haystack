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
`
export default function Section({ children, fromBg, toBg, ...props }) {
   const onScroll = (e) => {
      const bgColor = e.target.getAttribute('data-body-bg')
      document?.body?.setAttribute(`style`, `--current-bg-color: ${bgColor}`)
   }
   return (
      <InView onChange={onScroll} data-body-bg={toBg}>
         <StyledSection
            {...props}
            >
            <div className={`${props.containerClass} mx-auto`}>
               {children}
            </div>
         </StyledSection>
      </InView>
   )
}

Section.defaultProps = {
   containerClass: 'container'
}
