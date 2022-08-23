import styled from "@emotion/styled"

const StyledLabel = styled.div`
   label {
      font-weight: 500;
   }
`
export default function Label({ htmlFor, label, required, ...props }) {
   return (
      <StyledLabel className="field-label">
         <label htmlFor={htmlFor} {...props}>
            <span>{label}</span>
            {required && <em><b>{'(required)'}</b></em>}
         </label>
      </StyledLabel>
   )
}
