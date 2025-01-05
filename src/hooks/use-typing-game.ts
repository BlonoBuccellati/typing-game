// TODO:ロジックをさらに関数に分離する。(リファクタ)

import { useState, useEffect } from 'react';

import { useHandleKeyPress } from './use-handle-keypress';
import { useTypingData } from './use-typing-data';
//import { useTypingData } from './use-typing-data';
// タイピングロジックを管理するカスタムフック
export const useTypingGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //現在の問題index
  const [charIndex, setCharIndex] = useState(0); // １問題の中の配列
  const typingData = useTypingData(); // タイピングデータ
  const { data: typingDataArray } = typingData;
  const [currentQuestion, setCurrentQuestion] = useState(
    typingDataArray?.[0] ?? ''
  );
  // 入力時のイベント
  const handleKeyPress = useHandleKeyPress({
    currentQuestion,
    setCurrentQuestion,
    charIndex,
    currentQuestionIndex,
    typingData: typingDataArray ?? [],
    setCharIndex,
    setCurrentQuestionIndex,
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
  };
};
