import { useMemo } from 'react';

export const useTypingData = () => {
  return useMemo(
    () => ['hello', 'world', 'React', 'Typing', 'game'], // TODO:DBからフェッチしたデータに修正
    []
  );
};
