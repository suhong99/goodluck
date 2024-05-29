import { useEffect, useState } from 'react';

type InputState = {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
  jump: boolean;
};

type KeyMap = {
  [key: string]: keyof InputState;
};

export const useInput = (): InputState => {
  const [input, setInput] = useState<InputState>({
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

    const findKey = (key: string): keyof InputState | undefined => keys[key];

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
