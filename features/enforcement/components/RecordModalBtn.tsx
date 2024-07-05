import style from '@/app/(enforcement)/enforcement.module.css';
import { useModalContext } from '@/shared/components/portal/ModalContext';

export default function RecordModalBtn() {
  const { open } = useModalContext();
  const openRecords = () => {
    open({ type: 'enforce' });
  };
  return (
    <button className={`${style.button} ${style.mobile}`} onClick={openRecords}>
      데이터 보기
    </button>
  );
}
