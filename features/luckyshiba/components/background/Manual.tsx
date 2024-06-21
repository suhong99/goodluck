import { Text3D } from '@react-three/drei';
export default function Manual() {
  const fontUrl = '/font/ONE_Mobile_POP_Regular.json';
  const titleColor = '#86603a';
  const textColor = '#ffe4c4';
  const fontStyle = {
    font: fontUrl,
    size: 0.2,
    letterSpacing: 0.01,
    height: 0.02,
    fontSize: 2,
  };

  return (
    <group position={[-0.3, 0, 0]}>
      <group position={[-5, 0.5, -1]} rotation={[0, Math.PI / 2, 0]}>
        <Text3D position={[-0.12, 0.57, 0]} {...fontStyle}>
          이동
          <meshBasicMaterial color={titleColor} />
        </Text3D>
        <Text3D position={[0, 0.27, 0]} {...fontStyle}>
          W
          <meshBasicMaterial color={textColor} />
        </Text3D>
        <Text3D position={[-0.26, 0, 0]} {...fontStyle}>
          A S D
          <meshBasicMaterial color={textColor} />
        </Text3D>
      </group>
      <group position={[-5, 0.58, -2.5]} rotation={[0, Math.PI / 2, 0]}>
        <Text3D position={[0, 0.48, 0]} {...fontStyle}>
          비행
          <meshBasicMaterial color={titleColor} />
        </Text3D>
        <Text3D position={[-0.24, 0, 0]} {...fontStyle}>
          SPACE
          <meshBasicMaterial color={textColor} />
        </Text3D>
      </group>
      <group position={[-5, 1.7, -1.25]} rotation={[0, Math.PI / 2, 0]}>
        <Text3D position={[-0.07, 0.35, 0]} {...fontStyle}>
          카메라 제어
          <meshBasicMaterial color={titleColor} />
        </Text3D>
        <Text3D position={[0, 0, 0]} {...fontStyle}>
          마우스 활용
          <meshBasicMaterial color={textColor} />
        </Text3D>
      </group>
    </group>
  );
}
