import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";

/**
 * ServiceNetwork: Represents interconnected services/nodes
 * - Central core
 * - Orbiting service nodes
 * - Connection lines between them
 */
export const ServiceNetwork = () => {
  const groupRef = useRef<Group>(null);
  const nodesRef = useRef<Mesh[]>([]);

  const nodes = [
    { angle: 0, color: "#00D9FF", label: "Service 1" },
    { angle: Math.PI * 0.66, color: "#FF6B9D", label: "Service 2" },
    { angle: Math.PI * 1.33, color: "#FFB800", label: "Service 3" },
    { angle: Math.PI * 2, color: "#00FF9F", label: "Service 4" },
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.002;

      // Animate orbiting nodes
      nodes.forEach((node, idx) => {
        if (nodesRef.current[idx]) {
          const mesh = nodesRef.current[idx];
          mesh.position.x =
            Math.cos(node.angle + state.clock.elapsedTime * 0.5) * 3;
          mesh.position.y =
            Math.sin(node.angle + state.clock.elapsedTime * 0.5) * 3;
          mesh.rotation.x += 0.01;
          mesh.rotation.y += 0.01;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central core */}
      <mesh>
        <octahedronGeometry args={[0.6, 2]} />
        <meshPhongMaterial
          color="#5227FF"
          emissive="#5227FF"
          emissiveIntensity={0.5}
          wireframe
        />
      </mesh>

      {/* Orbiting service nodes */}
      {nodes.map((node, idx) => (
        <group key={idx}>
          {/* Node */}
          <mesh
            ref={(el) => {
              if (el) nodesRef.current[idx] = el;
            }}
            position={[Math.cos(node.angle) * 3, Math.sin(node.angle) * 3, 0]}
          >
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshPhongMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={0.3}
              wireframe
            />
          </mesh>

          {/* Connection line to center */}
          <line key={`line-${idx}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={
                  new Float32Array([
                    0,
                    0,
                    0,
                    Math.cos(node.angle) * 3,
                    Math.sin(node.angle) * 3,
                    0,
                  ])
                }
                itemSize={3}
                args={[
                  new Float32Array([
                    0,
                    0,
                    0,
                    Math.cos(node.angle) * 3,
                    Math.sin(node.angle) * 3,
                    0,
                  ]),
                  3,
                ]}
              />
            </bufferGeometry>
            <lineBasicMaterial color={node.color} transparent opacity={0.5} />
          </line>
        </group>
      ))}

      {/* Ambient light effect */}
      <pointLight position={[0, 0, 5]} intensity={1} color="#5227FF" />
      <pointLight position={[0, 0, -5]} intensity={0.5} color="#FF9FFC" />
    </group>
  );
};
