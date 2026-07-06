import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Torus, Points, PointMaterial } from "@react-three/drei";
import { EffectComposer, Bloom, DepthOfField } from "@react-three/postprocessing";
import * as THREE from "three";

// Custom inSphere random function to avoid maath import issues
function inSphere(array, { radius = 1 }) {
  const n = array.length / 3;
  for (let i = 0; i < n; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = radius * Math.cbrt(Math.random()); // Uniform distribution in sphere
    array[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    array[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    array[i * 3 + 2] = r * Math.cos(phi);
  }
  return array;
}

// Magical Dust Particles
const Starfield = () => {
  const ref = useRef();
  const sphere = useMemo(() => inSphere(new Float32Array(4000 * 3), { radius: 12 }), []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;

    const mouseX = (state.pointer.x * 2);
    const mouseY = (state.pointer.y * 2);
    ref.current.position.x += (mouseX - ref.current.position.x) * 0.02;
    ref.current.position.y += (mouseY - ref.current.position.y) * 0.02;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffd700"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

// The Central Artifact (Glowing Ring)
const CoreArtifact = () => {
  const ringRef = useRef();

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    ringRef.current.rotation.y = elapsedTime * 0.3;
    ringRef.current.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group ref={ringRef}>
        <Torus args={[2, 0.02, 16, 100]}>
          <meshBasicMaterial
            color="#b400ff"
            transparent
            opacity={0.8}
            blending={THREE.AdditiveBlending}
          />
        </Torus>
        <Torus args={[1.5, 0.01, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial
            color="#00f5ff"
            transparent
            opacity={0.5}
            blending={THREE.AdditiveBlending}
          />
        </Torus>
      </group>
    </Float>
  );
};

// The Main Global Background
export default function Global3DBackground() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1,
      backgroundColor: "#020205",
      pointerEvents: "none"
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <fog attach="fog" args={["#020205", 5, 15]} />

        <Starfield />
        <CoreArtifact />

        {/* High-end Post Processing Pipeline */}
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0.1} mipmapBlur intensity={2.0} />
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
