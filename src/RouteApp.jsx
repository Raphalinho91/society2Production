import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense } from "react";
import Contact from "./Contact";
import Picture from "./Picture";
import Price from "./Price";
import Home from "./Home";
import "./RouteApp.css";
import Loader from "./Loader";

function RouteApp() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/picture" element={<Picture />} />
          <Route path="/price" element={<Price />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default RouteApp;
