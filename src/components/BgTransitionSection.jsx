import styled from "@emotion/styled"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const sizes = {
   md: '2rem 0',
   lg: '3.5rem 0',
}
const StyledBgTransitionSection = styled(motion.section)`
   padding: ${sizes.md}
`

const exampleVariant = {
   visible: { opacity: 1, backgroundColor: '#3570d3', transition: { delay: 1 } },
   hidden: { opacity: 0, backgroundColor: 'white', transition: { delay: 0.5 } },
}
export default function BgTransitionSection({ children, ...props }) {
   const control = useAnimation()
   const [ref, inView] = useInView()
   useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
         control.start("hidden");
      }
    }, [control, inView]);

   return (
      <StyledBgTransitionSection
         ref={ref}
         variants={exampleVariant}
         initial="hidden"
         animate={control}
         className="box section"
         {...props}
      >
         {children}
      </StyledBgTransitionSection>
   )
}
