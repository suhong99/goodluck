import { useShibaEventStore } from '@/store/shibaEvent';
import { Html } from '@react-three/drei';
import styles from '@/app/(enforcement)/luckyshiba/luckyshiba.module.css';
export default function EventListHtml() {
  const { eventList } = useShibaEventStore();

  return (
    <>
      <mesh position={[0, 2, 0]}>
        <group position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}></group>
        <Html center>
          <div className={styles.EventListHtmlWrapper}>
            <div className={styles.EventListTitle}>획득 목록</div>

            {Object.entries(eventList).map(([eventType, isChecked]) => {
              return (
                <span
                  key={eventType}
                  className={`${styles.eventItem} ${
                    isChecked ? styles.checked : ''
                  }`}
                >
                  {eventType}
                </span>
              );
            })}
          </div>
        </Html>
      </mesh>
    </>
  );
}
