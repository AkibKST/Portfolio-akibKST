import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { TestimonialVoices } from "./TestimonialVoices";
import { Suspense } from "react";

/**
 * TestimonialScene - Represents multiple voices coming together
 * Shows orbiting spheres (voices/testimonials) that pulse and connect
 */
export const TestimonialScene = () => {
  return (
    <Canvas className="w-full h-full" gl={{ antialias: true, alpha: true }}>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={75} />

      <Suspense fallback={null}>
        <TestimonialVoices />
      </Suspense>

      <ambientLight intensity={0.6} />
    </Canvas>
  );
};
