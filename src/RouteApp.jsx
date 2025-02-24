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
import { Box, Typography } from "@mui/material";

function RouteApp() {
  return (
    <Router>
      <Suspense
        fallback={
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              backgroundColor: "black",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase",
                "& span": {
                  color: "#F15726",
                },
                zIndex: 999,
              }}
              mx={4}
            >
              society<span>2</span>production
            </Typography>
            <div className="box-anim" />
          </Box>
        }
      >
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
