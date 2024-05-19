'use client';

import { NAVIGATION_LIST } from '@/shared/contants';
import Link from 'next/link';
import style from './header.module.css';
export default function NavLinks() {
  return (
    <nav className={style.navigation}>
      {NAVIGATION_LIST.map((nav) => {
        return (
          <Link key={nav.label} href={nav.url}>
            <div>{nav.label}</div>
          </Link>
        );
      })}
    </nav>
  );
}
