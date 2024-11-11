import { Input } from '@/components/ui/input';
import InputDisplay from './input-display';
import GameStatus from './game-status';

interface TypingGame {
  currentQuestion: string;
  charIndex: number;
  inputText: string;
  isGameCompleted: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const TypingGame = ({
  currentQuestion,
  charIndex,
  inputText,
  isGameCompleted,
  handleInputChange,
}: TypingGame) => {
  if (isGameCompleted) {
    return <GameStatus message='ゲームクリア！' />;
  }
  return (
    <>
      <InputDisplay currentQuestion={currentQuestion} charIndex={charIndex} />
      <Input
        onChange={handleInputChange}
        placeholder={currentQuestion}
        value={inputText}
      />
    </>
  );
};

export default TypingGame;
