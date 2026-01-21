import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface RotatingBoxProps {
  speed?: number;
  scale?: number;
  color?: string;
  rotationSpeed?: number;
}

export const RotatingBox = ({
  speed = 1,
  scale = 1,
  color = "#FF9FFC",
  rotationSpeed = 0.005,
}: RotatingBoxProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed * speed;
      meshRef.current.rotation.y += rotationSpeed * 0.7 * speed;
      meshRef.current.rotation.z += rotationSpeed * 0.4 * speed;
      meshRef.current.position.y =
        Math.cos(state.clock.elapsedTime * 0.5 * speed) * 1.5;
    }
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        wireframe
      />
    </mesh>
  );
};
