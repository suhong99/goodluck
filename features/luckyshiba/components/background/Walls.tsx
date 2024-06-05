import { TransparentPlane } from '@/shared/components/3dmodel/TransparentPlane';

export default function Walls() {
  return (
    <>
      {/* 바닥, 천장, 앞 뒤, 좌 우 */}
      <TransparentPlane
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.1, 0]}
        receivceShadow={true}
      />
      <TransparentPlane rotation={[Math.PI / 2, 0, 0]} position={[0, 20, 0]} />
      <TransparentPlane rotation={[Math.PI, 0, 0]} position={[0, 0, 11]} />
      <TransparentPlane rotation={[0, 0, 0]} position={[0, 0, -15]} />
      <TransparentPlane rotation={[0, -Math.PI / 2, 0]} position={[15, 0, 0]} />
      <TransparentPlane rotation={[0, Math.PI / 2, 0]} position={[-15, 0, 0]} />
    </>
  );
}
