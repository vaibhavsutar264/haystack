import { SSRProvider } from "@react-aria/ssr";
import '../styles/main.css'

function MyApp({ Component, pageProps }) {
   return (
      <>
         <SSRProvider>
            <Component {...pageProps} />
         </SSRProvider>
      </>
   );
}

export default MyApp;
