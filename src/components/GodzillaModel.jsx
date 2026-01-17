import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";

/* ---------------- GODZILLA MODEL ---------------- */
function Godzilla() {
  const group = useRef();

  // 🔥 FIX: use BASE_URL
  const modelPath = `${import.meta.env.BASE_URL}models/godzilla.glb`;

  const { scene, animations } = useGLTF(modelPath);
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
      scale={0.25}
      position={[0, -0.6, 0]}
      rotation={[0, Math.PI / 12, 0]}
    />
  );
}

/* ---------------- BACKGROUND CANVAS ---------------- */
export default function GodzillaBG() {
  return (
    <div className="bg-canvas">
      <Canvas
        camera={{ position: [0, 1.1, 7], fov: 45 }}
        dpr={[1, 1.5]}
      >
        {/* Lighting */}
        <ambientLight intensity={0.45} />
        <directionalLight position={[4, 6, 4]} intensity={1.0} />
        <directionalLight position={[-4, 3, -4]} intensity={0.5} />

        <Suspense fallback={null}>
          <Godzilla />
        </Suspense>

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

/* 🔥 Preload model (same path!) */
useGLTF.preload(`${import.meta.env.BASE_URL}models/godzilla.glb`);
