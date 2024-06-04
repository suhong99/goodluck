import { SHIBA_MATERIALS, SHIBA_NODES } from '@/shared/contants/model';
import { useCompoundBody, useTrimesh } from '@react-three/cannon';
import { useRef } from 'react';

export default function House({
  nodes,
  materials,
}: {
  nodes: SHIBA_NODES;
  materials: SHIBA_MATERIALS;
}) {
  const [houseBody, _] = useCompoundBody(
    () => ({
      mass: 0,
      rotation: [0, 0, 0],
      collisionFilterGroup: 3,
      shapes: [
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
          args: [5, 10, 10],
          position: [-9, 2, 0],
          type: 'Box',
        },
        {
          //왼쪽 계단1
          args: [4.9, 1, 2],
          position: [-11.3, 2.1, 9.7],
          rotation: [0, 0, -Math.PI / 5.5],
          type: 'Box',
        },
        {
          args: [2, 4, 2],
          position: [-14.1, 1.9, 9.7],
          type: 'Box',
        },
        {
          //왼쪽 계단3
          args: [6, 1, 2],
          position: [-14.1, 4.5, 7],
          rotation: [0, -Math.PI / 2, -Math.PI / 5.5],
          type: 'Box',
        },
      ],
    }),
    useRef(null)
  );

  return (
    <>
      <group>
        <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
          <mesh
            // 우측 계단
            geometry={nodes.characters_STONE_a_0.geometry}
            material={materials.STONE_a}
          />
          <mesh
            //몸통
            geometry={nodes.characters_STONE_a_0_1.geometry}
            material={materials.STONE_a}
          />
        </group>
        <mesh
          // 톱니
          geometry={nodes.characters002_watermill_0.geometry}
          material={materials.watermill}
          rotation={[0, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          geometry={nodes.characters003_terrain_left_0.geometry}
          material={materials.terrain_left}
          rotation={[0, 0, -Math.PI / 2]}
          scale={100}
        />

        <mesh
          //  지붕
          geometry={nodes.characters004_house_0.geometry}
          material={materials.house}
          rotation={[0, 0, -Math.PI / 2]}
          scale={100}
        />
      </group>
    </>
  );
}
