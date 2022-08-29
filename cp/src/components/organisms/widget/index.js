import { Fragment } from "react";

export default function WidgetCard({ name }) {
   if (!name) {
      throw new Error('name not provided for widget')
   }
   return (
      <Fragment>

      </Fragment>
   )
}
