import { css } from "@emotion/react"
import styled from "@emotion/styled"

const StyledList = styled.ul`
   display: flex;
   flex-direction: column;
   margin: 0.3rem 0;
   padding: 0;
   padding-left: 1.2rem;
   gap: 0.2rem;
   ${props => {
      if (props.unstyled) {
         return css`
            list-style: none;
            margin: 0;
            padding: 0;
         `
      }
      return css``
   }}
   > li {

   }
`
export default function List({ children, ...props }) {

   return (
      <StyledList className="list" {...props}>
         {children}
      </StyledList>
   )
}


List.Item = ({ children }) => {
   return (
      <li>
         {children}
      </li>
   )
}
