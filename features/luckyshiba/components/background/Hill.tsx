import { ShibaBGMaterials, ShibaBGNodes } from '@/shared/contants/model';
import { useCompoundBody } from '@react-three/cannon';
import { useRef } from 'react';
import { HILL_SHAPE, SMALL_ROCKS } from './contants/collision';

export default function Hill({
  nodes,
  materials,
}: {
  nodes: ShibaBGNodes;
  materials: ShibaBGMaterials;
}) {
  useCompoundBody(
    () => ({
      mass: 0,
      collisionFilterGroup: 3,
      type: 'Static',
      shapes: [...HILL_SHAPE, ...SMALL_ROCKS],
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
