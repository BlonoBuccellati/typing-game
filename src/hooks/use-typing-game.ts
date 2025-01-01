// TODO:ロジックをさらに関数に分離する。(リファクタ)

import { useState, useEffect, useMemo, useCallback } from 'react';

import useCountDown from '@/hooks/counter';
// タイピングロジックを管理するカスタムフック
export const useTypingGame = (duration: number) => {
  const { seconds: remainingTime, isCounting: isPlaying } =
    useCountDown(duration);
  // タイピング
  const typingData = useMemo(
    () => ['hello', 'world', 'React', 'Typing', 'game'], // TODO:DBからフェッチしたデータに修正
    []
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //現在の問題index
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [charIndex, setCharIndex] = useState(0); // １問題の中の配列
  const [isGameCompleted, setIsGameCompleted] = useState(false); // 問題終了フラグ

  // 入力時のイベント
  const handleKeyPress = useCallback(
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
            setCurrentQuestionIndex((prev) => 1 + prev);
            setCharIndex(0);
          }
        }
      }
    },
    [charIndex, currentQuestionIndex, typingData, currentQuestion]
  );
  // キー入力設定
  useEffect(() => {
    console.log('開始');
    const currentQuestion = typingData[currentQuestionIndex];
    setCurrentQuestion(currentQuestion);

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      console.log('終了');
    };
  }, [handleKeyPress, currentQuestionIndex, typingData]);

  // 入力が一致しないときは何もしない。

  return {
    currentQuestion,
    charIndex,
    isGameCompleted,
    isPlaying,
    remainingTime,
  };
};
