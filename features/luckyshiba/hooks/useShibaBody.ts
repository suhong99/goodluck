import { useCompoundBody } from '@react-three/cannon';
import { useRef } from 'react';
import { Group } from 'three';

type props = {
  collideFn: () => void;
};

export const useShibaBody = ({ collideFn }: props) => {
  const width = 0.65;
  const height = 1.2;
  const front = 0.6;

  const chassisBodyArgs = [width, height, front * 2];

  const [shibaBody, shibaBodyApi] = useCompoundBody(
    () => ({
      position: [0, 1, 0],
      mass: 100,
      rotation: [0, 0, 0],
      collisionFilterGroup: 5,
      angularDamping: 0.95,
      onCollide: collideFn,
      shapes: [
        {
          args: chassisBodyArgs,
          position: [0, 0, 0],
          type: 'Box',
        },
      ],
    }),
    useRef<Group>(null)
  );

  return [shibaBody, shibaBodyApi] as const;
};
