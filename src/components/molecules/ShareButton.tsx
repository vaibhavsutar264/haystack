import { useState } from "react";
import Modal from 'react-modal';
import { LinkedinShareButton, FacebookShareButton, WhatsappShareButton, TwitterShareButton, EmailShareButton } from 'react-share';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
   faYoutube,
   faInstagram,
   // faEnvelope,
   faFacebookF,
   faLinkedin,
   faWhatsapp,
   faTwitter,
   faX
} from "@fortawesome/free-brands-svg-icons";
import {
   faEnvelope
} from "@fortawesome/free-regular-svg-icons";

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
     maxWidth: '500px'
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
         <div className="flex justify-between md:mb-4 cursor-pointer" onClick={openModal}>
            {/* <span className="text-base font-bold">{date}</span> */}
            <span className="text-green-600 hover:text-green-900 font-normal text-base flex items-center gap-2 share-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-reply-fill" viewBox="0 0 16 16">
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
               <p className="text-lg mb-3 font-bold">{'Share '}</p>
               <p className="mb-4 text-sm">{props.title}</p>
               <div className="bg-gray-800 text-white px-3 py-3 max-w-full overflow-auto">
                  <code>{props.url}</code>
               </div>
               <div className="grid grid-cols-6 gap-4 mt-4 justify-center text-center text-xl">
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
                  <div className="grid__col">
                     <EmailShareButton {...props}>
                        {/* <FontAwesomeIcon icon="fa-solid fa-envelope" /> */}
                        <FontAwesomeIcon
                           id="icons"
                           className="text-dark"
                           icon={faEnvelope}
                        />
                     </EmailShareButton>
                  </div>
                  <div className="grid__col">
                     <TwitterShareButton {...props}>
                        <FontAwesomeIcon
                           id="icons"
                           className="text-dark"
                           icon={faTwitter}
                        />
                     </TwitterShareButton>
                  </div>
               </div>
            </div>
         </Modal>

      </>
   )
}
