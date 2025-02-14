import { Environment, PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Camera } from "./Camera";
import PropTypes from "prop-types";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Scene = ({ progress }) => {
  const cameraRef = useRef(null);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  useEffect(() => {
    if (!cameraRef.current) return;
    const updateCamPos = () => {
      const positions = [
        [-10, 0, -10],
        [0, 10, -10],
        [10, 0, -10],
        [5, 0, -10],
      ];
      gsap.killTweensOf(cameraRef.current.position);
      if (progress >= 1) {
        gsap.to(cameraRef.current.position, {
          x: 5,
          y: 0,
          z: -10,
          duration: 0.5,
          ease: "power1.out",
        });
      } else {
        const segmentProgress = 1 / 3;
        const segmentIndex = Math.floor(progress / segmentProgress);
        const perentage = (progress % segmentProgress) / segmentProgress;
        if (segmentIndex >= positions.length - 1) return;
        const [startX, startY, startZ] = positions[segmentIndex];
        const [endX, endY, endZ] = positions[segmentIndex + 1];
        const x = startX + (endX - startX) * perentage;
        const y = startY + (endY - startY) * perentage;
        const z = startZ + (endZ - startZ) * perentage;
        gsap.to(cameraRef.current.position, {
          x: x,
          y: y,
          z: z,
          duration: 0.5,
          ease: "power1.out",
        });
      }
    };
    updateCamPos();
  }, [progress]);

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={1000}
        makeDefault
        position={[0, 0, 10]}
      />
      <Environment preset="city" />
      <Camera />
    </>
  );
};

Scene.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Scene;
