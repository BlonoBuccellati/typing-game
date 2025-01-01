interface isCorrectInputProps {
  inputChar: string;
  currentChar: string;
}
export const isCorrectInput = ({
  inputChar,
  currentChar,
}: isCorrectInputProps) => {
  return inputChar === currentChar;
};
