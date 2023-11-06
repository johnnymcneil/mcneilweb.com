'use client';

import { Canvas } from '@react-three/fiber';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { CanvasInternals } from './CanvasInternals';

export const ThreeScene = () => {
  const [Rendered, setRendered] = useState(null);

  useEffect(() => {
    const canvasProps = {
      camera: {
        fov: 60,
        position: [0, 0, 20]
      },
      dpr: 1,
      gl: {
        antialias: false,
        powerPreference: 'low-power'
      }
    };
    setRendered(
      createPortal(
        <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 bg-gradient-to-b from-stone-100 to-stone-300">
          <Canvas {...canvasProps}>
            <CanvasInternals />
          </Canvas>
        </div>,
        document.body
      )
    );
  }, []);
  return <>{Rendered}</>;
};
