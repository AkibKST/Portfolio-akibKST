/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";
import * as THREE from "three";

/**
 * ContactConnection: Represents connection/communication
 * - Left and right elements moving toward each other
 * - Connection forming between them
 * - Shows the concept of reaching out and connecting
 */
export const ContactConnection = () => {
  const groupRef = useRef<Group>(null);
  const leftRef = useRef<Mesh>(null);
  const rightRef = useRef<Mesh>(null);
  const bridgeRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (leftRef.current && rightRef.current) {
      const wave = Math.sin(state.clock.elapsedTime * 1.2) * 0.3;

      // Left side - approaching
      leftRef.current.position.x = -1.5 + wave * 0.2;
      leftRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.8 + 0) * 0.5;
      leftRef.current.rotation.x += 0.01;
      leftRef.current.rotation.z += 0.015;

      // Right side - approaching
      rightRef.current.position.x = 1.5 - wave * 0.2;
      rightRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.8 + Math.PI) * 0.5;
      rightRef.current.rotation.x += 0.01;
      rightRef.current.rotation.z -= 0.015;

      // Bridge/connection between them
      if (
        bridgeRef.current &&
        bridgeRef.current.material instanceof THREE.Material
      ) {
        bridgeRef.current.scale.x = 1 + wave * 0.3;
        (bridgeRef.current.material as any).opacity =
          0.3 + Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Left contact point */}
      <mesh ref={leftRef} position={[-1.5, 0, 0]}>
        <icosahedronGeometry args={[0.5, 3]} />
        <meshPhongMaterial
          color="#FF6B9D"
          emissive="#FF6B9D"
          emissiveIntensity={0.4}
          wireframe
        />
      </mesh>

      {/* Right contact point */}
      <mesh ref={rightRef} position={[1.5, 0, 0]}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshPhongMaterial
          color="#00D9FF"
          emissive="#00D9FF"
          emissiveIntensity={0.4}
          wireframe
        />
      </mesh>

      {/* Connection bridge */}
      <mesh ref={bridgeRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 3, 16]} />
        <meshPhongMaterial
          color="#5227FF"
          emissive="#5227FF"
          emissiveIntensity={0.5}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Floating connection particles */}
      {[0, 1, 2, 3].map((idx) => (
        <mesh
          key={idx}
          position={[
            Math.sin(idx * Math.PI * 0.5) * 2,
            Math.cos(idx * Math.PI * 0.5 + Math.PI * 0.25) * 2,
            0,
          ]}
        >
          <sphereGeometry args={[0.15, 8, 8]} />
          <meshPhongMaterial
            color={["#FFB800", "#00FF9F", "#FF9FFC", "#00D9FF"][idx]}
            emissive={["#FFB800", "#00FF9F", "#FF9FFC", "#00D9FF"][idx]}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {/* Lights */}
      <pointLight position={[-2, 0, 2]} intensity={0.8} color="#FF6B9D" />
      <pointLight position={[2, 0, 2]} intensity={0.8} color="#00D9FF" />
      <pointLight position={[0, 0, -3]} intensity={0.6} color="#5227FF" />
    </group>
  );
};
