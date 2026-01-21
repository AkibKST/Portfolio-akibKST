/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";
import * as THREE from "three";

interface TechNode {
  id: string;
  angle: number;
  color: string;
  label: string;
  speed: number;
}

/**
 * TechnologyAnimation: 3D visualization of modern tech stack
 * Shows interconnected technology nodes with data flow
 */
export const TechnologyAnimation = () => {
  const groupRef = useRef<Group>(null);
  const centerRef = useRef<Mesh>(null);
  const techRefs = useRef<Mesh[]>([]);
  const particlesRef = useRef<Mesh>(null);

  const technologies: TechNode[] = [
    { id: "1", angle: 0, color: "#61dafb", label: "React", speed: 0.3 },
    {
      id: "2",
      angle: Math.PI / 3,
      color: "#3178c6",
      label: "TypeScript",
      speed: 0.4,
    },
    {
      id: "3",
      angle: (2 * Math.PI) / 3,
      color: "#68a063",
      label: "Node.js",
      speed: 0.35,
    },
    {
      id: "4",
      angle: Math.PI,
      color: "#ffd700",
      label: "JavaScript",
      speed: 0.32,
    },
    {
      id: "5",
      angle: (4 * Math.PI) / 3,
      color: "#764abc",
      label: "3D Web",
      speed: 0.38,
    },
    {
      id: "6",
      angle: (5 * Math.PI) / 3,
      color: "#ff6b6b",
      label: "Cloud",
      speed: 0.36,
    },
  ];

  // Create particle system
  const createParticles = () => {
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  };

  const particlePositions = createParticles();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.0002;
      groupRef.current.rotation.z += 0.0003;
    }

    // Animate center core
    if (centerRef.current) {
      centerRef.current.rotation.x += 0.005;
      centerRef.current.rotation.y += 0.008;
      centerRef.current.scale.z =
        0.7 + Math.sin(state.clock.elapsedTime * 2.5) * 0.3;

      if (centerRef.current.material instanceof THREE.Material) {
        (centerRef.current.material as any).emissiveIntensity =
          0.6 + Math.sin(state.clock.elapsedTime * 2) * 0.4;
      }
    }

    // Animate tech nodes
    techRefs.current.forEach((mesh, idx) => {
      if (mesh) {
        const tech = technologies[idx];
        const time = state.clock.elapsedTime * tech.speed;
        const radius = 3.5;
        const angle = tech.angle + time;

        // Orbital motion with height variation
        mesh.position.x = Math.cos(angle) * radius;
        mesh.position.y = Math.sin(angle * 0.7) * radius * 0.6;
        mesh.position.z = Math.cos(angle * 0.5) * radius * 0.4;

        // Rotation
        mesh.rotation.x += 0.008;
        mesh.rotation.y += 0.012;

        // Scale pulse
        const pulse = 1 + Math.sin(time * 3 + idx) * 0.2;
        mesh.scale.set(pulse, pulse, pulse);

        // Glow effect
        if (mesh.material instanceof THREE.Material) {
          (mesh.material as any).emissiveIntensity =
            0.4 + Math.sin(time * 3 + idx) * 0.5;
        }
      }
    });

    // Animate particles
    if (particlesRef.current && particlesRef.current.geometry) {
      const positionAttribute = (
        particlesRef.current.geometry as any
      ).getAttribute("position");
      const posArray = positionAttribute.array as Float32Array;

      for (let i = 0; i < posArray.length; i += 3) {
        posArray[i] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.008;
        posArray[i + 1] += Math.cos(state.clock.elapsedTime * 0.5 + i) * 0.008;
        posArray[i + 2] += Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.004;
      }
      positionAttribute.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Glowing center core - represents the ecosystem */}
      <mesh ref={centerRef}>
        <dodecahedronGeometry args={[0.6, 2]} />
        <meshPhongMaterial
          color="#00d4ff"
          emissive="#0099cc"
          emissiveIntensity={0.6}
          wireframe={false}
          shininess={100}
        />
      </mesh>

      {/* Technology nodes orbiting the center */}
      {technologies.map((tech, idx) => (
        <mesh
          key={tech.id}
          ref={(el) => {
            if (el) techRefs.current[idx] = el;
          }}
        >
          <octahedronGeometry args={[0.4, 1]} />
          <meshPhongMaterial
            color={tech.color}
            emissive={tech.color}
            emissiveIntensity={0.4}
            shininess={80}
          />
        </mesh>
      ))}

      {/* Connection lines between center and tech nodes */}
      {technologies.map((tech) => (
        <line key={`line-${tech.id}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={
                new Float32Array([
                  0,
                  0,
                  0,
                  Math.cos(tech.angle) * 3.5,
                  Math.sin(tech.angle * 0.7) * 3.5 * 0.6,
                  Math.cos(tech.angle * 0.5) * 3.5 * 0.4,
                ])
              }
              itemSize={3}
              args={[
                new Float32Array([
                  0,
                  0,
                  0,
                  Math.cos(tech.angle) * 3.5,
                  Math.sin(tech.angle * 0.7) * 3.5 * 0.6,
                  Math.cos(tech.angle * 0.5) * 3.5 * 0.4,
                ]),
                3,
              ]}
            />
          </bufferGeometry>
          <lineBasicMaterial color={tech.color} opacity={0.4} transparent />
        </line>
      ))}

      {/* Data flow particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={500}
            array={particlePositions}
            itemSize={3}
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#00d4ff"
          sizeAttenuation
          transparent
          opacity={0.5}
        />
      </points>

      {/* Glow ring around the center */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2.2, 0.1, 32, 100]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.3} />
      </mesh>

      {/* Secondary glow ring */}
      <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[3.5, 0.08, 32, 100]} />
        <meshBasicMaterial color="#ff6b6b" transparent opacity={0.2} />
      </mesh>
    </group>
  );
};
