import styled from "@emotion/styled"

const StyledSection = styled.section`

`
export default function Section({ children, ...props }) {
   return (
      <StyledSection {...props}>
         <div className="container mx-auto">
            {children}
         </div>
      </StyledSection>
   )
}
