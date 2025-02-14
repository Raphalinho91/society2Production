import { Suspense, useEffect, useRef, useState } from "react";
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
    <main ref={mainRef} className="overflow-x-hidden">
      <Suspense
        fallback={
          <div className="loading-page">
            <h1 className="text-white text-8xl font-extrabold uppercase tracking-wide">
              society2production
            </h1>
          </div>
        }
      >
        <section className="relative grid place-items-center h-[100vh]">
          <p className="text-white text-center absolute top-[5%] mx-4 w-fit text-8xl font-bold">
            society2Production
          </p>
          <button
            className="absolute bottom-[5%] flex items-center justify-center w-16 h-16"
            onClick={handleScrollToNextSection}
          >
            <span className="mouse">
              <span className="mouse-wheel"></span>
            </span>
          </button>

          <div ref={sceneRef} className="h-[100vh] w-[100vw] text-white">
            <Canvas>
              <Scene progress={progress} />
            </Canvas>
          </div>
        </section>

        <section
          ref={nextSectionRef}
          className=" relative flex items-center justify-evenly h-[100vh]"
        >
          <p className="w-[50%] border-0 border-red-700"></p>

          <p className="text-white w-[50%] text-center px-4 text-4xl font-semibold">
            Effortlessly scroll, zoom, and navigate with the re-engineered
            Digital Crown, now more precise than ever.
          </p>
        </section>

        <section className=" relative flex items-center justify-evenly h-[100vh]">
          <p className="text-white order-1 w-[50%] text-center px-4 text-4xl font-semibold">
            Built for adventure, the rugged straps are as tough as you are,
            ready for any challenge.
          </p>
          <p className="w-[50%] order-2"></p>
        </section>

        <section className=" relative flex items-center justify-evenly h-[100vh]">
          <p className="w-[50%] border-0 border-red-700"></p>

          <p className="text-white w-[50%] text-center px-4 text-4xl font-semibold">
            The brightest display ever on an Apple Watch, so you can see it
            clearly even under the harshest sun.
          </p>
        </section>
      </Suspense>
    </main>
  );
}

export default App;
