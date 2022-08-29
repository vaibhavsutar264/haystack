import styled from "@emotion/styled"
import React, { forwardRef } from "react"
import PropTypes from 'prop-types'
import Icon from "./Icon"

const StyledIconButton = styled.button`
   --icon-btn-size: ${props => {
      switch (props.size) {
         case 'sm':
         case 'small':
            return '22px';
         default:
            return '36px';
      }
   }};
   width: var(--icon-btn-size);
   height: var(--icon-btn-size);
   cursor: pointer;
   border-radius: 1000px;
   border: 0 solid;
   overflow: hidden;
   background: transparent;
   display: inline-flex;
   align-items: center;
   justify-content: center;
   &:hover {
      color: var(--primary-color);
   }
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

   ${props => {
      let style = ''
      if (props.disabled) {
         style += `
            background: #3c3c3c;
            opacity: 0.5;
            cursor: not-allowed !important;

         `
      }
      if (props.loading) {
         style += `
            cursor: wait;
            background: #3c3c3c;
            .sr-label {
               opacity: 1
            }
            .btn-loading {
               opacity: 1 !important
            }
         `
      }
      return style
   }}
`
const IconButton = React.forwardRef(({ name, title, type, variant, loading = false, ...props }, ref) => {
   return (
      <StyledIconButton loading={loading} {...props} ref={ref} >
         {name && <Icon name={name} />}
         <span className="sr-label">{title}</span>
         {loading && <span className="btn-loading">{'loading'}</span>}
      </StyledIconButton>
   )
})

IconButton.propTypes = {
   variant: PropTypes.oneOf([ 'primary', 'default', 'light' ])
}
export default IconButton
