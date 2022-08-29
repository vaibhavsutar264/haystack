import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { Container, Navicon } from "../../atoms"
import { Menu } from "../../molecules"

const StyledNavigation = styled.nav`
   position: relative;
   z-index: 999;
   top: 0;
   left: 0;
   width: 100%;
   background: var(--dark-1);
   margin-bottom: 1rem;
   padding: 0 1rem;
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 1.5rem;
   min-height: 30px;
   @media screen and (min-width: 800px)
   {
      flex-direction: row;
   }
   .container {
      flex: 1;
   }
`
const Navigation = (props) => {
   const router = useRouter()
   function onNavClick(path) {
      router.push(path)
   }
   return (
      <StyledNavigation>
         <Navicon />
         <Container className={'container'}>
            <Menu inline={true} onAction={onNavClick}>
               <Menu.Item key={'cp/posts'} children={'Posts'} />
               <Menu.Item key={'cp/news'} children={'News'} />
               <Menu.Item key={'cp/categories'} children={'Categories'} />
               <Menu.Item key={'cp/settings'} children={'Settings'} />
            </Menu>
         </Container>
         <div>
            {/* username */}
         </div>
      </StyledNavigation>
   )
}

export default Navigation
