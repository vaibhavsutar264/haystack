import { ThemeProvider } from "@emotion/react"
import { createContext, useState } from "react"
import { theme } from "../styles"

const ThemeContext = createContext()
const defaultTheme = theme

export default function ThemeContextProvider({ children }) {
   // const [ selectedTheme, setSelectedTheme ] = useState(defaultTheme)
   return (
      <ThemeContext.Provider value={defaultTheme}>
         <ThemeProvider theme={defaultTheme}>
            {children}
         </ThemeProvider>
      </ThemeContext.Provider>
   )
}
