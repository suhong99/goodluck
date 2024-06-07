import { SHIBA_BG_MATERIALS, SHIBA_BG_NODES } from '@/shared/contants/model';
import { Triplet, useConvexPolyhedron } from '@react-three/cannon';

export default function Bridge({
  nodes,
  materials,
}: {
  nodes: SHIBA_BG_NODES;
  materials: SHIBA_BG_MATERIALS;
}) {
  const width = 4;
  const length = 17;
  const vertices: Triplet[] = [
    [9.5, 4.5, width],
    [9.5, 4.5, 0],
    [7, 4.5, width],
    [7, 4.5, 0],
    [0, 2.5, width],
    [0, 2.5, 0],
    [length, 2.5, width],
    [length, 2.5, 0],
    [0, 0, width],
    [0, 0, 0],
    [length, 0, width], //10
    [length, 0, 0], //11
    [10, 2.5, width],
    [10, 2.5, 0],
    [7, 2.5, width],
    [7, 2.5, 0],
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

  const normals: Triplet[] = [
    [0, 1, 0],
    [-0.27472112789737807, 0.9615239476408232, 0],
    [-0.25766265056033233, -0.9662349396012463, -0],
    [-1, -0, -0],
    [-1, -0, -0],
    [0.3363363969981562, 0.9417419115948374, 0],
    [0.3363363969981562, -0.9417419115948374, 0],
    [0, 1, 0],
    [-0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, -1],
  ];

  // function calculateNormal(v0, v1, v2) {
  //   const vector1 = [v1[0] - v0[0], v1[1] - v0[1], v1[2] - v0[2]];

  //   const vector2 = [v2[0] - v0[0], v2[1] - v0[1], v2[2] - v0[2]];

  //   const normal = [
  //     vector1[1] * vector2[2] - vector1[2] * vector2[1],
  //     vector1[2] * vector2[0] - vector1[0] * vector2[2],
  //     vector1[0] * vector2[1] - vector1[1] * vector2[0],
  //   ];

  //   const length = Math.sqrt(
  //     normal[0] * normal[0] + normal[1] * normal[1] + normal[2] * normal[2]
  //   );

  //   return [normal[0] / length, normal[1] / length, normal[2] / length];
  // }

  // const normals = faces.map((face) => {
  //   const [v0, v1, v2] = face.map((index) => vertices[index]);
  //   return calculateNormal(v0, v1, v2);
  // });

  // console.log(normals, 'normals');

  const [body, _] = useConvexPolyhedron(() => ({
    mass: 100,
    rotation: [0, 0, 0],
    collisionFilterGroup: 3,
    position: [0.5, 8.7, -2],
    type: 'Static',
    args: [vertices, faces, normals],
  }));

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
