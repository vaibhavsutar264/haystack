import "../styles/globals.css";
import "./index.css";
// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import { SSRProvider } from "@react-aria/ssr";
// import {SSRProvider} from '@react-aria/';


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
