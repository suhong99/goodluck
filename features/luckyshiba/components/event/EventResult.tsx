import { EventResultProps } from '@/shared/contants/shibaEvent';
import Image from 'next/image';

export default function EventResult({ event }: { event: EventResultProps }) {
  const { type, img, percent, copyright } = event;

  return (
    <div>
      <div>
        {percent}%확률로 {type}을 획득하셨습니다
      </div>
      <Image
        src={'/images/' + img}
        width={200}
        height={150}
        alt={type + '이미지'}
      />
      {copyright && (
        <a href={event.url} target="_blank" rel="noopener noreferrer">
          출처 : {copyright}
        </a>
      )}
    </div>
  );
}
