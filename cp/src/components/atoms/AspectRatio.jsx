import { Fragment, useEffect, useMemo, useRef, useState } from "react";

export default function AspectRatio({ children, aspectRatio }) {
   const refEl = useRef()
   const [ sizeProps, setSizeProps ] = useState({  })
   useEffect(() => {
      const rect = refEl.current?.getBoundingClientRect()
      if (rect) {
         let height = eval(aspectRatio.split("/").reverse().join("/")) * rect?.width
         setSizeProps({ width: parseInt(rect.width), height: parseInt(height) })
      }
   }, [ ])
   return (
      <div ref={refEl} style={{ '--width': `${sizeProps?.width}px`, '--height': `${sizeProps?.height}px` }}>
         {children && children({ ...sizeProps })}
      </div>
   )
}

AspectRatio.defaultProps = {
   aspectRatio: "4/3"
}
