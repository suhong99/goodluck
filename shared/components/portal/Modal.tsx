import Dimmed from './Dimmed';
import style from './portal.module.css';

interface ModalProps {
  open?: boolean;
  children?: React.ReactNode;
  close: () => void;
}

export default function Modal({ open, close, children }: ModalProps) {
  if (open === false) {
    return null;
  }

  return (
    <Dimmed>
      <div className={style.modal}>
        {children}
        <button onClick={close}>닫기</button>
      </div>
    </Dimmed>
  );
}
