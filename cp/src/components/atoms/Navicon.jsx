import styled from "@emotion/styled";
import { Image } from ".";

const StyledNavicon = styled.div`
   background: var(--dark-4);
   picture {

   }
`
export default function Navicon({ image, url }) {
   return (
      <StyledNavicon>
         <Image style={{ width: '80px' }} aspectRatio="1/1" src={image} />
      </StyledNavicon>
   )
}

Navicon.defaultProps = {
   image: '//placehold.it/144'
}
