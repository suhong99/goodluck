import { useRef } from 'react';
import Dimmed from './Dimmed';
import style from './portal.module.css';
import {
  useCloseModalByClick,
  useCloseModalByKeyboard,
} from './hook/useCloseModal';

export interface ModalProps {
  open?: boolean;
  children: React.ReactNode;
  close: () => void;
}

export default function Modal({ open, close, children }: ModalProps) {
  const modalRef = useRef(null!);
  useCloseModalByClick(open!, close, modalRef);
  useCloseModalByKeyboard(open!, close);

  if (open === false) {
    return null;
  }

  return (
    <Dimmed>
      <div className={style.modal} ref={modalRef}>
        <button className={style.closeBtn} onClick={() => close()}>
          X
        </button>
        {children}
      </div>
    </Dimmed>
  );
}
