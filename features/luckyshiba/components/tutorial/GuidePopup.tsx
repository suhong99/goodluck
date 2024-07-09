import styles from '@/app/(enforcement)/luckyshiba/luckyshiba.module.css';
import { tutorials } from './content';
import { useStep } from './hooks/useStep';
import HideButton from './control/HideButton';
import Navigation from './control/Navigation';

export default function GuidePopUp() {
  const lastStep = tutorials.length;
  const [step, stepChanger] = useStep(lastStep);

  return (
    <div className={styles.manualWrapper}>
      <div className={styles.manualTitle}>게임 시작 메뉴얼</div>
      <div className={styles.manualContents}>{tutorials[step]}</div>
      <HideButton />
      <Navigation step={step} stepChanger={stepChanger} totalSteps={lastStep} />
    </div>
  );
}
