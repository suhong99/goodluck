import { ShibaBGMaterials, ShibaBGNodes } from '@/shared/contants/model';
import { useCompoundBody } from '@react-three/cannon';
import { useRef } from 'react';
import { HOUSE_GROUND, HOUSE_SHAPE, HOUSE_STAIR } from './contants/collision';

export default function House({
  nodes,
  materials,
}: {
  nodes: ShibaBGNodes;
  materials: ShibaBGMaterials;
}) {
  useCompoundBody(
    () => ({
      mass: 0,
      rotation: [0, 0, 0],
      collisionFilterGroup: 3,
      type: 'Static',
      shapes: [...HOUSE_GROUND, ...HOUSE_SHAPE, ...HOUSE_STAIR],
    }),
    useRef(null)
  );

  return (
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
  );
}
