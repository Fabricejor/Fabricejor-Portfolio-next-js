"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";

export default function ThreeDmodel() {
  return (
    <div className="h-full w-full z-40 p-10">
      <Gojo/>
    </div>
  )
}

function MeshComponent() {
  const fileUrl = "/gojo3dmodel/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);
  useFrame(() => {
    mesh.current.rotation.y += 0.008;
    mesh.current.scale.set(5, 5, 5);
 });

  return (
    <mesh ref={mesh}>
      <primitive  object={gltf.scene} />
    </mesh>
  );
}

export function Gojo() {
  return (
      <Canvas className='flex justify-center  bg-black ' style={{width:"100%", height:"100%"}} >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls/>
        <MeshComponent />
      </Canvas>
  );
}