import React from 'react';
import styles from '@/app/luckyshiba/luckyshiba.module.css';

interface NavigationProps {
  step: number;
  stepChanger: (direction: 'before' | 'after') => void;
  totalSteps: number;
}

export default function Navigation({
  step,
  stepChanger,
  totalSteps,
}: NavigationProps) {
  return (
    <div className={styles.naviWrapper}>
      <button
        className={styles.naviButton}
        onClick={() => stepChanger('before')}
      >
        이전
      </button>
      {step + 1 + '/' + totalSteps}
      <button
        className={styles.naviButton}
        onClick={() => stepChanger('after')}
      >
        다음
      </button>
    </div>
  );
}
