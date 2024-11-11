import useCountDown from '@/hooks/counter';
import CountDown from './count-down';
import TypingGameContainer from '../screens/typing-game-container';

const GameStarter = () => {
  const countToStart = 3;
  // ゲーム開始までのカウント
  const { seconds, isCounting } = useCountDown(countToStart);

  return isCounting ? <CountDown count={seconds} /> : <TypingGameContainer />;
};

export default GameStarter;
