import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

/**
 * FAQAccordion: Represents FAQ expand/collapse concept
 * - Multiple stacked boxes
 * - Boxes expand and collapse like an accordion
 * - Shows the Q&A opening/closing concept
 */
export const FAQAccordion = () => {
  const groupRef = useRef<Group>(null);

  const boxes = [
    { color: "#FFB800", offset: 0 },
    { color: "#FF9FFC", offset: 0.8 },
    { color: "#00D9FF", offset: 1.6 },
    { color: "#00FF9F", offset: 2.4 },
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;

      // Animate each box with accordion effect
      boxes.forEach((_, idx) => {
        const box = groupRef.current?.children[idx];
        if (box) {
          const expandCollapse =
            Math.sin(state.clock.elapsedTime * 0.5 + idx * 0.5) * 0.5 + 0.5;
          box.scale.y = 0.8 + expandCollapse * 0.4;
          box.position.z = expandCollapse * 0.5;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {boxes.map((box, idx) => (
        <mesh key={idx} position={[0, idx * 0.8 - 1.2, 0]}>
          <boxGeometry args={[1.2, 0.6, 0.8]} />
          <meshPhongMaterial
            color={box.color}
            emissive={box.color}
            emissiveIntensity={0.3}
            wireframe
          />
        </mesh>
      ))}

      {/* Center question mark indicator */}
      <mesh position={[0, 0, 1.5]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshPhongMaterial
          color="#5227FF"
          emissive="#5227FF"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Lights */}
      <pointLight position={[3, 0, 0]} intensity={0.8} color="#FFB800" />
      <pointLight position={[-3, 0, 0]} intensity={0.8} color="#00D9FF" />
    </group>
  );
};
