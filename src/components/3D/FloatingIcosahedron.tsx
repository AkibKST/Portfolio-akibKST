import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface FloatingIcosahedronProps {
  speed?: number;
  scale?: number;
  color?: string;
}

export const FloatingIcosahedron = ({
  speed = 1,
  scale = 1,
  color = "#5227FF",
}: FloatingIcosahedronProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001 * speed;
      meshRef.current.rotation.y += 0.002 * speed;
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5 * speed) * 2;
    }
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <icosahedronGeometry args={[1, 4]} />
      <meshPhongMaterial
        color={color}
        wireframe
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};
