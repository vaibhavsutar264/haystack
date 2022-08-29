import React, { useMemo } from "react";

export const IndeterminateCheckbox = React.forwardRef(
   ({ indeterminate, ...rest }, ref) => {
      const { row } = rest;
      return (
         <React.Fragment>
            <input type={'checkbox'} className="cursor-pointer" />
            {/* {JSON.stringify({ row })} */}
         </React.Fragment>
      );
   }
);
