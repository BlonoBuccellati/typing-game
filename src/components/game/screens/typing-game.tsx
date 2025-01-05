import InputDisplay from './input-display';

interface TypingGame {
  currentQuestion: string;
  charIndex: number;
}
function TypingGame({ currentQuestion, charIndex }: TypingGame) {
  return (
    <>
      <div className='flex flex-col items-center justify-center space-y-16'>
        <InputDisplay currentQuestion={currentQuestion} charIndex={charIndex} />
      </div>
    </>
  );
}

export default TypingGame;
