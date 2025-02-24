import { Environment, PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Camera } from "./Camera";
import PropTypes from "prop-types";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

const Scene = ({ progress }) => {
  const cameraRef = useRef(null);
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    if (cameraRef.current) {
      setIsCameraReady(true);
    }
  }, []);

  useFrame(() => {
    if (!isCameraReady || !cameraRef.current) return;

    const target = new THREE.Vector3(0, 0, 0);
    cameraRef.current.lookAt(target);
  });

  useEffect(() => {
    if (!isCameraReady || !cameraRef.current) return;

    const updateCamPos = () => {
      const positions = [
        [-10, 2, -10],
        [0, 5, -10],
        [10, 3, -10],
        [5, 3, -8],
      ];

      if (progress >= 1) {
        gsap.to(cameraRef.current.position, {
          x: 5,
          y: 3,
          z: -8,
          duration: 0.5,
          ease: "power1.out",
        });
      } else {
        const segmentProgress = 1 / (positions.length - 1);
        const segmentIndex = Math.floor(progress / segmentProgress);
        const percentage = (progress % segmentProgress) / segmentProgress;

        if (segmentIndex >= positions.length - 1) return;

        const [startX, startY, startZ] = positions[segmentIndex];
        const [endX, endY, endZ] = positions[segmentIndex + 1];

        const x = startX + (endX - startX) * percentage;
        const y = Math.max(startY + (endY - startY) * percentage, 2);
        const z = Math.min(startZ + (endZ - startZ) * percentage, -8);

        gsap.to(cameraRef.current.position, {
          x,
          y,
          z,
          duration: 0.5,
          ease: "power1.out",
        });
      }
    };

    updateCamPos();
  }, [progress, isCameraReady]);

  return (
    <>
      <PerspectiveCamera
        ref={(ref) => {
          if (ref) {
            cameraRef.current = ref;
            setIsCameraReady(true);
          }
        }}
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
