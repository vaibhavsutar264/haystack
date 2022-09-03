import "../styles/globals.css";
import "./index.css";
// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import {SSRProvider} from 'react-aria';


function MyApp({ Component, pageProps }) {
   return (
      <>
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
