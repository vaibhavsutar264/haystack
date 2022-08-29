import { useOverlayTriggerState } from '@react-stately/overlays';
import {
   useOverlay,
   usePreventScroll,
   useModal,
   OverlayProvider,
   OverlayContainer
} from '@react-aria/overlays';
import { motion } from "framer-motion"

import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import { useButton } from '@react-aria/button';
import React, { createContext, useContext } from 'react';
import ModalDialogOverlay from './ModalDialogOverlay';
import { Button } from '../../atoms';
import ModalDialogHeader from './ModalDialogHeader';
import MediaLibrary from '../MediaLibrary/MediaLibrary';
import ModalDialogFooter from './ModalDialogFooter';
import Datepicker from '../Datepicker/Datepicker';
import ModalLoadingIndicator from './ModalLoadingIndicator';

const ModalContext = createContext({
   title: '',
   actions: new Set(),
   onClsoe: () => {},
})

export const useModalContext = () => {
   return useContext(ModalContext)
}

export default function ModalDialog({ primaryAction, isLoading = false, title, children, ...props }) {
   // Handle interacting outside the dialog and pressing
   // the Escape key to close the modal.
   let ref = React.useRef();
   let { overlayProps, underlayProps } = useOverlay(props, ref);

   // Prevent scrolling while the modal is open, and hide content
   // outside the modal from screen readers.
   usePreventScroll();
   let { modalProps } = useModal();

   // Get props for the dialog and its title
   let { dialogProps, titleProps } = useDialog(props, ref);
   titleProps.children = title
   const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
   }
   const modalContext = {
      title,
      onClose: props.onClose,
   }
   return (
      <OverlayContainer>
         <ModalContext.Provider value={modalContext}>
            <ModalDialogOverlay {...underlayProps}>
               <motion.div
                  {...overlayProps}
                  {...dialogProps}
                  {...modalProps}
                  initial="hidden"
                  animate="visible"
                  exit={'hidden'}
                  variants={variants}
                  className="modal"
                  ref={ref}>
                  <ModalDialogHeader titleProps={titleProps} onClose={props.onClose} />
                  <div className='modal__body'>
                     {children}
                  </div>
                  <ModalDialogFooter primaryAction={primaryAction} titleProps={titleProps} />
                  {isLoading && <ModalLoadingIndicator />}
               </motion.div>
            </ModalDialogOverlay>
         </ModalContext.Provider>
      </OverlayContainer>
   );
}

function Example() {
   let state = useOverlayTriggerState({});
   let openButtonRef = React.useRef();
   let closeButtonRef = React.useRef();

   // useButton ensures that focus management is handled correctly,
   // across all browsers. Focus is restored to the button once the
   // dialog closes.
   let { buttonProps: openButtonProps } = useButton({
      onPress: () => state.open()
   }, openButtonRef);

   let { buttonProps: closeButtonProps } = useButton({
      onPress: () => state.close()
   }, closeButtonRef);

   return <>
      <button {...openButtonProps} ref={openButtonRef}>Open Dialog</button>
      {state.isOpen &&
         <ModalDialog
            title="Enter your name"
            isOpen
            onClose={state.close}
            isDismissable>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
               {/* <MediaLibrary /> */}
               <Datepicker />
               <Button
                  {...closeButtonProps}
                  ref={closeButtonRef}
                  style={{ marginTop: 10 }}
                  title={'Submit'}
               />
            </form>
         </ModalDialog>
      }
   </>;
}

export function ExampleModalDialog() {
   return (
      <Example />
   )
}
