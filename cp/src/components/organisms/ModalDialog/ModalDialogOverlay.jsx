import styled from "@emotion/styled";
import { FocusScope } from "@react-aria/focus";

const StyledModalDialogOverlay = styled.div`
   position: fixed;
   z-index: 100;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
   background: hsl(221deg 7% 33% / 56%);
   backdrop-filter: blur(6px);
   display: flex;
   align-items: center;
   justify-content: center;
   .modal {
      filter: var(--tw-drop-shadow);
      border-radius: 0.5rem;
      overflow: hidden;
      min-width: 300px;
      background: white;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      position: relative;
      .modal__loader {
         position: absolute;
         left: 0;
         top: 0;
         right: 0;
         bottom: 0;
         width: 100%;
         height: 100%;
         background: rgb(255 255 255 / 78%);
         z-index: 9999;
         display: flex;
         align-items: center;
         justify-content: center;
      }
      .modal__header {
         display: flex;
         align-items: center;
         padding: 0.4rem 1.5rem;
         min-height: 40px;
         border-bottom: 1px solid var(--dark-2);
         .flex-1 {
            flex: 1;
         }
      }
      .modal__footer {
         display: flex;
         align-items: center;
         padding: 0.4rem 1.5rem;
         min-height: 40px;
         border-top: 1px solid var(--dark-2);
         .flex-1 {
            flex: 1;
         }
         .modal__footer-right {
            display: flex;
            align-items: center;
            gap: 1rem;
         }
      }
      .modal__body {
         padding: 0.5rem 1.5rem;
         flex: 1;
         max-height: 70vh;
         overflow: auto;
         .list {
            padding: 0 !important;
         }
      }
   }
`


export default function ModalDialogOverlay({ children, ...props }) {
   return (
      <StyledModalDialogOverlay
         {...props}
      >
         <FocusScope contain restoreFocus autoFocus>
            {children}
         </FocusScope>
      </StyledModalDialogOverlay>
   )
}
