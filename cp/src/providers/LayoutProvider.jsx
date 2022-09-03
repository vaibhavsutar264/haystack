import { useMemo } from "react"
import styled from "@emotion/styled"

const StyledLayout = styled.div`
   min-height: 100vh;
   padding: 0;
   display: flex;
   flex-direction: column;
`
export default function LayoutProvider({ children }) {
   const mainSafeAreaPadding = useMemo(() => {
      return {
         padding: '0'
      }
   }, [ ])

   return (
      <StyledLayout style={{...mainSafeAreaPadding}}>
         {children}
      </StyledLayout>
   )
}
