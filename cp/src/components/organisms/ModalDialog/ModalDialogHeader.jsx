import { IconButton } from "../../atoms";
import { useModalContext } from "./ModalDialog";

export default function ModalDialogHeader({ titleProps }) {
   const { onClose, } = useModalContext()
   return (
      <header className="modal__header">
         <div className="flex-1">
            {titleProps && <h4 {...titleProps}>{titleProps.children}</h4>}
         </div>
         <div>
            <IconButton onClick={onClose} name={'close'} />
         </div>
      </header>
   )
}
