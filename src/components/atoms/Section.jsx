import styled from "@emotion/styled"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const StyledSection = styled(motion.section)`
   --container-size: 100%;
   @media screen and (min-width: 800px)
   {
      --container-size: 1200px;
   }
`
export default function Section({ children, fromBg, toBg, ...props }) {
   const exampleVariant = {
      visible: { transition: { delay: 2 } },
      hidden: {  transition: { delay: 1 } },
   }
   const control = useAnimation()
   const [ref, inView] = useInView()

   useEffect(() => {
      document.body.classList.add('body--home')

      if (inView) {
      //   control.start("visible");
        document.body.setAttribute('style', '--current-bg-color: ' + toBg)
      } else {
         // control.start("hidden");
         document.body.setAttribute('style', '--current-bg-color: ' + fromBg)
      }
    }, [control, inView]);

   return (
      <StyledSection
         {...props}
         ref={ref}
         variants={exampleVariant}
         initial="hidden"
         animate={control}
         >
         <div className={`${props.containerClass} mx-auto`}>
            {children}
         </div>
      </StyledSection>
   )
}

Section.defaultProps = {
   containerClass: 'container'
}
