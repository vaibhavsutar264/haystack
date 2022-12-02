import { useState } from "react";
import Modal from 'react-modal';
import { LinkedinShareButton, FacebookShareButton, WhatsappShareButton } from 'react-share';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
   faYoutube,
   faInstagram,
   faFacebookF,
   faLinkedin,
   faWhatsapp,
   faTwitter,
   faX
} from "@fortawesome/free-brands-svg-icons";

interface IShareButton {
   title: string,
   url: string,
}
const customStyles = {
   content: {
     top: '50%',
     left: '50%',
     right: 'auto',
     bottom: 'auto',
     marginRight: '-50%',
     transform: 'translate(-50%, -50%)',
   },
 };

export default function ShareButton(props: IShareButton) {
   const [modalIsOpen, setIsOpen] = useState(false);
   function openModal() {
      setIsOpen(true);
   }
   function afterOpenModal() {
      // references are now sync'd and can be accessed.
      // subtitle.style.color = '#f00';
   }
   function closeModal() {
      setIsOpen(false);
   }

   return (
      <>
         <div className="flex justify-between mb-4" onClick={openModal}>
            {/* <span className="text-base font-bold">{date}</span> */}
            <span className="text-green-600 font-normal text-base flex items-center gap-2 share-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-reply-fill" viewBox="0 0 16 16">
               <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
            </svg>SHARE</span>
         </div>

         <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
         >
            <div>
               <p className="mb-3">{props.title}</p>
               <div className="bg-gray-800 text-white px-3 py-3">
                  <code>{props.url}</code>
               </div>
               <div className="grid grid-cols-6 gap-4 mt-4 justify-center">
                  <div className="grid__col">
                     <FacebookShareButton {...props}>
                        <FontAwesomeIcon
                           id="icons"
                           className="text-dark"
                           icon={faFacebookF}
                        />
                     </FacebookShareButton>
                  </div>
                  <div className="grid__col">
                     <LinkedinShareButton {...props}>
                        <FontAwesomeIcon
                           id="icons"
                           className="text-dark"
                           icon={faLinkedin}
                        />
                     </LinkedinShareButton>
                  </div>
                  <div className="grid__col">
                     <WhatsappShareButton {...props}>
                        <FontAwesomeIcon
                           id="icons"
                           className="text-dark"
                           icon={faWhatsapp}
                        />
                     </WhatsappShareButton>
                  </div>
               </div>
            </div>
         </Modal>

      </>
   )
}
