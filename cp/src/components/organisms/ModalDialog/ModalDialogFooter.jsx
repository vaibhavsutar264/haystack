import { Button, IconButton } from "../../atoms";
import { useModalContext } from "./ModalDialog";

export default function ModalDialogFooter({ primaryAction, titleProps, }) {
   const { onClose } = useModalContext()
   const cancelProps = {
      title: 'Cancel',
      onClick: () => {
         onClose && onClose()
      }
   }
   const primaryProps = {
      title: 'Done',
      variant: 'primary',
      onClick: () => {
         onClose && onClose()
      },
      ...primaryAction,
   }
   return (
      <footer className="modal__footer">
         <div className="flex-1">
         </div>
         <div className="modal__footer-right">
            <Button {...cancelProps} />
            <Button {...primaryProps} />
         </div>
      </footer>
   )
}
