import { SSRProvider } from "@react-aria/ssr";
import { StrictMode, useEffect } from "react";
import '../styles/main.css'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import 'aos/dist/aos.css';
import AOS from 'aos'
//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
   useEffect(() => {
      AOS.init()

   }, [])
   return (
      <StrictMode>
         <SSRProvider>
            <Component {...pageProps} />
         </SSRProvider>
      </StrictMode>
   );
}

export default MyApp;
