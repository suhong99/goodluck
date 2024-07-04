import style from '@/app/(enforcement)/enforcement.module.css';

export default function RecordModalBtn({
  openRecords,
}: {
  openRecords: () => void;
}) {
  //TODO : 분리시 modalContext를 인지하지 못함

  // const { open } = useModalContext();
  // const openRecords = () => {
  //   open({ type: 'enforce' });
  // };
  return (
    <button className={`${style.button} ${style.mobile}`} onClick={openRecords}>
      데이터 보기
    </button>
  );
}
