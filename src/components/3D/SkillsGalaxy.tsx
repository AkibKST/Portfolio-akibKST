/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";
import * as THREE from "three";

/**
 * SkillsGalaxy: 3D visualization of skills arranged in galaxy-like formation
 * Shows skills as planets with connecting orbits
 */
export const SkillsGalaxy = () => {
  const groupRef = useRef<Group>(null);
  const skillRefs = useRef<Mesh[]>([]);
  const starsRef = useRef<Mesh>(null);

  const skills = [
    { name: "React", color: "#61dafb", size: 0.5, speed: 0.4 },
    { name: "TypeScript", color: "#3178c6", size: 0.45, speed: 0.5 },
    { name: "Node.js", color: "#68a063", size: 0.5, speed: 0.35 },
    { name: "3D Web", color: "#ff6b6b", size: 0.4, speed: 0.45 },
    { name: "Design", color: "#ffd700", size: 0.48, speed: 0.38 },
    { name: "Full Stack", color: "#a78bfa", size: 0.52, speed: 0.42 },
  ];

  // Create background stars
  const createStars = () => {
    const starPositions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 20;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return starPositions;
  };

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.0001;
      groupRef.current.rotation.y += 0.0003;
    }

    skillRefs.current.forEach((mesh, idx) => {
      if (mesh) {
        const skill = skills[idx];
        const angle =
          state.clock.elapsedTime * skill.speed +
          (idx * Math.PI * 2) / skills.length;
        const radius = 3 + idx * 0.4;

        mesh.position.x = Math.cos(angle) * radius;
        mesh.position.y = Math.sin(angle) * radius * 0.6;
        mesh.position.z = Math.cos(angle * 0.7) * radius * 0.3;

        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.015;

        // Glow effect
        if (mesh.material instanceof THREE.Material) {
          (mesh.material as any).emissiveIntensity =
            0.4 + Math.sin(state.clock.elapsedTime * 3 + idx) * 0.4;
        }
      }
    });

    if (starsRef.current) {
      starsRef.current.rotation.x += 0.00005;
      starsRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Background stars */}
      <points ref={starsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={500}
            array={createStars()}
            itemSize={3}
            args={[createStars(), 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#ffffff" opacity={0.4} transparent />
      </points>

      {/* Skill planets */}
      {skills.map((skill, idx) => (
        <mesh
          key={skill.name}
          ref={(el) => {
            if (el) skillRefs.current[idx] = el;
          }}
        >
          <sphereGeometry args={[skill.size, 32, 32]} />
          <meshPhongMaterial
            color={skill.color}
            emissive={skill.color}
            emissiveIntensity={0.3}
            shininess={100}
          />
        </mesh>
      ))}

      {/* Orbital rings */}
      {skills.map((_, idx) => {
        const radius = 3 + idx * 0.4;
        const points = [];
        for (let i = 0; i <= 64; i++) {
          const angle = (i / 64) * Math.PI * 2;
          points.push(
            Math.cos(angle) * radius,
            Math.sin(angle) * radius * 0.6,
            Math.cos(angle * 0.7) * radius * 0.3,
          );
        }

        return (
          <line key={`orbit-${idx}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={65}
                array={new Float32Array(points)}
                itemSize={3}
                args={[new Float32Array(points), 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#ffffff" opacity={0.1} transparent />
          </line>
        );
      })}
    </group>
  );
};
