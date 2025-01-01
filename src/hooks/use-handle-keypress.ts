import { useCallback } from 'react';

// 入力時のイベント
interface useHandleKeyPressProps {
  currentQuestion: string;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<string>>;
  charIndex: number;
  currentQuestionIndex: number;
  typingData: string[];
  setCharIndex: React.Dispatch<React.SetStateAction<number>>;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsGameCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}
export const useHandleKeyPress = ({
  currentQuestion,
  setCurrentQuestion,
  charIndex,
  currentQuestionIndex,
  typingData,
  setCharIndex,
  setCurrentQuestionIndex,
  setIsGameCompleted,
}: useHandleKeyPressProps) => {
  return useCallback(
    (e: KeyboardEvent) => {
      const currentChar = currentQuestion[charIndex];
      const inputChar = e.key;
      console.log(inputChar);
      const isCorrectInputChar = inputChar === currentChar;
      if (isCorrectInputChar) {
        // 入力が一致しているときの処理
        setCharIndex((prev) => 1 + prev);

        const isEndOfCurrentQuestion = charIndex === currentQuestion.length - 1;
        const isLastQuestion = currentQuestionIndex === typingData.length - 1;

        if (isEndOfCurrentQuestion) {
          if (isLastQuestion) {
            setIsGameCompleted(true);
          } else {
            setCurrentQuestionIndex((prev) => prev + 1);
            setCurrentQuestion(typingData[currentQuestionIndex + 1]);
            setCharIndex(0);
          }
        }
      }
    },
    [
      charIndex,
      currentQuestionIndex,
      typingData,
      currentQuestion,
      setCharIndex,
      setCurrentQuestionIndex,
      setIsGameCompleted,
    ]
  );
};
