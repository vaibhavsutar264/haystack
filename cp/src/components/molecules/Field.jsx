import { TextInput } from "../atoms"
import ErrorMessage from "../atoms/ErrorMessage"
import {useLabel} from '@react-aria/label';

import Label from "../atoms/Label"
import styled from "@emotion/styled";
import { useField } from "formik";
// import { ContentEditor } from "../organisms";


const StyledField = styled.div`
   margin-bottom: 1rem;
   .field-label {
      margin-bottom: 0.3rem;
   }
`

export default function Field({ label, required, name, type, description, error, Component, inputProps = {}, children }){
   let {labelProps, fieldProps} = useLabel({ name, label });
   const [field, meta, helpers] = useField({ name });

   return (
      <StyledField>
         <Label {...labelProps} label={label} required={required} />
         {/* <div>{children}</div> */}
         <div>{Component && <Component {...inputProps} {...field} {...fieldProps} />}</div>
         {meta.touched && meta.error ? (
         // <div className="error">{meta.error}</div>
         <ErrorMessage error={meta.error} />
         ) : null}
      </StyledField>
   )
}


Field.defaultProps = {
   Component: TextInput,
   required: false,
   type: 'text',
}

// Field.ContentEditor = ContentEditor
