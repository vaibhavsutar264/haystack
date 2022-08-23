import styled from "@emotion/styled"
import React, { forwardRef } from "react"
import Spinner from "./Spinner"

const StyledButton = styled.button`
   --label-color: var(--dark-8);
   --cursor: pointer;
   --border-color: var(--dark-2);
   font-weight: 500;
   ${props => {
      let style = ''
      switch (props.variant) {
         case 'primary':
            style += `
               --accent-color: var(--primary-color);
               --label-color: white;
               --border-color: var(--accent-color);
               &:focus {
                  box-shadow: 0 0 0 4px var(--accent-color);
               }
            `
            break;
         case 'danger':
            style += `
               --accent-color: var(--danger-color);
               --label-color: white;
               --border-color: var(--accent-color);
               &:focus {
                  box-shadow: 0 0 0 4px var(--accent-color);
               }
            `
            break;
         default:
            style += `
            --accent-color: var(--secondary-color, white);
            --label-color: var(--dark-8);
            --border-color: var(--dark-3);
            &:focus {
               box-shadow: 0 0 0 4px var(--primary-color);
               color: var(--primary-color);
            }
            &:hover {
               color: var(--primary-color);
            }
            `
            break;
      }
      if (props.loading) {
         style += `
            --cursor: wait;
            .sr-label {
               opacity: 0
            }
            .btn-loading {
               opacity: 1 !important
            }
         `
      }
      if (props.disabled) {
         style += `
            --accent-color: var(--dark-4);
            --label-color: black;
            --cursor: not-allowed;
            opacity: 0.5;
         `
      }
      switch (props.size) {
         case 'small':
         case 'sm':
            style += `
            --padding: 0.4rem 0.7rem;
            `
            break;
         case 'xs':
            style += `
            --padding: 0.25rem 0.7rem;
            `
            break;
         default:
            style += `
               --padding: 0.5rem 1.25rem;
            `
            break;
      }
      return style
   }}
   cursor: var(--cursor);
   position: relative;
   display: inline-flex;
   align-items: center;
   justify-content: center;
   background: var(--accent-color);
   color: var(--label-color);
   border: 1px solid var(--border-color);
   padding: var(--padding);
   border-radius: var(--rounded-md);
   font-size: 0.9rem;
   .sr-label {
      white-space: nowrap;
   }
   .btn-loading {
      opacity: 0;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
   }
   &:focus {
      outline: 1px solid white;
   }
`
const Button = React.forwardRef(({ rightElement, leftElement, title, type, variant, loading = false, ...props }, ref) => {
   return (
      <StyledButton title={title} variant={variant} type={type} loading={loading} {...props} ref={ref} >
         {leftElement && leftElement()}
         <span className="sr-label">{title}</span>
         {loading && <span className="btn-loading"><Spinner size={20} strokeWidth={2} /></span>}
         {rightElement && rightElement()}
      </StyledButton>
   )
})

Button.defaultProps = {
   type: 'button',
}
Button.propTypes = {

}

export default Button
