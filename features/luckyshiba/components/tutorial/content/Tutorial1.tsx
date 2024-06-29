import styles from '@/app/luckyshiba/luckyshiba.module.css';

export default function Tutorial1() {
  return (
    <>
      <div>
        시바를 이동시켜 <span className={styles.highLight}>행복한 일</span>을
        겪게 해주세요.
      </div>
      <div>
        지역은 <span className={styles.highLight}>강, 집, 언덕</span> 3가지로
        나뉘어져 있습니다
      </div>
      <div>
        각각의 물건은 ChatGPT와 제작자의 유튜브 알고리즘을 기반으로 배치
        하였습니다
      </div>
    </>
  );
}
