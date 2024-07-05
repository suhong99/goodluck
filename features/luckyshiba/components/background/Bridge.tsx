import { ShibaBGMaterials, ShibaBGNodes } from '@/shared/constants/model';
import { useCompoundBody } from '@react-three/cannon';
import { BRIDGE_UNDER, BRIDGE_UPPER } from './contants/collision';
import { useRef } from 'react';

export default function Bridge({
  nodes,
  materials,
}: {
  nodes: ShibaBGNodes;
  materials: ShibaBGMaterials;
}) {
  useCompoundBody(
    () => ({
      mass: 0,
      position: [0.4, 5, -2.2],
      collisionFilterGroup: 3,
      type: 'Static',
      shapes: [...BRIDGE_UPPER, ...BRIDGE_UNDER],
    }),
    useRef(null)
  );
  return (
    <group>
      {/* 다리 */}
      <mesh
        geometry={nodes.characters005_bridge_0.geometry}
        material={materials.bridge}
        rotation={[0, 0, -Math.PI / 2]}
        scale={100}
      />
      {/* 반대 다리와 나무 */}
      <mesh
        geometry={nodes.characters006_tree_0.geometry}
        material={materials.tree}
        rotation={[0, 0, -Math.PI / 2]}
        scale={100}
      />
    </group>
  );
}
