import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul className="px-4 py-6 Navigation_list" variants={variants}>
    {items.map((i, index) => (
      <MenuItem item={i} key={`mi_${index}`} />
    ))}
  </motion.ul>
);

const items = [
   { label: 'SCIENCE CORNER', url: '/science-corner' },
   { label: 'ABOUT US', url: '/about' },
   { label: 'PRODUCT', url: '/universal' },
   { label: 'LATEST NEWS', url: '/news' },
   { label: 'BLOG', url: '/blog' },
]
