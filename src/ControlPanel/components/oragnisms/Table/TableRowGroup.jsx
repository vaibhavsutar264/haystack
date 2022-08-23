import { useTableRowGroup } from "@react-aria/table";

export default function TableRowGroup({ type: Element, style, children }) {
   let { rowGroupProps } = useTableRowGroup();
   return (
      <Element
         className={`${
            Element === "tbody" ? "bg-white dark:bg-slate-800" : ""
         }`}
         {...rowGroupProps}
         style={style}
      >
         {children}
      </Element>
   );
}
