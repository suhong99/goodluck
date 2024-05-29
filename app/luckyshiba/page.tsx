'use client';

import { Ground } from '@/features/luckyshiba/Ground';
import { Shiba } from '@/features/luckyshiba/Shiba';
import CanvasLayout from '@/shared/components/3dmodel/Canvas';

import { color } from '@/shared/contants/color';
import { Debug, Physics } from '@react-three/cannon';
import { useControls } from 'leva';

export default function LuckyShiba() {
  const gravity = useControls('Gravity', {
    x: { value: 0, min: -10, max: 10, step: 0.1 },
    y: { value: -9.81, min: -10, max: 10, step: 0.1 },
    z: { value: 0, min: -10, max: 10, step: 0.1 },
  });

  return (
    <CanvasLayout color={color.bg} camera={{ position: [0, 2, 4] }}>
      <Physics gravity={[gravity.x, gravity.y, gravity.z]}>
        <Debug>
          <ambientLight />
          <directionalLight position={[0, 5, 5]} />
          <Ground rotation={[-Math.PI / 2, 0, 0]} />
          <Shiba />
        </Debug>
      </Physics>
    </CanvasLayout>
  );
}
