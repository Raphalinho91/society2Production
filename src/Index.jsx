import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import RouteApp from "./RouteApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <RouteApp />
  </StrictMode>
);
