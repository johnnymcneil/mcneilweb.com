'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Archimedes } from './Archimedes';

export const CanvasInternals = () => {
  const archRef = useRef(null);
  useFrame(({ clock }) => {
    let current = archRef.current;
    current.rotation.z = Math.sin(clock.getElapsedTime() / 10);
    current.position.x = Math.cos(clock.getElapsedTime() / 10) * -10;
    current.position.y = Math.sin(clock.getElapsedTime() / 10) * 3;
    current.position.z = Math.sin(clock.getElapsedTime() / 10) * -20 - 20;
  });
  return (
    <>
      <ambientLight color={0xffffff} intensity={2} />
      <directionalLight color="white" position={[0, 0, 5]} />
      <Archimedes ref={archRef} />
    </>
  );
};
