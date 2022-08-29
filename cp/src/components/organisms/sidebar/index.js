import styled from "@emotion/styled"

const StyledSidebar = styled.aside`
   display: flex;
`
export default function Sidebar({ ...props }) {
   return (
      <StyledSidebar {...props}>

      </StyledSidebar>
   )
}
