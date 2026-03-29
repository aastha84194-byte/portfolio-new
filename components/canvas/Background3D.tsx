"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Massive Cyber Core Element
function CyberCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Group>(null);
  const ringRef2 = useRef<THREE.Group>(null);
  const ringRef3 = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.15;
      coreRef.current.rotation.y += delta * 0.2;
      
      // Intense Mouse interaction
      const targetX = (state.pointer.x * Math.PI) / 2;
      const targetY = (state.pointer.y * Math.PI) / 2;
      coreRef.current.rotation.x += (targetY - coreRef.current.rotation.x) * 0.08;
      coreRef.current.rotation.y += (targetX - coreRef.current.rotation.y) * 0.08;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.z -= delta * 0.5;
      ringRef1.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.z += delta * 0.3;
      ringRef2.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.4) * 0.4;
    }
    if (ringRef3.current) {
      ringRef3.current.rotation.x -= delta * 0.7;
    }
  });

  return (
    <group position={[3.5, 0, -3]}>
      {/* Central Icosahedron */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshStandardMaterial 
          color="#00ffcc" 
          wireframe={true} 
          emissive="#00ffcc"
          emissiveIntensity={0.6}
        />
      </mesh>
      
      {/* Complex Outer Rings */}
      <group ref={ringRef1} rotation={[Math.PI / 2, 0, 0]}>
        <mesh>
          <torusGeometry args={[3.2, 0.02, 16, 100]} />
          <meshStandardMaterial color="#7000ff" emissive="#7000ff" emissiveIntensity={0.8} />
        </mesh>
      </group>
      <group ref={ringRef2} rotation={[0, Math.PI / 2, 0]}>
        <mesh>
          <torusGeometry args={[3.8, 0.02, 16, 100]} />
          <meshStandardMaterial color="#00ffcc" emissive="#00ffcc" emissiveIntensity={0.5} />
        </mesh>
      </group>
      <group ref={ringRef3} rotation={[Math.PI / 4, 0, Math.PI / 4]}>
        <mesh>
          <torusGeometry args={[4.4, 0.01, 16, 100]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} transparent opacity={0.5} />
        </mesh>
      </group>
      
      {/* Volumetric Light source inside the core */}
      <pointLight position={[0, 0, 0]} color="#00ffcc" intensity={3} distance={15} />
    </group>
  );
}

// Intense Particle Field
function ParticleSwarm() {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const count = 5000; // Increased density for full-screen coverage
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Much wider spread to ensure the right side is never empty
      pos[i * 3] = (Math.random() - 0.5) * 45;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 35;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
      
      const rand = Math.random();
      col[i * 3] = rand > 0.6 ? 0.0 : 0.44; 
      col[i * 3 + 1] = rand > 0.6 ? 1.0 : 0.0; 
      col[i * 3 + 2] = rand > 0.6 ? 0.8 : 1.0; 
    }
    return [pos, col];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.03;
      ref.current.rotation.x += delta * 0.01;
      
      // Slight mouse panning for particles
      ref.current.position.x = -state.pointer.x * 0.5;
      ref.current.position.y = -state.pointer.y * 0.5;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3}>
      <PointMaterial transparent vertexColors size={0.08} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} />
    </Points>
  );
}

// Left Side Geometry
function SecondaryGeometry() {
  const octaRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (octaRef.current) {
      octaRef.current.rotation.x -= delta * 0.2;
      octaRef.current.rotation.y -= delta * 0.3;
    }
    if (boxRef.current) {
      boxRef.current.rotation.y += delta * 0.15;
      boxRef.current.rotation.z += delta * 0.1;
      // Gentle floating
      boxRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.4 + 2;
    }
  });

  return (
    <group>
      <mesh ref={octaRef} position={[-6, -1.5, -6]}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial 
          color="#7000ff" 
          wireframe={true} 
          emissive="#7000ff"
          emissiveIntensity={0.4}
        />
      </mesh>
      
      <group position={[-5, 2, -8]} ref={boxRef}>
        <mesh>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshStandardMaterial color="#00ffcc" wireframe={true} emissive="#00ffcc" emissiveIntensity={0.2} transparent opacity={0.6} />
        </mesh>
      </group>
    </group>
  );
}

export default function Background3D() {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, background: "var(--bg-color)" }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} eventSource={typeof document !== 'undefined' ? document.body : undefined}>
        <ambientLight intensity={0.1} />
        <ParticleSwarm />
        <CyberCore />
        <SecondaryGeometry />
      </Canvas>
    </div>
  );
}
