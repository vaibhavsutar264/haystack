import { Spinner } from "../../atoms";

export default function ModalLoadingIndicator() {
   return (
      <div className="modal__loader">
         <Spinner size={'lg'} />
      </div>
   )
}
