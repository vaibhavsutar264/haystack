import { I18nProvider } from "@react-aria/i18n";
import { LayoutProvider } from "../../../providers";
import { Breadcrumb, Container } from "../../atoms";
import { Footer, Navigation } from "../../organisms";

export default function AppLayout({ children }) {
   return (
      <LayoutProvider>
         <Navigation />
         <Container>
            {/* <Breadcrumb>
               <Breadcrumb.Item onPress={() => alert('Pressed Folder 1')}>
                  Folder 1
               </Breadcrumb.Item>
               <Breadcrumb.Item onPress={() => alert('Pressed Folder 2')}>
                  Folder 2
               </Breadcrumb.Item>
               <Breadcrumb.Item>Folder 3</Breadcrumb.Item>
            </Breadcrumb> */}
            {children}
         </Container>
         <Footer />
      </LayoutProvider>
   )
}
