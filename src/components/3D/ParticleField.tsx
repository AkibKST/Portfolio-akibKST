/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points } from "three";
import { EllipseCurve } from "three";

/**
 * ParticleField: Dynamic particle field representing data flow
 * Creates a field of particles that move along curves
 */
export const ParticleField = () => {
  const pointsRef = useRef<Points>(null);

  // Create particle positions
  const createParticles = () => {
    const positions = new Float32Array(1500 * 3);
    const curve = new EllipseCurve(0, 0, 3, 2, 0, Math.PI * 2, false, 0);
    const points = curve.getPoints(50);

    for (let i = 0; i < 1500; i++) {
      const point = points[i % points.length];
      positions[i * 3] = point.x + (Math.random() - 0.5) * 1;
      positions[i * 3 + 1] = point.y + (Math.random() - 0.5) * 1;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }
    return positions;
  };

  const positions = createParticles();

  useFrame((state) => {
    if (pointsRef.current && pointsRef.current.geometry) {
      const positionAttribute = (
        pointsRef.current.geometry as any
      ).getAttribute("position");
      const posArray = positionAttribute.array as Float32Array;

      for (let i = 0; i < posArray.length; i += 3) {
        posArray[i] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.01;
        posArray[i + 1] += Math.cos(state.clock.elapsedTime * 0.5 + i) * 0.01;
        posArray[i + 2] += Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.005;
      }
      positionAttribute.needsUpdate = true;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.z += 0.0001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#00d4ff"
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
};
