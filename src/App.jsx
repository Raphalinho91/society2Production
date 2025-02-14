import { Suspense, useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./Scene";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const nextSectionRef = useRef(null);

  const handleScrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <Suspense
        fallback={
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bgcolor="black"
          >
            <Typography
              variant="h2"
              color="white"
              fontWeight="bold"
              textTransform="uppercase"
            >
              society2production
            </Typography>
          </Box>
        }
      >
        <Box
          display="grid"
          placeItems="center"
          height="100vh"
          position="relative"
        >
          <Typography
            variant="h1"
            color="white"
            position="absolute"
            top="5%"
            mx={4}
            fontWeight="bold"
            align="center"
          >
            society2Production
          </Typography>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              bottom: "5%",
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            onClick={handleScrollToNextSection}
          >
            <span className="mouse">
              <span className="mouse-wheel"></span>
            </span>
          </Button>

          <Box ref={sceneRef} height="100vh" width="100vw" color="white">
            <Canvas>
              <Scene progress={progress} />
            </Canvas>
          </Box>
        </Box>

        <Box
          ref={nextSectionRef}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          height="100vh"
        >
          <Box width="50%" border={0}></Box>
          <Typography
            variant="h4"
            color="white"
            align="center"
            px={4}
            fontWeight="600"
          >
            Effortlessly scroll, zoom, and navigate with the re-engineered
            Digital Crown, now more precise than ever.
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          height="100vh"
        >
          <Typography
            variant="h4"
            color="white"
            align="center"
            px={4}
            fontWeight="600"
          >
            Built for adventure, the rugged straps are as tough as you are,
            ready for any challenge.
          </Typography>
          <Box width="50%"></Box>
        </Box>

        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          height="100vh"
        >
          <Box width="50%" border={0}></Box>
          <Typography
            variant="h4"
            color="white"
            align="center"
            px={4}
            fontWeight="600"
          >
            The brightest display ever on an Apple Watch, so you can see it
            clearly even under the harshest sun.
          </Typography>
        </Box>
      </Suspense>
    </main>
  );
}

export default App;
