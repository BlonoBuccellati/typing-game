import useCountDown from '@/hooks/counter';
import CountDown from './count-down';
import TypingGame from '../screens/typing-game';

const GameStarter = () => {
  const countToStart = 3;
  // ゲーム開始までのカウント
  const { seconds, isCounting } = useCountDown(countToStart);

  return isCounting ? <CountDown count={seconds} /> : <TypingGame />;
};

export default GameStarter;
