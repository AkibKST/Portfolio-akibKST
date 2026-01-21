import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { ContactConnection } from "./ContactConnection";
import { Suspense } from "react";

/**
 * ContactScene - Represents connection and communication
 * Shows two sides reaching toward each other with a bridge forming between them
 */
export const ContactScene = () => {
  return (
    <Canvas className="w-full h-full" gl={{ antialias: true, alpha: true }}>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={75} />

      <Suspense fallback={null}>
        <ContactConnection />
      </Suspense>

      <ambientLight intensity={0.7} />
    </Canvas>
  );
};
