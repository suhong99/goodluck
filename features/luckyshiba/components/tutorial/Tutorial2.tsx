import styles from '@/app/luckyshiba/luckyshiba.module.css';

export default function Tutorial2() {
  return (
    <>
      <div className={styles.highLight}> 카메라 조정 방법의 상세설명 </div>
      <div>
        <span className={styles.highLight}>화면 회전</span> : 마우스 좌클릭 후
        이동
      </div>
      <div>
        <span className={styles.highLight}>화면 줌</span> : 마우스 휠
      </div>
      <div>
        <span className={styles.highLight}>획득 목록 비콘</span>에서 이때까지
        <span className={styles.highLight}>수집한 물품</span>을 확인할 수
        있습니다
      </div>
      <div>
        <span className={styles.highLight}>
          마이페이지에서는 최초 획득 날짜
        </span>
        도 확인할 수 있습니다
      </div>
    </>
  );
}
