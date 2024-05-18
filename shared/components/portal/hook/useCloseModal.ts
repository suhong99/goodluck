import { useEffect, useRef } from 'react';

export function useCloseModalByClick(
  isOpen: boolean,
  onClose: () => void,
  modalRef: React.RefObject<HTMLDivElement>
) {
  const initialRender = useRef(true);

  useEffect(() => {
    const closeByClick = (event: MouseEvent) => {
      if (isOpen && initialRender.current) {
        initialRender.current = false;
        return;
      }

      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener('click', closeByClick);
    return () => {
      document.removeEventListener('click', closeByClick);
      initialRender.current = true;
    };
  }, [isOpen, onClose, modalRef]);
}

export const useCloseModalByKeyboard = (
  isOpen: boolean,
  onClose: () => void
) => {
  useEffect(() => {
    const closeByKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', closeByKeyDown);
      return () => {
        document.removeEventListener('keydown', closeByKeyDown);
      };
    }
  }, [isOpen, onClose]);
};
