"use client";

import React, { useRef, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ModelProps {
  modelPath: string;
  texturePath?: string; // Optional texture path
}

function Model({ modelPath, texturePath }: ModelProps) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef<THREE.Group>(null!);
  
  // Load texture if provided
  const texture = texturePath ? useTexture(texturePath) : null;

  // Apply texture to model materials
  useEffect(() => {
    if (texture && scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // Create a new material with the texture
          const material = new THREE.MeshStandardMaterial({
            map: texture,
            emissive: new THREE.Color(0x222222), // Slight glow
            emissiveMap: texture,
            emissiveIntensity: 0.3,
          });
          
          // Configure texture properties
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.flipY = false;
          
          child.material = material;
        }
      });
    }
  }, [texture, scene]);

  // Optional: Add rotation for a dynamic effect
  useFrame((_state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.2; // Adjust speed as needed
    }
  });

  return <primitive object={scene} ref={modelRef} scale={1.5} />; // Adjust scale as needed
}

interface BlackHoleModelProps {
  texturePath?: string; // Optional texture path prop
}

export default function BlackHoleModel({ texturePath }: BlackHoleModelProps) {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }} camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.3} />
      {/* Neon white light */}
      <pointLight color="white" intensity={150} distance={100} decay={2} position={[0, 1, 3]} />
      <pointLight color="white" intensity={100} distance={100} decay={2} position={[2, -2, 2]} />
      <pointLight color="white" intensity={100} distance={100} decay={2} position={[-2, 2, -2]} />
      
      {/* Optional: additional subtle lighting for depth */}
      <directionalLight color="lightblue" intensity={1} position={[-5, 5, 5]} />

      <React.Suspense fallback={null}>
        <Model modelPath="/black_hole.glb" texturePath={texturePath} />
      </React.Suspense>
    </Canvas>
  );
}

// Ensure you have placed black_hole.glb in your /public directory.
// Place your texture files (e.g., .jpg, .png) also in the /public directory. 