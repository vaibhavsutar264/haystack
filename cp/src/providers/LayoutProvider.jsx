import { useMemo } from "react"

export default function LayoutProvider({ children }) {
   const mainSafeAreaPadding = useMemo(() => {
      return {
         padding: '0'
      }
   }, [ ])

   return (
      <main style={{...mainSafeAreaPadding}}>
         {children}
      </main>
   )
}
