import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { TechnologyAnimation } from "./TechnologyAnimation";
import { Suspense } from "react";

export const HeroScene = () => {
  return (
    <Canvas className="w-full h-full" gl={{ antialias: true, alpha: true }}>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={75} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.5}
        enableDamping
        dampingFactor={0.05}
      />

      <Suspense fallback={null}>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      </Suspense>

      {/* Ambient and point lights for better 3D effect */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />

      {/* Modern Technology Animation */}
      <TechnologyAnimation />
    </Canvas>
  );
};
