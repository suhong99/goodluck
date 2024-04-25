import React from 'react';
import styles from './header.module.css';
import AuthButton from './AuthButton';
import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLinks />
      <AuthButton />
    </header>
  );
}
