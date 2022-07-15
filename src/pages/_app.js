import "../styles/globals.css";
// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
// Bootstrap

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
