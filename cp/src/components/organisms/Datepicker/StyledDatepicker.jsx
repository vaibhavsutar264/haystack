import styled from "@emotion/styled"

export const StyledCalander = styled.div`
   margin: 1rem auto;
   max-width: 600px;
   cursor: default;
   .Calendar__label {
      text-align: center;
      margin-bottom: 0.5rem;
      font-weight: 600;
   }
   .Calendar__grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 6px;
      padding: 1rem 0;
      text-align: center;
      .Calendar__item-label {
         font-weight: 600;
      }
      .Calendar__item {
         position: relative;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 1000px;
         padding: 0.7rem;
         text-align: center;
         width: auto !important;
         background: white;
         border: none;
         font-family: inherit;
         text-align: center;
         font-size: 1rem;
         font-weight: 400;
         user-select: none;
         cursor: pointer;
         &.selected {
            background: var(--primary-color);
         }
         &:hover {
            background: var(--dark-2);
         }
      }
   }
   button {
      font-family: inherit;
   }
`

const StyledDatepicker = styled.div`

`
export default StyledDatepicker
