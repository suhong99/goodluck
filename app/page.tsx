// import Image from 'next/image';
// import styles from './page.module.css';

import { SignIn } from '@/features/auth/components/sign-in';
import Header from '@/shared/components/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <SignIn />
    </main>
  );
}
