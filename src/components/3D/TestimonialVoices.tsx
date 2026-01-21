import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";

/**
 * TestimonialVoices: Represents multiple voices/testimonials coming together
 * - Multiple spheres orbiting a center
 * - Each sphere represents a different person/voice
 * - They orbit together, showing unity/agreement
 */
export const TestimonialVoices = () => {
  const groupRef = useRef<Group>(null);
  const voicesRef = useRef<Mesh[]>([]);

  const voices = [
    { color: "#FF6B9D", angle: 0, size: 0.5 },
    { color: "#00D9FF", angle: Math.PI * 0.5, size: 0.55 },
    { color: "#FFB800", angle: Math.PI, size: 0.5 },
    { color: "#00FF9F", angle: Math.PI * 1.5, size: 0.55 },
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.005;
      groupRef.current.rotation.x += 0.002;

      // Orbit each voice around center
      voices.forEach((voice, idx) => {
        if (voicesRef.current[idx]) {
          const mesh = voicesRef.current[idx];
          const time = state.clock.elapsedTime;
          mesh.position.x = Math.cos(voice.angle + time * 0.7) * 2.5;
          mesh.position.y = Math.sin(voice.angle + time * 0.7) * 2.5;
          mesh.rotation.x += 0.008;
          mesh.rotation.y += 0.012;

          // Pulsate size to show speaking
          mesh.scale.x = voice.size + Math.sin(time * 2 + idx) * 0.15;
          mesh.scale.y = voice.size + Math.sin(time * 2 + idx) * 0.15;
          mesh.scale.z = voice.size + Math.sin(time * 2 + idx) * 0.15;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Center quote mark */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshPhongMaterial
          color="#5227FF"
          emissive="#5227FF"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Orbiting voices */}
      {voices.map((voice, idx) => (
        <group key={idx}>
          <mesh
            ref={(el) => {
              if (el) voicesRef.current[idx] = el;
            }}
            position={[
              Math.cos(voice.angle) * 2.5,
              Math.sin(voice.angle) * 2.5,
              0,
            ]}
          >
            <sphereGeometry args={[voice.size, 32, 32]} />
            <meshPhongMaterial
              color={voice.color}
              emissive={voice.color}
              emissiveIntensity={0.4}
            />
          </mesh>

          {/* Connection to center */}
          <mesh
            position={[
              Math.cos(voice.angle) * 2.5,
              Math.sin(voice.angle) * 2.5,
              0,
            ]}
          >
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={
                  new Float32Array([
                    0,
                    0,
                    0,
                    -Math.cos(voice.angle) * 2.5,
                    -Math.sin(voice.angle) * 2.5,
                    0,
                  ])
                }
                itemSize={3}
                args={[
                  new Float32Array([
                    0,
                    0,
                    0,
                    -Math.cos(voice.angle) * 2.5,
                    -Math.sin(voice.angle) * 2.5,
                    0,
                  ]),
                  3,
                ]}
              />
            </bufferGeometry>
            <lineBasicMaterial color={voice.color} transparent opacity={0.4} />
          </mesh>
        </group>
      ))}

      {/* Ambient lights */}
      <pointLight position={[4, 0, 0]} intensity={0.7} color="#FF6B9D" />
      <pointLight position={[-4, 0, 0]} intensity={0.7} color="#00D9FF" />
    </group>
  );
};
