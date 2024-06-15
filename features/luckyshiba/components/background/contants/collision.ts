import { Triplet } from '@react-three/cannon';

interface BoxShape {
  args: Triplet;
  position: Triplet;
  rotation?: Triplet;
  type: 'Box';
}

interface CylinderShape {
  args: [number, number, number, number];
  position: Triplet;
  rotation?: Triplet;
  type: 'Cylinder';
}

type CompoundShape = (BoxShape | CylinderShape)[];

export const HOUSE_GROUND: CompoundShape = [
  {
    // 집바닥
    args: [10.5, 2.5, 26],
    position: [-10.25, 0, -1.5],
    type: 'Box',
  },
  {
    // 좌측후면 입구
    args: [1.9, 2.5, 5],
    position: [-4, 0, -9.5],
    type: 'Box',
  },
  {
    // 좌측후면 입구
    args: [1.9, 2.5, 3],
    position: [-4, 0, 9.5],
    type: 'Box',
  },
  {
    //수레바퀴
    args: [3.1, 3.1, 2, 16],
    position: [-4.2, 2, 4.3],
    rotation: [0, 0, Math.PI / 2],
    type: 'Cylinder',
  },
  {
    //집기둥
    args: [5, 9.6, 9.5],
    position: [-9, 2, 0.5],
    type: 'Box',
  },
  {
    //왼쪽 계단1
    args: [4.9, 1, 1.8],
    position: [-11.3, 2.1, 9.8],
    rotation: [0, 0, -Math.PI / 5.5],
    type: 'Box',
  },
  {
    args: [2, 3.9, 2],
    position: [-14.1, 1.9, 9.7],
    type: 'Box',
  },
  {
    //왼쪽 계단3
    args: [6.1, 1, 2],
    position: [-14.1, 4.6, 7],
    rotation: [0, -Math.PI / 2, -Math.PI / 5],
    type: 'Box',
  },
  {
    //2층
    args: [3.5, 1.8, 9],
    position: [-13.2, 5.9, 0.3],
    type: 'Box',
  },
];

export const HOUSE_SHAPE: CompoundShape = [
  {
    //굴뚝
    args: [1.2, 10, 1.2],
    position: [-12.3, 11.9, 0.8],
    type: 'Box',
  },
  {
    //집
    args: [4.2, 5.5, 4],
    position: [-10.3, 9.5, 3],
    type: 'Box',
  },
  {
    args: [5, 5.5, 1],
    position: [-10.3, 12.8, 0.8],
    rotation: [Math.PI / 5, 0, 0],
    type: 'Box',
  },
  {
    args: [5, 5.5, 1],
    position: [-10.3, 12.8, 3.5],
    rotation: [-Math.PI / 5, 0, 0],
    type: 'Box',
  },
  {
    args: [8, 1.5, 5.5],
    position: [-11.3, 10.5, 2.5],
    type: 'Box',
  },
  {
    args: [4, 1.5, 4],
    position: [-13.5, 12.2, 2.5],
    rotation: [0, 0, Math.PI / 3.3],
    type: 'Box',
  },
];

export const HOUSE_STAIR: CompoundShape = [
  {
    args: [4, 1.5, 2],
    position: [-8, 1.9, -9],
    rotation: [0, 0, -Math.PI / 5.1],
    type: 'Box',
  },
  {
    args: [4, 1.5, 2],
    position: [-10, 3, -8.3],
    rotation: [0, Math.PI / 4, -Math.PI / 5.1],
    type: 'Box',
  },
  {
    args: [4, 1.5, 2.4],
    position: [-10.7, 5, -6],
    rotation: [0, Math.PI / 2, -Math.PI / 5.1],
    type: 'Box',
  },
  {
    args: [4, 6, 0.5],
    position: [-12, 3.5, -5.7],
    rotation: [Math.PI / 4, Math.PI / 2, -0.5],
    type: 'Box',
  },
  {
    args: [3, 2, 4],
    position: [-12, 1, -7.7],
    rotation: [-0.2, 0, 0.2],
    type: 'Box',
  },
];

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
    args: [6, 3.8, 5],
    position: [11.8, 4.5, -2],
    rotation: [0, 0, -Math.PI / 27],
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
  {
    //언덕 가운데 주변 바위
    args: [2, 3.5, 2],
    position: [13.5, 4.5, 2],
    rotation: [0, 0, Math.PI / 20],
    type: 'Box',
  },
  {
    args: [2, 3, 2],
    position: [11.5, 5, 1.2],
    rotation: [0, 0, -Math.PI / 3],
    type: 'Box',
  },
  {
    // 후방 돌
    args: [2.2, 3, 1],
    position: [13.9, 4.8, -5.05],
    rotation: [0, 0, -Math.PI / 19],
    type: 'Box',
  },
  {
    // 후방 돌
    args: [2.2, 3, 2],
    position: [14.2, 2.5, -7.05],
    rotation: [0, -Math.PI / 4, -Math.PI / 2.7],
    type: 'Box',
  },
];

export const BRIDGE_UPPER: CompoundShape = [
  {
    args: [2, 1.9, 3.2],
    position: [0, 2.6, 0],
    type: 'Box',
  },
  {
    args: [8.4, 1.9, 3.2],
    position: [4.8, 1.68, 0],
    rotation: [0, 0, -Math.PI / 14],
    type: 'Box',
  },
  {
    args: [8.4, 1.9, 3.2],
    position: [-4.8, 1.68, 0],
    rotation: [0, 0, Math.PI / 14],
    type: 'Box',
  },
];

export const BRIDGE_UNDER: CompoundShape = [
  {
    args: [5, 0.5, 3.2],
    position: [-5.5, -1, 0],
    rotation: [0, 0, Math.PI / 2.9],
    type: 'Box',
  },
  {
    args: [6.3, 3.5, 4.7],
    position: [6.8, -2, 0.1],
    rotation: [0, 0, -Math.PI / 2.3],
    type: 'Box',
  },
];
