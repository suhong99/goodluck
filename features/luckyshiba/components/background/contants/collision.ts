import { Triplet } from '@react-three/cannon';

type CompoundShape = {
  args: Triplet;
  position: Triplet;
  rotation?: Triplet;
  type: 'Box' | 'Cylinder';
}[];

export const HILL_SHAPE: CompoundShape = [
  {
    // 언덕 후방 몸통(나무)
    args: [7.5, 7, 7],
    position: [11.5, 0, -2.9],
    rotation: [0, 0, 0.1],
    type: 'Box',
  },
  {
    // 언덕 전방 몸통
    args: [7, 7.9, 3],
    position: [12.2, 0, 1.8],
    rotation: [0.12, 0, 0.11],
    type: 'Box',
  },
  {
    //언덕 가운데
    args: [4, 3, 5],
    position: [12, 4.7, -1],
    // rotation: [0, -Math.PI / 2, -Math.PI / 8],
    type: 'Box',
  },
  {
    // 언덕 후방
    args: [7, 3.5, 3],
    position: [12.2, 0, -7.8],
    rotation: [-0.15, 0, 0.11],
    type: 'Box',
  },
  {
    // 언덕 후방
    args: [4, 2.1, 3],
    position: [10.1, 0, -10.6],
    rotation: [-0.18, 0, 0.14],
    type: 'Box',
  },
];

export const SMALL_ROCKS: CompoundShape = [
  {
    // 전방 돌
    args: [2.7, 1.6, 2],
    position: [12.8, 3, 4],
    rotation: [0.15, 0.1, 0.1],
    type: 'Box',
  },
  {
    args: [1.8, 3, 2.2],
    position: [8, 0, 3.8],
    rotation: [0.2, -0.7, 0.2],
    type: 'Box',
  },
  {
    args: [1.8, 4.5, 2.7],
    position: [10.2, 0, 4.8],
    rotation: [0.2, 0, 0],
    type: 'Box',
  },
  {
    args: [1.8, 2.5, 2.2],
    position: [10.4, 0, 7.7],
    rotation: [0.2, -0.3, 0],
    type: 'Box',
  },
];
