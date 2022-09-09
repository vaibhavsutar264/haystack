import { SSRProvider } from "@react-aria/ssr";
import { StrictMode } from "react";
import '../styles/main.css'

function MyApp({ Component, pageProps }) {
   return (
      <StrictMode>
         <SSRProvider>
            <Component {...pageProps} />
         </SSRProvider>
      </StrictMode>
   );
}

export default MyApp;
