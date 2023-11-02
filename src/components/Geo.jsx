'use client';

import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Archimedes } from './Archimedes';

import { createPortal } from 'react-dom';

export const Geo = () => {
  const archRef = useRef(null);
  const mouseMove = (e) => {
    e.stopPropagation();

    const x = e.clientX;
    const y = e.clientY;
    const w = window.innerWidth;
    const h = window.innerHeight;

    const xNorm = (x - w / 2) / w;
    const yNorm = (y - h / 2) / h;

    archRef.current.rotation.x = yNorm;
    archRef.current.rotation.y = xNorm;
  };

  const Portal = createPortal(
    <div className="absolute min-h-screen min-w-screen top-0 bottom-0 left-0 right-0 -z-10">
      <Canvas camera={{ fov: 60, position: [20, 0, 20], rotatey: 45 }}>
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={0.5}
          enablePan={false}
          enableRotate={false}
          enableZoom={false}
          reverseOrbit={true}
        />
        <ambientLight
          color={0xffffff}
          intensity={2}
        />
        <directionalLight
          color="white"
          position={[0, 0, 5]}
        />
        <Archimedes ref={archRef} />
      </Canvas>
    </div>,
    document.body
  );

  return <Portal />;
};
