import React, { memo, useEffect } from 'react'

const CalendarDay = React.forwardRef(({ children, ...props }, ref) => {
   return (
      <button {...props} ref={ref}>
         {children}
      </button>
   )
})

export default memo(CalendarDay)
