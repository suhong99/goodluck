import { useEffect, useRef } from 'react';
import { useInput } from './useInput';
import { PublicApi, useRaycastVehicle } from '@react-three/cannon';
import { Group, Object3DEventMap, Quaternion, Vector3 } from 'three';
import { useWheels } from './useWheels';

type MoveCarProps = {
  chassisApi: PublicApi;
  chassisBody: React.RefObject<Group<Object3DEventMap>>;
  worldDirection: Vector3;
  bodyInfo: {
    width: number;
    height: number;
    front: number;
  };
};

export const useMoveCar = ({
  chassisApi,
  worldDirection,
  chassisBody,
  bodyInfo,
}: MoveCarProps) => {
  const { forward, backward, left, right, jump, stand } = useInput();
  const engineForce = 400;
  const velocity = useRef([0, 0, 0]);
  const { width, height, front } = bodyInfo;
  const [wheels, wheelInfos] = useWheels({ width, height, front });

  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos,
      wheels,
    }),
    useRef<Group>(null)
  );

  useEffect(() => {
    chassisApi.velocity.subscribe((v) => (velocity.current = v));

    if (forward) {
      vehicleApi.applyEngineForce(engineForce, 2);
      vehicleApi.applyEngineForce(engineForce, 3);
    } else if (backward) {
      vehicleApi.applyEngineForce(-engineForce, 2);
      vehicleApi.applyEngineForce(-engineForce, 3);
    } else {
      vehicleApi.applyEngineForce(0, 2);
      vehicleApi.applyEngineForce(0, 3);
    }

    if (left) {
      vehicleApi.setSteeringValue(0.35, 2);
      vehicleApi.setSteeringValue(0.35, 3);
      vehicleApi.setSteeringValue(-0.1, 0);
      vehicleApi.setSteeringValue(-0.1, 1);
    } else if (right) {
      vehicleApi.setSteeringValue(-0.35, 2);
      vehicleApi.setSteeringValue(-0.35, 3);
      vehicleApi.setSteeringValue(0.1, 0);
      vehicleApi.setSteeringValue(0.1, 1);
    } else {
      for (let i = 0; i < 4; i++) {
        vehicleApi.setSteeringValue(0, i);
      }
    }
    if (jump) {
      const [x, y, z] = velocity.current;
      chassisApi.velocity.set(x * 1.2, y + 7, z * 1.2);
    }

    if (stand) {
      const rotateQuaternion = new Quaternion().setFromAxisAngle(
        new Vector3(0, 1, 0),
        Math.PI / 2
      );
      const currentQuaternion = new Quaternion().setFromUnitVectors(
        new Vector3(1, 0, 0),
        worldDirection
      );
      currentQuaternion.multiply(rotateQuaternion); // y축 회전 적용
      chassisApi.quaternion.set(
        currentQuaternion.x,
        currentQuaternion.y,
        currentQuaternion.z,
        currentQuaternion.w
      ); // 쿼터니언을 직접 설정
    }
  }, [
    backward,
    stand,
    worldDirection,
    chassisApi,
    forward,
    jump,
    left,
    right,
    vehicleApi,
  ]);

  return { vehicle, vehicleApi };
};
