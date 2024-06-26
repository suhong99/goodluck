import { useShowingProcessStore } from '@/store/showingProcess';
import { motion } from 'framer-motion-3d';
import EventListHtml from './EventListHtml';
import { Text3D } from '@react-three/drei';
import { TITLE_3D } from '@/shared/contants/color';

export default function EventListGround() {
  const color = '#e5e5a6';
  const { isVisible } = useShowingProcessStore();

  const fontUrl = '/font/ONE_Mobile_POP_Regular.json';

  const fontStyle = {
    font: fontUrl,
    size: 0.2,
    letterSpacing: 0.01,
    height: 0.02,
    fontSize: 2,
  };
  return (
    <group position={[5.5, 0, -2.8]}>
      <motion.mesh
        rotation-x={-Math.PI / 2}
        initial={{ scale: 0.5 }}
        animate={
          isVisible
            ? {
                opacity: 0.1,
                y: 0.05,
                transition: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
              }
            : {
                opacity: 0.5,
                y: [0.05, 0.5, 0.05],
                transition: {
                  duration: 2,
                  ease: 'easeInOut',
                  delay: 0.3,
                  repeat: Infinity,
                },
              }
        }
      >
        <circleGeometry args={[1, 32]} />
        <meshBasicMaterial transparent color={color} opacity={0.3} />
      </motion.mesh>
      <mesh rotation-x={-Math.PI / 2} scale={0.5}>
        <circleGeometry args={[1, 32]} />
        <meshBasicMaterial transparent color={color} opacity={0.7} />
      </mesh>
      {isVisible ? (
        <EventListHtml />
      ) : (
        <Text3D
          position={[0, 1.9, -0.5]}
          {...fontStyle}
          rotation={[0, -Math.PI / 2, 0]}
        >
          획득 목록
          <meshBasicMaterial color={TITLE_3D} />
        </Text3D>
      )}
    </group>
  );
}
