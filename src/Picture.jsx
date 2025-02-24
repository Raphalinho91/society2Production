import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "./Picture.css";

const Picture = () => {
  const [visibleBlocks, setVisibleBlocks] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const blocks = document.querySelectorAll(".block");
      const visibleBlocksArray = [];
      blocks.forEach((block, index) => {
        const rect = block.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          visibleBlocksArray.push(index);
        }
      });
      setVisibleBlocks(visibleBlocksArray);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        padding: 3,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          color: "#FFF",
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
          "& span": {
            color: "#F15726",
          },
        }}
      >
        Nos meilleurs <span>shooting</span>
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {Array.from({ length: 20 }, (_, index) => {
          const blockClass = `block block${(index % 5) + 1} ${
            visibleBlocks.includes(index) ? "visible" : ""
          }`;
          return <Box key={index} className={blockClass} />;
        })}
      </Box>
    </Box>
  );
};

export default Picture;
