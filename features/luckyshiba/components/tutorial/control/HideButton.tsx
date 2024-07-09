import React from 'react';
import styles from '@/app/(enforcement)/luckyshiba/luckyshiba.module.css';
import { MANUAL_SKIP } from '@/shared/constants';
import { closeModalByEvent } from '@/shared/components/portal/util';

export default function HideButton() {
  const hideManualByDefault = () => {
    localStorage.setItem(MANUAL_SKIP, 'true');
    closeModalByEvent();
  };

  return (
    <button className={styles.hideButton} onClick={hideManualByDefault}>
      다시 보지 않기
    </button>
  );
}
