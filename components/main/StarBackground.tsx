"use client";

import React, { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

// Définition du composant de fond d'étoiles
const StarBackgroundComponent = (props: any) => {
  // Utilisation de useMemo pour calculer la géométrie une seule fois
  const sphere = useMemo(
    () => random.inSphere(new Float32Array(1000), { radius: 1.2 }),
    []
  );

  const ref: any = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff" // correction de la couleur
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false} // correction : "depthWrite" plutôt que "dethWrite"
        />
      </Points>
    </group>
  );
};

// Enveloppe avec React.memo pour éviter des re-rendus inutiles
const StarBackground = React.memo(StarBackgroundComponent);

const StarsCanvasComponent = () => (
  <div
    className="w-full h-full fixed inset-0 z-[20]"
    style={{ pointerEvents: "none" }} // Désactivation des interactions sur le fond
  >
    <Canvas
      camera={{ position: [0, 0, 1] }}
      dpr={[1, 1.5]} // Limite du device pixel ratio pour améliorer les perfs
      gl={{ antialias: false, powerPreference: "low-power" }} // Optimisation GPU via low-power
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

const StarsCanvas = React.memo(StarsCanvasComponent);

export default StarsCanvas;