import { EventResultProps } from '@/shared/constants/shibaEvent';
import Image from 'next/image';
import styles from '@/app/(enforcement)/luckyshiba/luckyshiba.module.css';

export default function EventResult({ event }: { event: EventResultProps }) {
  const { type, img, percent, copyright } = event;

  return (
    <div className={styles.modalWrapper}>
      <div>
        <span className={styles.important}>{percent}</span>%확률로
      </div>
      <div>
        <span className={styles.important}>{type}</span>를(을)획득하셨습니다
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={'/images/' + img}
          width={200}
          height={150}
          alt={type + '이미지'}
        />
        {copyright && (
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.copyrightLink}
          >
            출처 : {copyright}
          </a>
        )}
      </div>
    </div>
  );
}
