import { Head } from "next/document";
import Script from "next/script";
// import { Html, Head, Main, NextScript } from 'next/document'
// import ""

// import { Bootstrap } from '../ControlPanel/main'
export default function cp() {
   return (
      <>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" referrerpolicy="no-referrer" />


      <div>
         <div id="root"></div>
         <Script strategy="lazyOnload" src="/static/manifest.js"></Script>
         <Script strategy="lazyOnload" src="/static/vendor.js"></Script>
         <Script strategy="lazyOnload" src="/static/main.js"></Script>
      </div>
      </>
   )
}
