import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Translucent Prismatic Glass Lens / Disc Sculpture (Orionix Optical Glass Style)
function PrismaticLens({ position, rotation, scale = 1, phase = 0, tint = '#ffffff' }) {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() + phase;
    if (groupRef.current) {
      groupRef.current.rotation.x = rotation[0] + Math.sin(t * 0.4) * 0.08;
      groupRef.current.rotation.y = rotation[1] + Math.cos(t * 0.35) * 0.1;
      groupRef.current.position.y = position[1] + Math.sin(t * 0.6) * 0.12;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Outer Polished Optical Bevel Glass Disc */}
      <mesh>
        <cylinderGeometry args={[1.25, 1.25, 0.28, 48]} />
        <meshPhysicalMaterial
          color={tint}
          roughness={0.04}
          metalness={0.05}
          transmission={0.92}
          thickness={1.2}
          ior={1.5}
          chromaticAberration={0.06}
          specularIntensity={1.0}
          specularColor="#93c5fd"
          transparent={true}
          opacity={0.85}
        />
      </mesh>

      {/* Subtle Inner Platinum Accent Ring */}
      <mesh>
        <torusGeometry args={[1.12, 0.02, 16, 64]} />
        <meshStandardMaterial
          color="#0252ff"
          emissive="#0252ff"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.1}
          transparent={true}
          opacity={0.6}
        />
      </mesh>

      {/* Inner Transparent Glass Core */}
      <mesh>
        <cylinderGeometry args={[0.85, 0.85, 0.29, 32]} />
        <meshPhysicalMaterial
          color="#f8fafc"
          transmission={0.96}
          roughness={0.02}
          ior={1.45}
          transparent={true}
          opacity={0.5}
        />
      </mesh>
    </group>
  );
}

// Lower Parabolic Arc of 7 Glass Lenses sitting gracefully below the headline
function GlassLensesArc() {
  const arcRef = useRef();

  // Positioned in the lower third (y between -1.8 and -1.0) so text is 100% clear
  const lenses = [
    { pos: [-5.2, -1.8, -1.0], rot: [0.25, 0.5, -0.15], scale: 0.95, phase: 0.0, tint: '#f0f6ff' },
    { pos: [-3.5, -1.4, -0.4], rot: [0.18, 0.35, -0.08], scale: 0.9, phase: 1.2, tint: '#e0edff' },
    { pos: [-1.8, -1.1, 0.1], rot: [0.1, 0.2, 0.0], scale: 0.85, phase: 2.4, tint: '#ffffff' },
    { pos: [0.0, -0.95, 0.3], rot: [0.0, 0.0, 0.0], scale: 0.8, phase: 3.6, tint: '#f0f6ff' },
    { pos: [1.8, -1.1, 0.1], rot: [-0.1, -0.2, 0.0], scale: 0.85, phase: 4.8, tint: '#ffffff' },
    { pos: [3.5, -1.4, -0.4], rot: [-0.18, -0.35, 0.08], scale: 0.9, phase: 6.0, tint: '#e0edff' },
    { pos: [5.2, -1.8, -1.0], rot: [-0.25, -0.5, 0.15], scale: 0.95, phase: 7.2, tint: '#f0f6ff' },
  ];

  useFrame((state) => {
    if (arcRef.current) {
      const targetY = state.pointer.x * 0.1;
      const targetX = -state.pointer.y * 0.06;
      arcRef.current.rotation.y = THREE.MathUtils.lerp(arcRef.current.rotation.y, targetY, 0.04);
      arcRef.current.rotation.x = THREE.MathUtils.lerp(arcRef.current.rotation.x, targetX, 0.04);
    }
  });

  return (
    <group ref={arcRef} position={[0, -0.6, 0]}>
      {lenses.map((lens, i) => (
        <PrismaticLens
          key={i}
          position={lens.pos}
          rotation={lens.rot}
          scale={lens.scale}
          phase={lens.phase}
          tint={lens.tint}
        />
      ))}
    </group>
  );
}

// Clean Dynamic Specular Lighting
function SceneLighting() {
  const lightRef = useRef();

  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.x = state.pointer.x * 6;
      lightRef.current.position.y = state.pointer.y * 3 + 1;
    }
  });

  return (
    <>
      <ambientLight intensity={1.6} />
      <directionalLight position={[0, 10, 8]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-6, -4, -3]} intensity={0.8} color="#93c5fd" />
      <directionalLight position={[6, -4, -3]} intensity={0.8} color="#bfdbfe" />
      <pointLight ref={lightRef} position={[0, 1, 5]} intensity={2.2} color="#ffffff" distance={14} />
    </>
  );
}

export default function HeroCanvas3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0">
      <Canvas
        style={{ background: 'transparent' }}
        camera={{ position: [0, 0, 7.8], fov: 46 }}
        gl={{ antialias: true, alpha: true, toneMappingExposure: 1.0 }}
        dpr={[1, 2]}
      >
        <SceneLighting />
        <Sparkles count={25} scale={12} size={1.8} speed={0.25} color="#93c5fd" opacity={0.4} />
        <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.4}>
          <GlassLensesArc />
        </Float>
      </Canvas>
    </div>
  );
}
