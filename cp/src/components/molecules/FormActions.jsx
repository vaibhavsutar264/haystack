import { Button, TextInput } from "../atoms"
import ErrorMessage from "../atoms/ErrorMessage"
import {useLabel} from '@react-aria/label';

import Label from "../atoms/Label"
import styled from "@emotion/styled";
import { useField, useFormik, useFormikContext } from "formik";
// import { ContentEditor } from "../organisms";


const StyledField = styled.div`
   margin-bottom: 1rem;
   .field-label {
      margin-bottom: 0.3rem;
   }
`

export default function FormActions({ submitLabel = 'Submit' }){
   const formik = useFormikContext()
   const primaryAction = {
      onClick: formik.handleSubmit
   }
   return (
      <StyledField>
         {JSON.stringify(formik.values)}
         {primaryAction && <Button disabled={formik.isSubmitting} variant="primary" type="submit" title={formik.isSubmitting ? 'Submitting...' : submitLabel} {...primaryAction} />}
      </StyledField>
   )
}

FormActions.defaultProps = {
   type: 'text',
}
