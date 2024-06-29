import { fontStyle } from '@/shared/contants';
import { SUBTEXT_3D, TITLE_3D } from '@/shared/contants/color';
import { Text3D } from '@react-three/drei';
export default function Manual() {
  return (
    <group position={[-0.3, 0, 0]}>
      <group position={[-5, 0.5, -1]} rotation={[0, Math.PI / 2, 0]}>
        <Text3D position={[-0.12, 0.57, 0]} {...fontStyle}>
          이동
          <meshBasicMaterial color={TITLE_3D} />
        </Text3D>
        <Text3D position={[0, 0.27, 0]} {...fontStyle}>
          W
          <meshBasicMaterial color={SUBTEXT_3D} />
        </Text3D>
        <Text3D position={[-0.26, 0, 0]} {...fontStyle}>
          A S D
          <meshBasicMaterial color={SUBTEXT_3D} />
        </Text3D>
      </group>
      <group position={[-5, 0.58, -2.5]} rotation={[0, Math.PI / 2, 0]}>
        <Text3D position={[0, 0.48, 0]} {...fontStyle}>
          비행
          <meshBasicMaterial color={TITLE_3D} />
        </Text3D>
        <Text3D position={[-0.24, 0, 0]} {...fontStyle}>
          SPACE
          <meshBasicMaterial color={SUBTEXT_3D} />
        </Text3D>
      </group>
      <group position={[-5, 1.7, -1.25]} rotation={[0, Math.PI / 2, 0]}>
        <Text3D position={[-0.07, 0.35, 0]} {...fontStyle}>
          카메라 제어
          <meshBasicMaterial color={TITLE_3D} />
        </Text3D>
        <Text3D position={[0, 0, 0]} {...fontStyle}>
          마우스 활용
          <meshBasicMaterial color={SUBTEXT_3D} />
        </Text3D>
      </group>
    </group>
  );
}
