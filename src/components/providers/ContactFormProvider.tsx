import { useState } from "react";
import ContactForm from "../ContactForm";

interface IContactFormProvider {
   renderTrigger: Function,
}
export default function ContactFormProvider(props: IContactFormProvider) {
   const [ contactFormOpened, setContactFormOpened ] = useState(false)
   const onContactClick = () => {
      setContactFormOpened(true)
   }
   return (
      <>
         {props.renderTrigger && props.renderTrigger({ onClick: onContactClick })}
         <ContactForm
            isOpen={contactFormOpened}
            onCloseClick={() => setContactFormOpened(false)}
         />
      </>
   )
}
