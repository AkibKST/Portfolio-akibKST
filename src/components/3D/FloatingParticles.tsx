import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points } from "three";

interface FloatingParticlesProps {
  count?: number;
  speed?: number;
  color?: string;
}

export const FloatingParticles = ({
  count = 100,
  speed = 0.5,
  color = "#B19EEF",
}: FloatingParticlesProps) => {
  const pointsRef = useRef<Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current && pointsRef.current.geometry.attributes.position) {
      pointsRef.current.rotation.x += 0.0001 * speed;
      pointsRef.current.rotation.y += 0.0002 * speed;

      const positions = pointsRef.current.geometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] +=
          Math.sin(state.clock.elapsedTime * 0.5 * speed + i) * 0.001;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles}
          itemSize={3}
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color={color}
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
};
