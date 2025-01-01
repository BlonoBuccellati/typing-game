// TODO:ロジックをさらに関数に分離する。(リファクタ)

import { useState, useEffect } from 'react';

import useCountDown from '@/hooks/counter';
import { useHandleKeyPress } from './use-handle-keypress';
import { useTypingData } from './use-typing-data';
// タイピングロジックを管理するカスタムフック
export const useTypingGame = (duration: number) => {
  const { seconds: remainingTime, isCounting: isPlaying } =
    useCountDown(duration);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //現在の問題index
  const [charIndex, setCharIndex] = useState(0); // １問題の中の配列
  const [isGameCompleted, setIsGameCompleted] = useState(false); // 問題終了フラグ
  const typingData = useTypingData(); // タイピングデータ
  const [currentQuestion, setCurrentQuestion] = useState(typingData[0]); //最初の問題をセット
  // 入力時のイベント
  const handleKeyPress = useHandleKeyPress({
    currentQuestion,
    setCurrentQuestion,
    charIndex,
    currentQuestionIndex,
    typingData,
    setCharIndex,
    setCurrentQuestionIndex,
    setIsGameCompleted,
  });
  // キー入力設定
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return {
    currentQuestion,
    charIndex,
    isGameCompleted,
    isPlaying,
    remainingTime,
  };
};
