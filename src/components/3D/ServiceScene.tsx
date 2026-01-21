import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { ServiceNetwork } from "./ServiceNetwork";
import { Suspense } from "react";

/**
 * ServiceScene - Represents interconnected services
 * Shows a central hub with orbiting service nodes connected by lines
 */
export const ServiceScene = () => {
  return (
    <Canvas className="w-full h-full" gl={{ antialias: true, alpha: true }}>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={75} />

      <Suspense fallback={null}>
        <ServiceNetwork />
      </Suspense>

      <ambientLight intensity={0.7} />
    </Canvas>
  );
};
