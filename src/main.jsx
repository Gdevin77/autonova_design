import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AppRouter from "./routes/AppRouter";
import Preloader from "./components/Preloader";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Preloader />
        <AppRouter />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);