import React from "react";
import { Page } from "../components/templates";

export default function Settings({ settings }) {
   return <Page title={"Settings"}>{JSON.stringify(settings)}</Page>;
}
