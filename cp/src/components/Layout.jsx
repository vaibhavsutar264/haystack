import React from 'react'

export default function Layout({ Sidebar, Header, Footer, children,...props }) {
   return (
      <div>
         {children}
      </div>
   )
}
