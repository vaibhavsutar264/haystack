/* eslint-disable @next/next/no-img-element */
// @ts-nocheck

import Link from "next/link"
import { useState } from "react";
import Modal from 'react-modal';

interface IWebinarItem {
   title?: string,
   thumbnailUrl?: string,
   citation?: string,
   description?: any,
   url?: string,
   postUrl?: string,
}

const customModalStyle = {
   content: {
      background: 'white',
      padding: '1.5rem',
      'max-width': '70vw',
      margin: '0 auto',
   }
}
const WebinarItem = (props: IWebinarItem) => {
   const [ modalIsOpen, setModalIsOpen ] = useState(false)

   return (
      <>
      <figure className="post-item item">
         <picture className="item__thumbnail" onClick={() => setModalIsOpen(true)}>
            <img src={props.thumbnailUrl} alt={props.title} className="mb-3 aspect-[4/3] bg-gray-200 object-cover" />
         </picture>
         <figcaption className="item__caption my-6">
            <p className="font-semibold my-6 line-clamp-3 text-xl">{props.title}</p>
         </figcaption>
      </figure>
      <Modal isOpen={modalIsOpen} style={customModalStyle}>
         <div className="w-full">
            <div className="aspect-w-16 aspect-h-9 mb-4">
               {/* {JSON.stringify({ props })} */}
               <iframe width="100%" height="100%" src={props.postUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p className="text-lg font-semibold mb-3">
               {props.title}
            </p>
            <button className="flex gap-3 items-center" type="button" onClick={() => setModalIsOpen(false)}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
               </svg>
               <span>Close</span>
            </button>
         </div>
      </Modal>
      </>
   )
}

export default WebinarItem
