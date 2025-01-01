import useCountDown from '@/hooks/counter';
import CountDown from './count-down';
import TypingGameContainer from '../screens/typing-game-container';

const GameStarter = () => {
  // ゲーム開始までのカウント
  const countToStart = 3;
  const { seconds, isCounting } = useCountDown(countToStart);

  return isCounting ? <CountDown count={seconds} /> : <TypingGameContainer />;
};

export default GameStarter;
