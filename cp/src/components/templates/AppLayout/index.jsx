import { I18nProvider } from "@react-aria/i18n";
import { LayoutProvider } from "../../../providers";
import { Breadcrumb, Container } from "../../atoms";
import { Footer, Navigation } from "../../organisms";

export default function AppLayout({ children }) {
   return (
      <LayoutProvider>
         <Navigation />
         <Container className="flex-1">
            {children}
         </Container>
         <Footer />
      </LayoutProvider>
   )
}
