import InputDisplay from './input-display';
import GameStatus from './game-status';
interface TypingGame {
  currentQuestion: string;
  charIndex: number;
  isGameCompleted: boolean;
}
function TypingGame({
  currentQuestion,
  charIndex,
  isGameCompleted,
}: TypingGame) {
  if (isGameCompleted) {
    return <GameStatus message='ゲームクリア！' />;
  }
  return (
    <>
      <InputDisplay currentQuestion={currentQuestion} charIndex={charIndex} />
    </>
  );
}

export default TypingGame;
