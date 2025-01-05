import useGameCounter from '@/hooks/counter/game-counter';
import Timer from './timer';

// ゲーム時間
const duration = 10;
const TimerContainer = () => {
  const { seconds: remainingTime } = useGameCounter(duration);

  return (
    <div>
      <Timer remainingGameTime={remainingTime} />
    </div>
  );
};

export default TimerContainer;
