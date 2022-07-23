import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
// import PropTypes from 'prop-types'

export const StyledInputField = styled.div`
   display: flex;
   align-items: center;
   --border-color: rgba(0,0,0, .2);
   --focus-ring-color: rgba(29, 78, 216, 50%);
   gap: 0.5rem;
   line-height: var(--size);
   height: var(--size);
   box-sizing: border-box;
   width: 100%;
   margin: 0;
   border: 1px solid var(--dark-3);
   background-color: white;
   outline: none;
   font-family: var(--font-sans-serif);

   &:hover {
      // border-color: var(--focus-ring-color);
   }
   &:focus,
   &:focus-within {
      border-color: var(--focus-ring-color);
      box-shadow: 0 0 0 4px var(--focus-ring-color);
   }
   input {
      flex: 1;
      max-width: 100%;
   }
   span, div {
      display: flex;
      align-items: center;
      svg {
         width: 20px;
         color: gray;
      }
   }
   ${props => {
      if(props.size === 'small') {
         return css`
            --size: 28px;
            padding: 0.1rem .5rem;
            font-size: .9rem;
            border-radius: 7px;
         `
      }
      if(props.size === 'large') {
         return css`
            --size: 44px;
            padding: 0 .5rem;
            font-size: 1.4rem;
            border-radius: 15px;
         `
      }
      return css`
         padding: 0 .5rem;
         font-size: 1rem;
         --size: 36px;
         border-radius: 10px;
      `
   }}
   ${props => {
      if(props.disabled) {
         return css`
            opacity: .5;
            cursor: readonly;
            background: #eceff1;
         `
      }
   }}
`
const StyledTextInput = styled.input`
   outline: none;
   border: none;
   background: transparent;
   font-size: inherit;
   font-family: inherit;
   max-width: 100%;
   font-weight: medium;
   background-image: none !important;
   ${props => {
      if(props.disabled) {
         return css`
            cursor: readonly;
         `
      }
   }}
`
const TextInput = React.forwardRef(({ prepend, append, ...props }, ref) => {
   //
   return (
      <StyledInputField disabled={props.disabled} size={props.size}>
         {prepend && <div className={'input_prepend'}>{prepend()}</div>}
         {props.prefix && (
            <span>{props.prefix}</span>
         )}
         <StyledTextInput ref={ref} autoComplete={'off'} {...props} />
         {append && <div className={'input_append'}>{append()}</div>}
      </StyledInputField>
   )
})

TextInput.propTypes = {
   // prop: PropTypes.string
}

TextInput.defaultProps = {
   type: 'text'
}

export default TextInput
