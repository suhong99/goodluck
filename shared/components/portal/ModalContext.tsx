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
import EventResult from '@/features/luckyshiba/components/event/EventResult';
import { EventResultProps } from '@/shared/constants/shibaEvent';
import GuidePopUp from '@/features/luckyshiba/components/tutorial/GuidePopup';

type ModalProps = Omit<ComponentProps<typeof Modal>, 'children'>;
type ModalContent = 'enforce' | 'shiba' | 'shibaTutorial';
type OpenProps =
  | { type: Exclude<ModalContent, 'shiba'> }
  | { type: 'shiba'; event: EventResultProps };

interface ModalContextValue {
  open: (info: OpenProps, closeFn?: () => void) => void;
}

const Context = createContext<ModalContextValue | undefined>(undefined);

const defaultValues: ModalProps = {
  open: false,
  close: () => {},
};

export function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalState, setModalState] = useState(defaultValues);
  const [type, setType] = useState<ModalContent | undefined>();
  const [event, setEvent] = useState<EventResultProps>();

  const $portal_root =
    typeof window === 'undefined'
      ? null
      : document.getElementById('root-portal');

  const close = useCallback((fn?: () => void) => {
    setModalState(defaultValues);
    if (fn) {
      fn();
    }
  }, []);

  const open = useCallback(
    (info: OpenProps, closeFn?: () => void) => {
      setModalState({
        open: true,
        close: () => close(closeFn),
      });
      setType(info.type);
      if (info.type === 'shiba') {
        setEvent(info.event);
      }
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
              {type === 'shiba' && event && <EventResult event={event} />}
              {type === 'shibaTutorial' && <GuidePopUp />}
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
