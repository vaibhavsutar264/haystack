import { I18nProvider } from "@react-aria/i18n"
import { OverlayProvider } from "@react-aria/overlays"
import { createContext, useState } from "react"
import { Toaster } from "react-hot-toast"
import { QueryClient, QueryClientProvider } from "react-query"
import { AppLayout } from "../components/templates"
import BootstrapError from "../exceptions/BootstrapError"
import { server } from "../utils"
import ThemeContextProvider from "./ThemeContextProvider"

const BootstrapContext = createContext()

const queryClient = new QueryClient({
   defaultOptions: {
      mutations: {

      },
      queries: {
         queryFn: async (keys) => {
            const { data } = await server.get(keys[0])
            return data
         }
      }
   }
})


export default function Bootstrap({ children, locale = 'en-IN' }) {

   return (
      <I18nProvider locale={locale}>
         <QueryClientProvider client={queryClient}>
            <ThemeContextProvider>
               <OverlayProvider>
                  <AppLayout children={children} />
                  <Toaster />
               </OverlayProvider>
            </ThemeContextProvider>
         </QueryClientProvider>
      </I18nProvider>
   )
}


Bootstrap.defaultProps = {
   locale: 'en-IN',
}
