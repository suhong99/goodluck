import { NAVIGATION_LIST } from '@/shared/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="WH100 notfound_wrapper">
      <div style={{}}></div>
      <h2 style={{ fontWeight: '700', fontSize: '18px' }}>
        존재하지 않는 페이지입니다.
      </h2>
      <div className="notfound_container">
        {NAVIGATION_LIST.map(({ label, url, img }) => (
          <Link
            key={label}
            href={url}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <Image
              alt={label + ' 예시 이미지'}
              width={400}
              height={300}
              src={'/images/' + img}
            />
            <span>{label}로 이동</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
