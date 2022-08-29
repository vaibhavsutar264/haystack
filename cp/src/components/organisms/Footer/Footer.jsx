import styled from "@emotion/styled"
import { Container } from "../../atoms"

const StyledFooter = styled.footer`
   bottom: 0;
   left: 0;
   width: 100%;
   background: #f5f5f5;
   padding: 0 1rem;
   display: flex;
   min-height: 30px;
   .container {
      flex: 1;
   }
`
const Footer = (props) => {
   return (
      <StyledFooter>
         <Container className={'container'}>

         </Container>
      </StyledFooter>
   )
}

export default Footer
