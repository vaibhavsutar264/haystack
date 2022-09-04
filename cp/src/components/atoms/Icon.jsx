import styled from "@emotion/styled"
import * as icons from "../../icons"
const StyledIcon = styled.span`
   --icon-size: ${props => {
      switch (props.size) {
         case 'xs':
            return '24px';
         case 'sm':
         case 'small':
            return '24px';
         case 'lg':
         case 'large':
            return '32px';
         default:
            return '18px';
      }
   }};
   width: var(--icon-size);
   height: var(--icon-size);
   display: inline-block;
`
export default function Icon({ name, children, size = 'md', ...props }) {
   const IconComponent = icons[name] ?? ''
   return (
      <StyledIcon className="icon" size={size}>
         {name && <IconComponent {...props} />}
         {/* {renderIcon(name, props)} */}
      </StyledIcon>
   )
}
