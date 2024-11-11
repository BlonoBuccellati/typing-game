interface InputDisplay {
  currentQuestion: string;
  charIndex: number;
}
const InputDisplay = ({ currentQuestion, charIndex }: InputDisplay) => {
  return (
    <p>
      <span className='text-green-400 font-bold'>
        {currentQuestion.slice(0, charIndex)}
      </span>
      <span>{currentQuestion.slice(charIndex)}</span>
    </p>
  );
};

export default InputDisplay;
