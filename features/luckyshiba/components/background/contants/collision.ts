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
];
