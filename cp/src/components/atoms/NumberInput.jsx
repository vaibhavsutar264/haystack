import { useNumberField } from '@react-aria/numberfield';
import { useNumberFieldState } from '@react-stately/numberfield';
import { useLocale } from '@react-aria/i18n';
import { useButton } from '@react-aria/button';
import React from 'react';
import TextInput from './TextInput';
import styled from '@emotion/styled';
import IconButton from './IconButton';

const StyledNumberInput = styled.div`
   .field {
      display: flex;
      div {
         flex: 1;
      }
   }
`

export default function NumberInput(props) {
   let { locale } = useLocale();
   let state = useNumberFieldState({ ...props, locale });
   let inputRef = React.useRef();
   let incrRef = React.useRef();
   let decRef = React.useRef();
   let {
      labelProps,
      groupProps,
      inputProps,
      incrementButtonProps,
      decrementButtonProps
   } = useNumberField(props, state, inputRef);

   let { buttonProps: incrementProps } = useButton(incrementButtonProps, incrRef);
   let { buttonProps: decrementProps } = useButton(decrementButtonProps, decRef);

   return (
      <StyledNumberInput>
         {/* <label {...labelProps}>{props.label}</label> */}
         <div className='field' {...groupProps}>
            <IconButton {...decrementProps} ref={incrRef} name={'minus'} />
            <TextInput {...inputProps} ref={inputRef} />
            <IconButton {...incrementProps} ref={decRef} name={'plus'} />
         </div>
      </StyledNumberInput>
   );
}
