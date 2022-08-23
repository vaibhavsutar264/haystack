import React, { useRef, useState } from "react";

const HambergerMenu = () => {
   const [isOpen, setIsOpen] = useState(false);
   // const [ isClose, setIsClose ] = useState(false);
   // const [ isClose, setIsClose ] = useState(false);
   const menuRef = useRef();

   function handleMenuToggle(ev) {
      //menuRef.current?.classList.toggle('open');
      setIsOpen(ev.target.checked);
   }
   return (
      <div>
         <div>
            <input
               type="checkbox"
               id="bgtoggle"
               className={`menu_toggle_btn ${
                  isOpen ? "menu_toggle_btn--checked" : ""
               }`}
               checked={isOpen}
               onClick={handleMenuToggle}
            />
            <div className="frame">
               <label for="bgtoggle" className="menu"></label>
               <div
                  className={`menu_container `}
                  style={{ opacity: `${isOpen ? "1" : "1"}` }}
                  id="menu_container"
               >
                  <h1>hystack content will be shown here</h1>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HambergerMenu;
