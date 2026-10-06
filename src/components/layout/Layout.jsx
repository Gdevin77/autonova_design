import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import ServiceRequestBanner from "./ServiceRequestBanner";
import ScrollToTop from "../ScrollToTop";

const Layout = () => (
  <div className="min-h-screen">
    <ScrollToTop />
    <ServiceRequestBanner />
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
    <FloatingActions />
  </div>
);

export default Layout;
