'use client';

import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

export const Archimedes = React.forwardRef(function Archimedes(props, ref) {
  const { nodes, materials } = useGLTF('/archimedes.glb');
  return (
    <group {...props} ref={ref} dispose={null} position={[-20, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back.geometry}
        material={materials.BackBeige}
        position={[0, -8.491, -2.673]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['CD-ROM_Tray'].geometry}
        material={materials.CDBeige}
        position={[1.158, -7.05, 8.128]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Exhaust_Cover.geometry}
        material={materials.BackBeige}
        position={[8, -3.091, -2.271]}
        scale={[0.063, 0.125, 3]}
      />
      <group position={[0, -8.491, 5.346]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Front_1.geometry}
          material={materials.FrontBeige}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Front_2.geometry}
          material={materials.FrontGrey}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass.geometry}
        material={materials.glass}
        position={[0, -8.491, -2.805]}
      />
      <group position={[5.452, -7.05, 8.149]} rotation={[-0.01, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Front002.geometry}
          material={materials.ButtonBeige}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Front002_1.geometry}
          material={materials.LED}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Front002_2.geometry}
          material={materials.ClearBluePlastic}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials.Screen}
        position={[0, -8.491, -2.919]}
      />
    </group>
  );
});

useGLTF.preload('/archimedes.glb');
