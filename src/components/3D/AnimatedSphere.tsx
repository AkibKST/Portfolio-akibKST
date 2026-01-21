import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface AnimatedSphereProps {
  speed?: number;
  scale?: number;
  color?: string;
  wireframe?: boolean;
}

export const AnimatedSphere = ({
  speed = 1,
  scale = 1,
  color = "#FF6B9D",
  wireframe = true,
}: AnimatedSphereProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001 * speed;
      meshRef.current.rotation.y += 0.002 * speed;
      meshRef.current.scale.x =
        1 + Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.2;
      meshRef.current.scale.y =
        1 + Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.2;
      meshRef.current.scale.z =
        1 + Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.25}
        wireframe={wireframe}
      />
    </mesh>
  );
};
