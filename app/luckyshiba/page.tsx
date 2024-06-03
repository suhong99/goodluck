'use client';

import { Ground } from '@/features/luckyshiba/Ground';
import { Shiba } from '@/features/luckyshiba/components/Shiba';
import { Background } from '@/features/luckyshiba/components/background';
import CanvasLayout from '@/shared/components/3dmodel/Canvas';
import DrawCall from '@/shared/components/3dmodel/DrawCall';

import { color } from '@/shared/contants/color';
import { Debug, Physics } from '@react-three/cannon';
import { OrbitControls, StatsGl } from '@react-three/drei';
import { useControls } from 'leva';

export default function LuckyShiba() {
  const gravity = useControls('Gravity', {
    x: { value: 0, min: -10, max: 10, step: 0.1 },
    y: { value: 0, min: -10, max: 10, step: 0.1 },
    z: { value: 0, min: -10, max: 10, step: 0.1 },
  });

  return (
    <CanvasLayout color={color.bg} camera={{ position: [0, 2, 4] }}>
      <OrbitControls
        makeDefault
        enablePan={false}
        minDistance={2}
        maxDistance={20}
      />
      <Physics gravity={[gravity.x, gravity.y, gravity.z]}>
        <Debug>
          <ambientLight />
          <directionalLight position={[0, 5, 5]} />
          <Ground rotation={[-Math.PI / 2, 0, 0]} />
          <Shiba />
          <Background position={[0, 0, 0]} />
          <DrawCall />
        </Debug>
        <StatsGl />
      </Physics>
    </CanvasLayout>
  );
}
