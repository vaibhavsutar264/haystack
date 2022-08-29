import styled from "@emotion/styled"

const StyledCard = styled.div`
   background: white;
   border-radius: 0.7rem;
   overflow: hidden;
   padding: 1rem;
   display: flex;
   flex-direction: column;
   align-items: stretch;
   justify-content: stretch;
   gap: 0.5rem;
   --border-color: var(--dark-2);
   > header {
      border-bottom: 1px solid var(--border-color);
      padding: 0.5rem 1rem;
      margin: 0 -1rem;
      margin-top: -1rem;
   }
   > main {
      flex: 1;
   }
   > footer {
      border-top: 1px solid var(--border-color);
      padding: 0.5rem 1rem;
      margin: 0 -1rem;
      margin-bottom: -1rem;
   }
`

export default function Card({ title, description, children, ...props }) {
   return (
      <StyledCard {...props}>
         {children}
      </StyledCard>
   )
}

Card.Footer = ({ children }) => {
   return (
      <footer>
         {children}
      </footer>
   )
}
Card.Header = ({ children }) => {
   return (
      <header>
         {children}
      </header>
   )
}
