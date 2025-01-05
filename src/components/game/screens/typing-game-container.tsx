// ロジックを持つコンテナコンポーネント
// TODO: データをここで全て用意する。localStateでフェッチしたデータを管理。
import TypingGame from './typing-game';
import Finish from './finish';

import { useTypingGame } from '@/hooks/use-typing-game';
import useBoundStore from '@/store';

// フェッチしたデータはTypingGameの引数にとる？
const TypingGameContainer = () => {
  const { currentQuestion, charIndex } = useTypingGame();
  const status = useBoundStore((state) => state.status);
  if (status === 'complete') {
    return <Finish message='ゲームクリア！' />;
  }
  if (status === 'finish') {
    return <Finish message='終了' />;
  }
  return (
    <>
      <TypingGame currentQuestion={currentQuestion} charIndex={charIndex} />
    </>
  );
};

export default TypingGameContainer;
