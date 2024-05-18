import {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { createPortal } from 'react-dom';

import Modal from './Modal';
import { MobileRecordList } from '@/features/enforcement/components/RecordList';

type ModalProps = Omit<ComponentProps<typeof Modal>, 'children'>;
type ModalContent = 'enforce';

interface ModalContextValue {
  open: ({ type }: { type: ModalContent }) => void;
}

const Context = createContext<ModalContextValue | undefined>(undefined);

const defaultValues: ModalProps = {
  open: false,
  close,
};

export function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalState, setModalState] = useState(defaultValues);
  const [type, setType] = useState<ModalContent | undefined>();
  const $portal_root =
    typeof window === 'undefined'
      ? null
      : document.getElementById('root-portal');

  const close = useCallback(() => {
    setModalState(defaultValues);
  }, []);

  const open = useCallback(
    ({ type }: { type: ModalContent }) => {
      setModalState({
        open: true,
        close,
      });
      setType(type);
    },
    [close]
  );

  const values = useMemo(() => ({ open }), [open]);

  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root != null
        ? createPortal(
            <Modal {...modalState}>
              {type === 'enforce' && <MobileRecordList />}
            </Modal>,
            $portal_root
          )
        : null}
    </Context.Provider>
  );
}

export function useModalContext() {
  const values = useContext(Context);

  if (values == null) {
    throw new Error('ContextProvide 내부에서 사용해주세요');
  }

  return values;
}
