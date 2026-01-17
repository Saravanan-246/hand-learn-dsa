import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";

/* ---------------- GODZILLA MODEL ---------------- */
function Godzilla() {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/godzilla.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (animations && animations.length > 0) {
      const firstAnim = animations[0].name;
      actions[firstAnim]?.reset().fadeIn(0.5).play();
    }
  }, [actions, animations]);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={0.25}                 /* 🧩 tiny toy */
      position={[0, -0.6, 0]}      /* ⬇️ centered & little down */
      rotation={[0, Math.PI / 12, 0]} /* slight natural angle */
    />
  );
}

/* ---------------- BACKGROUND CANVAS ---------------- */
export default function GodzillaBG() {
  return (
    <div className="bg-canvas">
      <Canvas
        camera={{ position: [0, 1.1, 7], fov: 45 }} /* better framing */
        dpr={[1, 1.5]}
      >
        {/* Soft background lighting */}
        <ambientLight intensity={0.45} />
        <directionalLight position={[4, 6, 4]} intensity={1.0} />
        <directionalLight position={[-4, 3, -4]} intensity={0.5} />

        <Suspense fallback={null}>
          <Godzilla />
        </Suspense>

        {/* Slow background rotation */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.2}
        />
      </Canvas>
    </div>
  );
}

/* Preload model */
useGLTF.preload("/models/godzilla.glb");
