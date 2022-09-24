import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
// import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useDimensions } from "../../../hooks/useDimensions";
import styled from "@emotion/styled";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 1440px 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 1440px 0)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const StyledComponent = styled(motion.div)`
   left: 0;
   top: 0;

   .background {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      background-color: transparent;
      z-index: 999;
      transition: background-color .3s ease;
   }
   .Navigation_list {
      pointer-events: none;
   }
   &.open {
      display: block;
      position: fixed;
      width: 100vw;
      height: 100vh;


      .background {
         background-color: var(--primary-color);
         width: 100vw;
      }
      button {
         color: white;
         svg {
            color: white;
         }
      }

      .Navigation_list {
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         text-align: center;
         pointer-events: reset;
      }
   }

   button {
      outline: none;
      border: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      cursor: pointer;
      position: absolute;
      top: 18px;
      right: 15px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: transparent;
      z-index: 99999;
   }

   ul {
      z-index: 99999999 !important;
      color: white;
      position: absolute;
      right: 140px;
      top: 2rem;
   }

   .refresh {
      padding: 10px;
      position: absolute;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 10px;
      width: 20px;
      height: 20px;
      top: 10px;
      right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
   }

`

const SidebarNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  React.useEffect(() => {
   if (isOpen) {
      document?.body?.classList.add('sidebar-opened')
   } else {
      document?.body?.classList?.remove('sidebar-opened')
   }
  }, [ isOpen ])

  return (
    <StyledComponent
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={isOpen ? "open" : "closed" + " px-3"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </StyledComponent>
  );
};
export default SidebarNav
