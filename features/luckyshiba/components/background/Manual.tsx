import { Text, Text3D } from '@react-three/drei';

export default function Manual() {
  return (
    <group position={[-0.5, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <Text position={[-0.5, 0, 0]}>W</Text>
      <Text position={[-0.5, -1, 0]}>A S D</Text>
      <Text position={[2.5, -1, 0]}>SPACE</Text>

      {/* <group position={[0.3, -0.5, 0]}>
        <Text3D position={[0.2, 0.1, 0]} {...fontStyle}>
          ↑
          <meshNormalMaterial />
        </Text3D>
        <Text3D position={[0, -0.1, 0]} {...fontStyle}>
          ←↓→
          <meshNormalMaterial />
        </Text3D>
      </group> */}
    </group>
  );
}
