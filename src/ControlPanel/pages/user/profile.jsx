import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import { Page } from "../../components/templates";

export default function Profile({ user }) {
   return (
      <Page title={user?.name}>
         <InertiaLink href={route("admin.notifications")}>
            notifications
         </InertiaLink>
         <InertiaLink href={route("admin.settings")}>Settings</InertiaLink>
      </Page>
   );
}
