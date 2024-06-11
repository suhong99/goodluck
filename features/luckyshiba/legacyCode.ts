// TODO : 사용하지 않으면 지우기

// const geo: { vertices: Triplet[]; faces: Triplet[] } = useMemo(() => {
//   const bufferGeometry = nodes.characters007_bush_0.geometry;

//   // BufferGeometry에서 꼭짓점(vertices)와 얼굴면(faces) 정보 추출
//   const positions = bufferGeometry.attributes.position.array;
//   const vertices: Triplet[] = [];
//   for (let i = 0; i < positions.length; i += 3) {
//     vertices.push([
//       positions[i],
//       positions[i + 1],
//       positions[i + 2],
//     ] as Triplet);
//   }

//   const indices = bufferGeometry!.index!.array;
//   const faces: Triplet[] = [];
//   for (let i = 0; i < indices.length; i += 3) {
//     faces.push([indices[i], indices[i + 1], indices[i + 2]] as Triplet);
//   }

//   return { vertices, faces };
// }, [nodes]);

// console.log(geo.vertices, geo.faces);

// const [ref] = useConvexPolyhedron(() => ({
//   mass: 100,
//   args: [geo.vertices, geo.faces],
//   onCollide: (e) => console.log('collision', e.contact.impactVelocity),
// }));

// const { a_x, a_y, a_z, p_x, p_y, p_z, r_x, r_y, r_z } = useControls(
//   'New hill',
//   {
//     a_x: { value: 0, min: 0, max: 20, step: 0.1 },
//     a_y: { value: 0, min: 0, max: 20, step: 0.1 },
//     a_z: { value: 0, min: 0, max: 20, step: 0.1 },
//     p_x: { value: 0, min: -20, max: 20, step: 0.1 },
//     p_y: { value: 0, min: 0, max: 20, step: 0.1 },
//     p_z: { value: 0, min: -20, max: 20, step: 0.1 },
//     r_x: {
//       value: 0,
//       min: -(2 * Math.PI),
//       max: 2 * Math.PI,
//       step: Math.PI / 8,
//     },
//     r_y: {
//       value: 0,
//       min: -(2 * Math.PI),
//       max: 2 * Math.PI,
//       step: Math.PI / 8,
//     },
//     r_z: {
//       value: 0,
//       min: -(2 * Math.PI),
//       max: 2 * Math.PI,
//       step: Math.PI / 8,
//     },
//   }
// );
