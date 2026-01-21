/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";
import * as THREE from "three";

interface ProjectNode {
  id: string;
  angle: number;
  color: string;
  label: string;
}

/**
 * ProjectShowcase: 3D representation of project portfolio
 * Shows multiple projects orbiting around a central concept
 */
export const ProjectShowcase = () => {
  const groupRef = useRef<Group>(null);
  const centerRef = useRef<Mesh>(null);
  const projectRefs = useRef<Mesh[]>([]);

  const projects: ProjectNode[] = [
    { id: "1", angle: 0, color: "#ff6b6b", label: "Web App" },
    { id: "2", angle: Math.PI / 2, color: "#4ecdc4", label: "Mobile" },
    { id: "3", angle: Math.PI, color: "#45b7d1", label: "Dashboard" },
    { id: "4", angle: (3 * Math.PI) / 2, color: "#96ceb4", label: "Design" },
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.0005;
    }

    if (centerRef.current) {
      centerRef.current.rotation.x += 0.005;
      centerRef.current.rotation.y += 0.008;
      centerRef.current.scale.z =
        0.8 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }

    projectRefs.current.forEach((mesh, idx) => {
      if (mesh) {
        const project = projects[idx];
        const time = state.clock.elapsedTime;
        const angle = project.angle + time * 0.3;

        mesh.position.x = Math.cos(angle) * 3.5;
        mesh.position.y = Math.sin(angle) * 3.5;
        mesh.position.z = Math.sin(time * 0.7 + idx) * 0.8;

        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.007;

        const scale = 1 + Math.sin(time * 2 + idx) * 0.15;
        mesh.scale.set(scale, scale, scale);

        // Pulse effect
        if (mesh.material instanceof THREE.Material) {
          (mesh.material as any).emissiveIntensity =
            0.3 + Math.sin(time * 3 + idx) * 0.3;
        }
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Central sphere */}
      <mesh ref={centerRef}>
        <icosahedronGeometry args={[0.8, 3]} />
        <meshPhongMaterial
          color="#00d4ff"
          emissive="#00a8cc"
          emissiveIntensity={0.5}
          wireframe={false}
        />
      </mesh>

      {/* Project nodes */}
      {projects.map((project, idx) => (
        <mesh
          key={project.id}
          ref={(el) => {
            if (el) projectRefs.current[idx] = el;
          }}
        >
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshPhongMaterial
            color={project.color}
            emissive={project.color}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}

      {/* Connection lines */}
      {projects.map((project) => (
        <line key={`line-${project.id}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={
                new Float32Array([
                  0,
                  0,
                  0,
                  Math.cos(project.angle) * 3.5,
                  Math.sin(project.angle) * 3.5,
                  0,
                ])
              }
              itemSize={3}
              args={[
                new Float32Array([
                  0,
                  0,
                  0,
                  Math.cos(project.angle) * 3.5,
                  Math.sin(project.angle) * 3.5,
                  0,
                ]),
                3,
              ]}
            />
          </bufferGeometry>
          <lineBasicMaterial color={project.color} opacity={0.3} transparent />
        </line>
      ))}
    </group>
  );
};
