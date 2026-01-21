import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { FloatingIcosahedron } from "./FloatingIcosahedron";
import { RotatingBox } from "./RotatingBox";
import { FloatingParticles } from "./FloatingParticles";
import { Suspense } from "react";

export const HeroScene = () => {
  return (
    <Canvas className="w-full h-full" gl={{ antialias: true, alpha: true }}>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={75} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={2}
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

      {/* Main floating objects */}
      <FloatingIcosahedron speed={1} scale={1.5} color="#5227FF" />
      <RotatingBox
        speed={0.8}
        scale={0.8}
        color="#FF9FFC"
        rotationSpeed={0.004}
      />
      <FloatingParticles count={150} speed={0.6} color="#B19EEF" />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#5227FF" />
      <pointLight position={[0, 0, -10]} intensity={0.5} color="#FF9FFC" />
    </Canvas>
  );
};
