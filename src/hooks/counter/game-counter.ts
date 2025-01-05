import useCountDown from '@/hooks/counter';
import useBoundStore from '@/store';

const useGameCounter = (remainingTimer: number) => {
  const { seconds, isCounting } = useCountDown(remainingTimer);
  const setFinish = useBoundStore((state) => state.setFinish);
  if (!isCounting) {
    setFinish();
  }
  return { seconds, isCounting };
};

export default useGameCounter;
