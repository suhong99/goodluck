import { SHIBA_BG_MATERIALS, SHIBA_BG_NODES } from '@/shared/contants/model';
import { useCompoundBody, useTrimesh } from '@react-three/cannon';
import { useRef } from 'react';

export default function Bridge({
  nodes,
  materials,
}: {
  nodes: SHIBA_BG_NODES;
  materials: SHIBA_BG_MATERIALS;
}) {
  const [bridgeBody, _] = useCompoundBody(
    () => ({
      mass: 0,
      rotation: [0, 0, 0],
      collisionFilterGroup: 3,
      shapes: [],
    }),
    useRef(null)
  );

  return (
    <>
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
    </>
  );
}
