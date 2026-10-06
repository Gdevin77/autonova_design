import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage"));
const ServicesPage = lazy(() => import("../pages/ServicesPage"));
const ServiceDetailsPage = lazy(() => import("../pages/ServiceDetailsPage"));
const BookPage = lazy(() => import("../pages/BookPage"));
const ThankYouPage = lazy(() => import("../pages/ThankYouPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const AppRouter = () => (
  <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center text-textMuted">Loading...</div>}>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailsPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  </Suspense>
);

export default AppRouter;