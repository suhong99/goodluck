import { Triplet } from '@react-three/cannon';

type CompoundShape = {
  args: Triplet;
  position: Triplet;
  rotation?: Triplet;
  type: 'Box' | 'Cylinder';
}[];

export const HILL_SHAPE: CompoundShape = [
  {
    // 집바닥
    args: [10.5, 2.5, 26],
    position: [-10.25, 0, 5],
    type: 'Box',
  },
  {
    //왼쪽 계단1
    args: [4.9, 1, 1.8],
    position: [-2, 0, -5],
    rotation: [0, -Math.PI / 2, -Math.PI / 8],
    type: 'Box',
  },
];
