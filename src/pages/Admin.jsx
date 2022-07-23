import { BrowserRouter } from "react-router-dom";
// import "./App.css";
import HeaderComponent from "./Components/Header/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
function Admin() {
   if (typeof document !== "undefined") {
  return (
     <>
    <BrowserRouter>
      <HeaderComponent />;
      <FooterComponent />
    </BrowserRouter>
    </>
  );
}
}

export default Admin;
