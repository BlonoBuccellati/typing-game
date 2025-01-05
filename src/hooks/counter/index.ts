import { useState, useEffect } from 'react';
/**
 * カウントダウン(hooks)
 * @returns
 *
 */
const useCountDown = (initialCount: number) => {
  const [seconds, setSeconds] = useState(initialCount);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsCounting(false);
    }
  }, [seconds]);
  return { seconds, isCounting };
};

export default useCountDown;
