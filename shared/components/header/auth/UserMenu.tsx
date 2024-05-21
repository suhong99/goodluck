'use client';

import Image from 'next/image';
import style from '../header.module.css';
import { useReducer } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

export default function UserMenu({ image }: { image: string }) {
  const [isOpen, toggleIsOpen] = useReducer((v) => !v, false);

  return (
    <div style={{ position: 'relative' }}>
      <button
        className={`no_style_btn ${style.user_menu}`}
        onClick={toggleIsOpen}
      >
        <Image src={image} alt="프로필사진" width={40} height={40} />
        <a>유저 메뉴</a>
      </button>
      {isOpen && (
        <div className={style.pop_over}>
          <Link
            className={style.pop_button}
            href="/mypage"
            onClick={() => toggleIsOpen()}
          >
            마이페이지
          </Link>
          <button className={style.pop_button} onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
