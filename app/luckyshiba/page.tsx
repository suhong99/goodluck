'use client';

import { Shiba } from '@/features/luckyshiba/components/Shiba';
import { Background } from '@/features/luckyshiba/components/background';
import Hill from '@/features/luckyshiba/components/background/Hill';
import Walls from '@/features/luckyshiba/components/background/Walls';
import CanvasLayout from '@/shared/components/3dmodel/Canvas';
import DrawCall from '@/shared/components/3dmodel/DrawCall';

import { color } from '@/shared/contants/color';
import { Debug, Physics, Triplet } from '@react-three/cannon';
import { OrbitControls, StatsGl } from '@react-three/drei';
import { useControls } from 'leva';

export default function LuckyShiba() {
  const gravity = useControls('Gravity', {
    x: { value: 0, min: -10, max: 10, step: 0.1 },
    y: { value: -9.8, min: -10, max: 10, step: 0.1 },
    z: { value: 0, min: -10, max: 10, step: 0.1 },
  });
  // const width = 4;
  // const length = 17;
  // const vertices: Triplet[] = [
  //   [9.5, 4.5, width],
  //   [9.5, 4.5, 0],
  //   [7, 4.5, width],
  //   [7, 4.5, 0],
  //   [0, 2.5, width],
  //   [0, 2.5, 0],
  //   [length, 2.5, width],
  //   [length, 2.5, 0],
  //   [0, 0, width],
  //   [0, 0, 0],
  //   [length, 0, width], //10
  //   [length, 0, 0], //11
  //   [10, 2.5, width],
  //   [10, 2.5, 0],
  //   [7, 2.5, width],
  //   [7, 2.5, 0],
  // ];

  // const faces = [
  //   [0, 1, 2, 3],
  //   [2, 3, 4, 5],
  //   [0, 1, 6, 7],
  //   [4, 5, 8, 9],
  //   [6, 7, 10, 11],
  //   [10, 11, 12, 13],
  //   [8, 9, 14, 15],
  //   [12, 13, 14, 15],
  //   [5, 9, 3, 15],
  //   [2, 4, 8, 14],
  //   [0, 2, 12, 14],
  //   [1, 3, 13, 15],
  //   [0, 12, 6, 10],
  //   [1, 7, 13, 11],
  // ];

  // function calculateNormal(v0, v1, v2) {
  //   const vector1 = [v1[0] - v0[0], v1[1] - v0[1], v1[2] - v0[2]];

  //   const vector2 = [v2[0] - v0[0], v2[1] - v0[1], v2[2] - v0[2]];

  //   const normal = [
  //     vector1[1] * vector2[2] - vector1[2] * vector2[1],
  //     vector1[2] * vector2[0] - vector1[0] * vector2[2],
  //     vector1[0] * vector2[1] - vector1[1] * vector2[0],
  //   ];

  //   const length = Math.sqrt(
  //     normal[0] * normal[0] + normal[1] * normal[1] + normal[2] * normal[2]
  //   );

  //   return [normal[0] / length, normal[1] / length, normal[2] / length];
  // }

  // const normals = faces.map((face) => {
  //   const [v0, v1, v2] = face.map((index) => vertices[index]);
  //   return calculateNormal(v0, v1, v2);
  // });

  // console.log(normals, 'normals');

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
          <Background />
          <DrawCall />
          <StatsGl />
        </Debug>
      </Physics>
    </CanvasLayout>
  );
}
