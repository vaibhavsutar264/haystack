import styled from "@emotion/styled"

const StyledSection = styled.section`
   --container-size: 100%;
   @media screen and (min-width: 800px)
   {
      --container-size: 1200px;
   }
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
