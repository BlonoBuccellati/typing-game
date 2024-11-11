// ロジックを持つコンテナコンポーネント
// TODO: データをここで全て用意する。localStateでフェッチしたデータを管理。
import Timer from './timer';
import Finish from './finish';
import TypingGame from './typing-game';

import { useTypingGame } from '@/hooks/typing-game';

// ゲーム時間
const GAME_DURATION = 10; //後でグローバルにするかも

// フェッチしたデータはTypingGameの引数にとる？
const TypingGameContainer = () => {
  const {
    currentQuestion,
    charIndex,
    inputText,
    isGameCompleted,
    isCounting,
    remainingTime,
    handleInputChange,
  } = useTypingGame(GAME_DURATION);

  return (
    <>
      {/** TODO:オーバーレイするように実装 */}
      {!isCounting && <Finish />}
      {/**メイン画面 */}
      <div>
        <h2>タイピングゲーム</h2>
        <Timer remainingGameTime={remainingTime} />
        <TypingGame
          currentQuestion={currentQuestion}
          charIndex={charIndex}
          inputText={inputText}
          isGameCompleted={isGameCompleted}
          handleInputChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default TypingGameContainer;
