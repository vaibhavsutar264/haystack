import styled from "@emotion/styled"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const sizes = {
   md: '2rem 0',
   lg: '3.5rem 0',
}
const StyledBgTransitionSection = styled(motion.section)`
   padding: ${props => props.padding ?? sizes.md};
   transition: background 1s ease;
`


export default function BgTransitionSection({ children, fromBg, toBg, ...props }) {
   const exampleVariant = {
      visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
      hidden: {  opacity: 0, transition: { delay: 0 } },
   }
   const control = useAnimation()
   const [ref, inView] = useInView()
   useEffect(() => {
      document.body.classList.add('body--home')

      if (inView) {
        control.start("visible");
        document.body.setAttribute('style', '--current-bg-color: ' + toBg)
      } else {
         control.start("hidden");
         document.body.setAttribute('style', '--current-bg-color: ' + fromBg)
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
