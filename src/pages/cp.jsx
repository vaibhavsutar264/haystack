import Script from "next/script";
import { Bootstrap, Screen } from "../../cp/src";
import { ErrorBoundary } from "../../cp/src/components/molecules";

export default function cp() {
   return (
      // <ErrorBoundary>
         <Bootstrap >
            <Screen />
         </Bootstrap>
      // </ErrorBoundary>
   );
}
