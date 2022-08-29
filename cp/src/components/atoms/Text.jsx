import { css } from "@emotion/react"
import styled from "@emotion/styled"

const StyledText = styled.div`
   font-size: ${props => {
      if(props.title) {
         return '2rem'
      }
      if(props.heading) {
         return '1.5rem'
      }
      if(props.small) {
         return '14px'
      }
   }};
   line-height: 1.6;
   font-weight: ${props => {
      if(props.title || props.heading) {
         return 'bold'
      }
   }};
   color: ${props => {
      switch (props.variant) {
         case 'muted':
            return css`
            var(--dark-6);
            `
         default:
            return css`
            var(--text-color);
            `
      }
   }}
`
export default function Text({ children, ...props }) {
   return (
      <StyledText {...props}>{children}</StyledText>
   )
}
