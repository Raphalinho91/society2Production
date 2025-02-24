import { useEffect, useRef, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./Scene";
import { motion } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import { PiTiktokLogo } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const colors = ["#F15726", "#26F19E", "#2657F1", "#F1C426", "#8D26F1"];

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!sceneRef.current) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            setProgress(self.progress);
          },
        },
      })
      .to(sceneRef.current, {
        ease: "none",
        x: "-25vw",
        y: "100vh",
        transform: "translate(-25vw, 100vh)",
      })
      .to(sceneRef.current, {
        ease: "none",
        x: "25vw",
        y: "200vh",
        transform: "translate(25vw, 200vh)",
      })
      .to(sceneRef.current, {
        ease: "none",
        x: "-25vw",
        y: "300vh",
        transform: "translate(-25vw, 300vh)",
      });
  }, []);
  return (
    <main ref={mainRef}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          position: "relative",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: "bold",
            textTransform: "uppercase",
            mb: -20,
            "& span": {
              color: "#F15726",
            },
          }}
          mx={4}
        >
          society<span>2</span>production
        </Typography>
        <Box
          ref={sceneRef}
          sx={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <Canvas>
            <Scene progress={progress} />
          </Canvas>
        </Box>
        <Box
          sx={{
            display: "flex",
            color: "white",
            gap: 2,
            mt: -10,
          }}
          mx={4}
        >
          <a
            href="https://www.instagram.com/2society.production/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton sx={{ display: "flex", transition: "all 0.3s ease" }}>
              <InstagramIcon sx={{ color: "#FFF", fontSize: "40px" }} />
            </IconButton>
          </a>
          <IconButton sx={{ display: "flex", transition: "all 0.3s ease" }}>
            <PiTiktokLogo style={{ color: "#F15726", fontSize: "40px" }} />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          placeItems: "center",
          position: "relative",
          height: "90vh",
        }}
      >
        <Box sx={{ width: { xs: "0%", md: "50%" } }} border={0}></Box>
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "50%" },
            gap: 2,
            border: 0,
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              align: "left",
              color: "white",
              fontWeight: "600",
              px: 4,
              "& span": {
                color: "#F15726",
              },
            }}
          >
            Nous sommes une équipe de passionnés de <span>photographie</span>,
            dédiés à capturer les moments uniques qui racontent votre histoire.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              align: "left",
              color: "white",
              fontWeight: "600",
              px: 4,
              "& span": {
                color: "#F15726",
              },
            }}
          >
            Spécialisés dans la photographie de portrait, d’événements et de
            reportage, nous mettons notre <span>créativité</span> et notre
            savoir-faire au service de vos souvenirs. Chaque image est pensée
            pour refléter&nbsp;
            <span>l’émotion</span> et <span>l’authenticité</span> du moment,
            avec une attention particulière aux détails et à la lumière.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              align: "left",
              color: "white",
              fontWeight: "600",
              px: 4,
              "& span": {
                color: "#F15726",
              },
            }}
          >
            Que ce soit pour un <span>mariage</span>, une{" "}
            <span>séance photo professionnelle</span> ou un{" "}
            <span>projet artistique</span>, nous vous accompagnons avec une
            approche personnalisée et un regard artistique unique. 📷✨
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          placeItems: "center",
          position: "relative",
          height: "100vh",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" } }} border={0}>
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              overflow: "hidden",
              position: "relative",
              background: "#222",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: -1,
            }}
          >
            <motion.div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
                width: "100%",
                position: "absolute",
                left: 0,
                right: 0,
              }}
            >
              {[...colors, ...colors, ...colors].map((color, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: index % 3 === 1 ? ["-100%", "0%"] : ["0%", "-100%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "8px",
                    backgroundColor: color,
                  }}
                />
              ))}
            </motion.div>
          </Box>
        </Box>
        <Box sx={{ width: { xs: "0%", md: "50%" } }} border={0}></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          placeItems: "center",
          position: "relative",
          height: "100vh",
        }}
      >
        <Box sx={{ width: { xs: "0%", md: "50%" } }} border={0}></Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
          }}
          border={0}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/picture")}
            sx={{
              display: "flex",
              backgroundColor: "#F15726",
              color: "#FFF",
              fontWeight: "bold",
              position: "absolute",
              top: "20%",
              left: "20%",
              transition: "all 0.3s ease",
            }}
          >
            Voir plus de photo
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("/contact")}
            sx={{
              display: "flex",
              backgroundColor: "#F15726",
              color: "#FFF",
              fontWeight: "bold",
              position: "absolute",
              top: "30%",
              right: "10%",
              transition: "all 0.3s ease",
            }}
          >
            Réserver un shooting
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("/price")}
            sx={{
              display: "flex",
              backgroundColor: "#F15726",
              color: "#FFF",
              fontWeight: "bold",
              position: "absolute",
              bottom: { xs: "0%", md: "20%" },
              right: "20%",
              transition: "all 0.3s ease",
            }}
          >
            Voir les prix
          </Button>
        </Box>
      </Box>
    </main>
  );
}
