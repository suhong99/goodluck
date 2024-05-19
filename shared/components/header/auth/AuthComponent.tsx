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
      <button
        type="submit"
        style={{
          padding: 0,
          border: 'none',
          background: 'none',
          cursor: 'pointer',
        }}
      >
        <Image src="/google_signin.png" alt="Login" width={160} height={40} />
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
