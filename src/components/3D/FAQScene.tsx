import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { FAQAccordion } from "./FAQAccordion";
import { Suspense } from "react";

/**
 * FAQScene - Represents FAQ expand/collapse concept
 * Shows stacked boxes that expand and collapse like an accordion
 */
export const FAQScene = () => {
  return (
    <Canvas className="w-full h-full" gl={{ antialias: true, alpha: true }}>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={75} />

      <Suspense fallback={null}>
        <FAQAccordion />
      </Suspense>

      <ambientLight intensity={0.6} />
    </Canvas>
  );
};
