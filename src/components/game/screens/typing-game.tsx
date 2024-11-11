// TODO: データをここで全て用意する。localStateでフェッチしたデータを管理。
import { Input } from '@/components/ui/input';
import Timer from './timer';
import Finish from './finish';
import { useTypingGame } from '@/hooks/typing-game';

// ゲーム時間
const GAME_DURATION = 10; //後でグローバルにするかも

// フェッチしたデータはTypingGameの引数にとる？
const TypingGame = () => {
  const {
    currentQuestion,
    charIndex,
    inputText,
    isGameCompleted,
    isCounting,
    remainingTime,
    handleInputChange,
  } = useTypingGame(GAME_DURATION);

  const renderGameContent = () => {
    if (isGameCompleted) {
      return <div>ゲームクリア！</div>;
    }
    return (
      <>
        <p>
          <span className='text-green-400 font-bold'>
            {currentQuestion.slice(0, charIndex)}
          </span>
          <span>{currentQuestion.slice(charIndex)}</span>
        </p>
        <Input
          onChange={handleInputChange}
          placeholder={currentQuestion}
          value={inputText}
        />
      </>
    );
  };

  return (
    <>
      {/** TODO:オーバーレイするように実装 */}
      {!isCounting && <Finish />}
      {/**メイン画面 */}
      <div>
        <h2>タイピングゲーム</h2>
        <Timer remainingGameTime={remainingTime} />
        <div>{renderGameContent()}</div>
      </div>
    </>
  );
};

export default TypingGame;
