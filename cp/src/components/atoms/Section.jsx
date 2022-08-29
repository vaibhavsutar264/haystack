import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Text from "./Text";

const StyledSection = styled.section`
   display: flex;
   flex-direction: column;
   margin-bottom: 1.5rem;
   > header {
      margin-bottom: 0.5rem;
   }
   ${props => {
      if (props.inline) {
         return css`
            @media screen and (min-width: 800px)
            {
               flex-direction: row;
            }
            gap: 1.5rem;
            > header {
               width: 20rem;
            }
         `
      }
      return css`
      `
   }}
   .section__body {
      flex: 1;
   }
`

export default function Section({ title, description, children, ...props }) {
   return (
      <StyledSection {...props}>
         <header>
            {title && <Text heading>{title}</Text>}
            {description && <Text variant={'muted'} small>{description}</Text>}
         </header>
         <div className="section__body">
            {children}
         </div>
      </StyledSection>
   )
}
