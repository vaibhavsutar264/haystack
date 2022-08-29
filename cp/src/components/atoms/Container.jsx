import styled from "@emotion/styled"

const StyledContainer = styled.div`
   width: var(--container-width, 1200px);
   max-width: 100%;
   margin: 0 auto;
`
export default function Container({ children, ...props }) {
   return (
      <StyledContainer {...props}>
         {children}
      </StyledContainer>
   )
}
