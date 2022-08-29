import React from "react"

function Menu({ children, ...props }) {
   return (
      <nav {...props} ref={props.ref}>
         {children}
      </nav>
   )
}

export default React.forwardRef((props, ref) => <Menu {...props} ref={ref} />)
