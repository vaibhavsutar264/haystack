import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { AspectRatio } from "."

const StyledImage = styled.picture`
   display: flex;
   align-items: center;
   overflow: hidden;
   width: 100%;
   img {
      width: 100%;
      height: 100%;
      object-fit: ${props => props.objectFit ?? 'cover'};
   }
`

export default function Image({ src, alt, title, citation, caption, aspectRatio = '4/3', ...props }) {
   return (
      <>
      <AspectRatio aspectRatio={aspectRatio}>
         {sizeProps => (
            <StyledImage aspectRatio={aspectRatio} {...props} >
               <img loading="lazy" src={src} alt="" sizes="" srcset="" {...sizeProps} />
            </StyledImage>
         )}
      </AspectRatio>
      </>
   )
}

Image.defaultProps = {

}
