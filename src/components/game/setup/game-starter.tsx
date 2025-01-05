import useCountDown from '@/hooks/counter';
import CountDown from './count-down';
import TypingGameContainer from '../screens/typing-game-container';
import TimerContainer from '../screens/timer-container';

const GameStarter = () => {
  // ゲーム開始までのカウント
  const countToStart = 3;
  const { seconds, isCounting: isActive } = useCountDown(countToStart);
  return isActive ? (
    <CountDown count={seconds} />
  ) : (
    <>
      <TimerContainer />
      <TypingGameContainer />
    </>
  );
};

export default GameStarter;
