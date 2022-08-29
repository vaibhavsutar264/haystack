import styled from "@emotion/styled"
import { useOverlayTriggerState } from "@react-stately/overlays"
import React, { Fragment } from "react"
import { Portal } from "react-portal"
import { Checkbox } from "../../atoms"
import ModalDialog from "../ModalDialog/ModalDialog"
import MediaInfoPanel from "./MediaInfoPanel"

const StyledFigure = styled.figure`
   position: relative;
   &:hover {
      .checkbox-control {
         opacity: 1;
      }
   }
   .checkbox-control {
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
      padding: 0.5rem;
      &.selected {
         opacity: 1 !important;
      }
   }
`

const DeleteAction = () => {

   return (
      <div>
         <a className="text-danger" href="#">
            <small>Delete</small>
         </a>
      </div>
   )
}

const MediaItem = React.forwardRef(({ item, isSelected = false, onSelect, ...props }, ref) => {
   let modal = useOverlayTriggerState({});
   function openInfoDialog() {
      modal.open()
   }
   return (
      <Fragment>
         <StyledFigure className="MediaItem" >
            <Checkbox value={item.name} isSelected={isSelected} onChange={onSelect} className={'MediaItem_checkbox'} />
            <picture>
               <img src="" alt="" sizes="" srcset="" />
            </picture>
            <figcaption>
               <p>
                  <span onClick={() => modal.open()}>File name</span>
               </p>
            </figcaption>
         </StyledFigure>
         <Portal>
            {modal.isOpen && (
               <ModalDialog title={'Info'} isOpen onClose={modal.close}>
                  <MediaInfoPanel item={item} />
               </ModalDialog>
            )}
         </Portal>
      </Fragment>
   )
})

export default MediaItem
