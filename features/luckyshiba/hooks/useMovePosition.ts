import { Group, Object3DEventMap, Quaternion, Vector3 } from 'three';
import { useInput } from './useInput';
import { PublicApi } from '@react-three/cannon';
import { useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
type MovePositionProps = {
  worldPosition: Vector3;
  worldDirection: Vector3;
  chassisApi: PublicApi;
  chassisBody: React.RefObject<Group<Object3DEventMap>>;
};

export const useMovePosition = ({
  worldDirection,
  worldPosition,
  chassisApi,
  chassisBody,
}: MovePositionProps) => {
  const { forward, backward, left, right, jump, stand } = useInput();
  const worldQuaternion = useMemo(() => new Quaternion(), []);

  const controlMovement = (delta: number) => {
    if (forward || backward) {
      const speed = delta * 7;
      let { x, y, z } = worldPosition;
      let { x: rx, y: ry, z: rz } = worldDirection;
      let [newX, newY, newZ] = [x, y, z];

      if (forward) {
        newX += rx * speed;
        newZ += rz * speed;
      }
      if (backward) {
        newX -= rx * speed;
        newZ -= rz * speed;
      }
      chassisApi.position.set(newX, newY, newZ);
    }

    if (right || left) {
      const turnAngle = delta;
      const turnQuaternion = new Quaternion();
      chassisBody?.current!.getWorldPosition(worldPosition);

      if (right) {
        turnQuaternion.setFromAxisAngle(new Vector3(0, 1, 0), -turnAngle);
      }
      if (left) {
        turnQuaternion.setFromAxisAngle(new Vector3(0, 1, 0), turnAngle);
      }
      worldQuaternion.multiplyQuaternions(turnQuaternion, worldQuaternion);
      chassisApi.quaternion.set(
        worldQuaternion.x,
        worldQuaternion.y,
        worldQuaternion.z,
        worldQuaternion.w
      );
    }

    if (jump) {
      chassisApi.velocity.set(0, 5, 0);
    }
  };

  return controlMovement;
};
