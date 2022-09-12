import React from "react";
import Link from "next/link";
import NavbarContent from "./NavbarContent";

const NavItem = ({ href, text, active }) => {
   return (
      <Link href={href}>
         <div
            className={`
          nav__link ${active ? "active" : ""}
          `}
         >
            <NavbarContent />
         </div>
      </Link>
   );
};

export default NavItem;
