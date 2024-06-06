'use client';

import { Shiba } from '@/features/luckyshiba/components/Shiba';
import { Background } from '@/features/luckyshiba/components/background';
import Hill from '@/features/luckyshiba/components/background/Hill';
import Walls from '@/features/luckyshiba/components/background/Walls';
import CanvasLayout from '@/shared/components/3dmodel/Canvas';
import DrawCall from '@/shared/components/3dmodel/DrawCall';

import { color } from '@/shared/contants/color';
import { Debug, Physics } from '@react-three/cannon';
import { OrbitControls, StatsGl } from '@react-three/drei';
import { useControls } from 'leva';

export default function LuckyShiba() {
  const gravity = useControls('Gravity', {
    x: { value: 0, min: -10, max: 10, step: 0.1 },
    y: { value: -9.8, min: -10, max: 10, step: 0.1 },
    z: { value: 0, min: -10, max: 10, step: 0.1 },
  });

  return (
    <CanvasLayout color={color.bg} camera={{ position: [0, 2, 4] }}>
      <OrbitControls
        makeDefault
        enablePan={false}
        minDistance={2}
        maxDistance={30}
      />
      <Physics gravity={[gravity.x, gravity.y, gravity.z]}>
        <Debug>
          <ambientLight />
          <directionalLight position={[0, 5, 5]} />
          <Shiba />
          <Walls />
          <Background position={[0, 0, 0]} />
          <DrawCall />
          <StatsGl />
        </Debug>
      </Physics>
    </CanvasLayout>
  );
}
