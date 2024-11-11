// TODO:ロジックをさらに関数に分離する。(リファクタ)

import { useState } from 'react';

import useCountDown from '@/hooks/counter';
// タイピングロジックを管理するカスタムフック
export const useTypingGame = (duration: number) => {
  const { seconds: remainingTime, isCounting } = useCountDown(duration);
  // タイピング
  // TODO:DBからフェッチしたデータに修正
  const typingData = ['hello', 'world', 'React', 'Typing', 'game'];
  const [questionIndex, setQuestionIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [inputText, setInputText] = useState('');
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  //現在の問題文
  const currentQuestion = typingData[questionIndex];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const inputChar = newValue[newValue.length - 1];
    const currentChar = currentQuestion[charIndex];

    const isCorrectInputChar = inputChar === currentChar;
    if (isCorrectInputChar) {
      // 入力が一致しているときの処理
      setCharIndex((prev) => ++prev);
      setInputText(newValue);

      const isEndOfCurrentQuestion = charIndex === currentQuestion.length - 1;
      const isLastQuestion = questionIndex === typingData.length - 1;

      if (isEndOfCurrentQuestion) {
        if (isLastQuestion) {
          setIsGameCompleted(true);
        } else {
          setQuestionIndex((prev) => ++prev);
          setCharIndex(0);
          setInputText('');
        }
      }
    }
    // 入力が一致しないときは何もしない。
  };

  return {
    currentQuestion,
    charIndex,
    inputText,
    isGameCompleted,
    isCounting,
    remainingTime,
    handleInputChange,
  };
};
