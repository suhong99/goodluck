import { SHIBA_BG_MATERIALS, SHIBA_BG_NODES } from '@/shared/contants/model';
import { Triplet, useCompoundBody } from '@react-three/cannon';
import { useRef } from 'react';
import { HILL_SHAPE } from './contants/collision';

export default function Hill({
  nodes,
  materials,
}: {
  nodes: SHIBA_BG_NODES;
  materials: SHIBA_BG_MATERIALS;
}) {
  const [hillBody, _] = useCompoundBody(
    () => ({
      mass: 0,
      rotation: [0, 0, 0],
      collisionFilterGroup: 3,
      type: 'Static',
      shapes: HILL_SHAPE,
    }),
    useRef(null)
  );

  return (
    <>
      <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
        <mesh
          geometry={nodes.characters007_bush_0.geometry}
          material={materials.bush}
        />
        <mesh
          geometry={nodes.characters007_bush_0_1.geometry}
          material={materials.bush}
        />
      </group>
      <mesh
        geometry={nodes.characters001_charcters_0.geometry}
        material={materials.charcters}
        rotation={[0, 0, -Math.PI / 2]}
        scale={100}
      />
      <mesh
        // 우측 오르막길
        geometry={nodes.characters009_terrain_right_0.geometry}
        material={materials.terrain_right}
        rotation={[0, 0, -Math.PI / 2]}
        scale={100}
      />

      <mesh
        // 우측 풀
        geometry={nodes.characters010_wheat_0.geometry}
        material={materials.wheat}
        rotation={[0, 0, -Math.PI / 2]}
        scale={100}
      />
    </>
  );
}
