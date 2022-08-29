import styled from "@emotion/styled";
import * as React from "react";
import { useLayer, Arrow } from "react-laag";
import { Button, Menu } from "../atoms";

const StyledPopover = styled.div`
   background-color: white;
   filter: var(--tw-drop-shadow);
   border-radius: 0.5rem;
   z-index: 9999;
`


const Popover = React.forwardRef(function ({ isOpen: _isOpen = false, renderTrigger, children }, ref) {
   const [isOpen, setOpen] = React.useState(_isOpen);

   const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
      isOpen,
      overflowContainer: false,
      auto: true,
      snap: true,
      arrowOffset: 4
   });

   function onTriggerClick() {
      setOpen(prev => !prev)
   }
   // this.close = () => {
   //    onTriggerClick()
   // }

   return (
      <>
         {renderTrigger && renderTrigger({ ...triggerProps, onClick: onTriggerClick })}
         {isOpen &&
            renderLayer(
               <StyledPopover
                  {...layerProps}
                  style={{ ...layerProps.style, }}
               >
                  {children}
                  <Arrow {...arrowProps} size={5} roundness={0} />
               </StyledPopover>
            )}
      </>
   );
})

export default Popover

Popover.defaultProps = {
   renderTrigger: props => <Button {...props} title={'Trigger'} />
}
