import styles from './shared.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar} />
      </div>
      <p className={styles.loadingText}>로딩중입니다...</p>
    </div>
  );
}
