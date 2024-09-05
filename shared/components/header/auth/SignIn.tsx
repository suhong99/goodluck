import Image from 'next/image';
import React from 'react';
import { signIn } from '@/auth';
import styles from '../header.module.css';

export function SignIn() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google');
      }}
    >
      <button type="submit" className="no_style_btn">
        <Image
          src="/images/google_signin.png"
          alt="Login"
          width={160}
          height={40}
          className={styles.l_signin}
        />
        <div className={styles.s_signin}>
          <Image
            src="/images/google_s.png"
            alt="작은 구글"
            width={40}
            height={40}
          />
          <p>유저 메뉴</p>
        </div>
      </button>
    </form>
  );
}
