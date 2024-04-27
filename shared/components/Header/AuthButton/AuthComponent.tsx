import Image from 'next/image';
import React from 'react';
import styles from '../header.module.css';
import { signIn, signOut } from '@/auth';

export function SignIn() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google');
      }}
    >
      <button type="submit" className={styles.button}>
        <Image src="/login.svg" alt="Login" width={40} height={40} />
        <span>로그인</span>
      </button>
    </form>
  );
}

export function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button>Sign Out</button>
    </form>
  );
}
