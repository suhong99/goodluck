import { SHIBA_BG_MATERIALS, SHIBA_BG_NODES } from '@/shared/contants/model';
import { Triplet, useConvexPolyhedron } from '@react-three/cannon';

export default function Bridge({
  nodes,
  materials,
}: {
  nodes: SHIBA_BG_NODES;
  materials: SHIBA_BG_MATERIALS;
}) {
  const width = 2;
  const length = 8.5;
  const vertices: Triplet[] = [
    [1, 0, width],
    [1, 0, -width],
    [-1, 0, width],
    [-1, 0, -width],
    [-length, -2, width],
    [-length, -2, -width],
    [length, -2, width],
    [length, -2, -width],
    [-length, -4.5, width],
    [-length, -4.5, -width],
    [length, -4.5, width], //10
    [length, -4.5, -width], //11
    [1.5, -2, width],
    [1.5, -2, -width],
    [-1.5, -2, width],
    [-1.5, -2, -width],
  ];

  const faces = [
    [0, 1, 2, 3],
    [2, 3, 4, 5],
    [0, 1, 6, 7],
    [4, 5, 8, 9],
    [6, 7, 10, 11],
    [10, 11, 12, 13],
    [8, 9, 14, 15],
    [12, 13, 14, 15],
    [5, 9, 3, 15],
    [2, 4, 8, 14],
    [0, 2, 12, 14],
    [1, 3, 13, 15],
    [0, 12, 6, 10],
    [1, 7, 13, 11],
  ];

  // const [body, _] = useConvexPolyhedron(() => ({
  //   mass: 100,
  //   rotation: [0, 0, 0],
  //   collisionFilterGroup: 3,
  //   position: [0.5, 8.7, -2],
  //   type: 'Static',
  //   args: [vertices, faces],
  // }));

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
