import { useEffect, useState } from 'react';

export type KeyboardEventState = {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
  jump: boolean;
};

type KeyMap = {
  [key: string]: keyof KeyboardEventState;
};

export const useInput = (): KeyboardEventState => {
  const [input, setInput] = useState<KeyboardEventState>({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
  });

  useEffect(() => {
    const keys: KeyMap = {
      KeyW: 'forward',
      KeyS: 'backward',
      KeyA: 'left',
      KeyD: 'right',
      Space: 'jump',
    };

    // 키를 찾는 함수
    const findKey = (key: string): keyof KeyboardEventState | undefined =>
      keys[key];

    const handleKeyDown = (e: KeyboardEvent): void => {
      const key = findKey(e.code);
      if (key) {
        setInput((prevInput) => ({ ...prevInput, [key]: true }));
      }
    };

    const handleKeyUp = (e: KeyboardEvent): void => {
      const key = findKey(e.code);
      if (key) {
        setInput((prevInput) => ({ ...prevInput, [key]: false }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return input;
};
