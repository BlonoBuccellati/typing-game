interface InputDisplay {
  currentQuestion: string;
  charIndex: number;
}
const InputDisplay = ({ currentQuestion, charIndex }: InputDisplay) => {
  return (
    <div className='flex items-center justify-center'>
      <p className='text-9xl'>
        <span className='text-green-400'>
          {currentQuestion.slice(0, charIndex)}
        </span>
        <span>{currentQuestion.slice(charIndex)}</span>
      </p>
    </div>
  );
};

export default InputDisplay;
