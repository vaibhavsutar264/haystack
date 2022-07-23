import React from 'react'
import { Page } from '../../components/templates'

export default function Preferences({ user }) {
   return (
      <Page>
         {user?.name}
      </Page>
   )
}
