import { Box, Typography } from "@mui/material";
import "./RouteApp.css";

export default function Loader() {
  return (
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
  );
}
