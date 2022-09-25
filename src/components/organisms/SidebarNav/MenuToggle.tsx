import * as React from "react";
import { motion } from "framer-motion";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, isOpen }) => (
   <button onClick={toggle} className={` p-0 rounded-full ${isOpen ? 'bg-transparent': 'bg-black'}`}>
     <svg
        viewBox="0 0 173 173"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
      >
        <circle cx="86.5" cy="86.5" r="86.5" fill={isOpen ? 'transparent': 'black'} />
        {isOpen ? (
           <>
              <rect
                x="43.1078"
                y="120.075"
                width={109}
                height={15}
                rx="7.5"
                transform="rotate(-45 43.1078 120.075)"
                fill="white"
              />
              <rect
                x="52.6066"
                y={43}
                width={109}
                height={15}
                rx="7.5"
                transform="rotate(45 52.6066 43)"
                fill="white"
              />
           </>
        ) : (
           <>
           <rect x={32} y={47} width={109} height={15} rx="7.5" fill="white" />
           <rect x={32} y={80} width={109} height={14} rx={7} fill="white" />
           <rect x={32} y={112} width={109} height={15} rx="7.5" fill="white" />
           </>
        )}

      </svg>
  </button>
);
