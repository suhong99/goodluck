import Image from 'next/image';
import Link from 'next/link';

export default function HomeIcon() {
  return (
    <Link href={'/'}>
      <Image src="/logo.png" alt="homelogo" width={60} height={60} />
    </Link>
  );
}
