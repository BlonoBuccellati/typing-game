// ロジックを持つコンテナコンポーネント
// TODO: データをここで全て用意する。localStateでフェッチしたデータを管理。
import Timer from './timer';
import TypingGame from './typing-game';

import { useTypingGame } from '@/hooks/use-typing-game';
import GameStatus from './game-status';

// ゲーム時間
const GAME_DURATION = 10; //後でグローバルにするかも

// フェッチしたデータはTypingGameの引数にとる？
const TypingGameContainer = () => {
  const {
    currentQuestion,
    charIndex,
    isGameCompleted,
    isPlaying,
    remainingTime,
  } = useTypingGame(GAME_DURATION);

  return (
    <>
      {'currentQuestion:' + currentQuestion}
      <br />
      {'charIndex:' + charIndex}
      <br />
      {'isGameCompleted:' + isGameCompleted}
      <br />
      {'isPlaying:' + isPlaying}
      <br />
      {'remainingTime:' + remainingTime}
      <br />
      {/** TODO:オーバーレイするように実装 */}
      {!isPlaying && <GameStatus message='終了！' />}
      <br />
      {/**メイン画面 */}
      <div>
        <h2>タイピングゲーム</h2>
        <Timer remainingGameTime={remainingTime} />
        <TypingGame
          currentQuestion={currentQuestion}
          charIndex={charIndex}
          isGameCompleted={isGameCompleted}
        />
      </div>
    </>
  );
};

export default TypingGameContainer;
