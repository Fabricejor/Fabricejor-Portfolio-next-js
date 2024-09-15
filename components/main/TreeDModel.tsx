'use client';
import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh, MeshLambertMaterial, MeshMatcapMaterial } from "three";
import { TextureLoader } from "three";

export default function ThreeDmodel() {
  return (
    <div className="h-full w-full">
      <Gojo/>
    </div>
  )
}

function MeshComponent() {
  const fileUrl = "/laptop/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);
  const textures = useLoader(TextureLoader ,"/laptop/textures/HP_Pavilion_x360_14_dh_metallicRoughness.png");
  useFrame(() => {
    mesh.current.rotation.y += 0.005;
    mesh.current.scale.set(10, 10, 10);
    mesh.current.position
 });

  return (
    <mesh ref={mesh}>
      <primitive  object={gltf.scene} />
      <meshPhongMaterial map={textures} />

    </mesh>
  );
}

export function Gojo() {
  return (
      <Canvas 
      camera={{
        position: [5, 2, 1], // Position initiale de la caméra (x, y, z)
      }}
      className="mt-16"
      style={{ width:"100%", height:"100%"}} >
      <ambientLight color={"white"} />
      <pointLight position={[1, 1, 1]} />
      <OrbitControls/>
        <MeshComponent />
      </Canvas>
  );
}