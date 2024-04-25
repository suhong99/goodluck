'use client';

import Image from 'next/image';
import styles from './header.module.css';

export default function AuthButton() {
  return (
    <div role="button" className={styles.button}>
      <Image src="/login.svg" alt="Login" width={40} height={40} />
      <span>로그인</span>
    </div>
  );
}
