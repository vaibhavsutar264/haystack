import styled from "@emotion/styled"

const StyledComboBox = styled.div`
   .ComboBox__list {
      margin: 0;
      padding: 0;
      list-style: none;
      list-style-type: none;
      max-height: 150px;
      overflow: auto;
      background: white;
      li {
         display: flex;
         line-height: 36px;
         height: 36px;
         padding: 0 1rem;
         outline: none;
         cursor: pointer;
      }
   }
`
export default StyledComboBox
