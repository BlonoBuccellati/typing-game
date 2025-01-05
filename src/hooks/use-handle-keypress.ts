import useBoundStore from '@/store';
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
}

/**
 * ゲーム中の、キー入力時のイベント
 * @param currentQuestion 現在の問題
 * @param {Dispatch} setCurrentQuestion 現在の問題を設定
 * @param {number} charIndex 表示中の問題のindex
 * @param {number} currentQuestionIndex 現在の問題のindex
 * @param typingData 対象タイピングデータ
 * @param setCharIndex 表示中の問題のindexの設定
 * @param setCurrentQuestionIndex 問題のindexの設定
 * @param setIsGameCompleted 問題が終了したかの設定
 *
 * @returns
 */
export const useHandleKeyPress = ({
  currentQuestion,
  setCurrentQuestion,
  charIndex,
  currentQuestionIndex,
  typingData,
  setCharIndex,
  setCurrentQuestionIndex,
}: useHandleKeyPressProps) => {
  const setFinish = useBoundStore((state) => state.setFinish);
  return useCallback(
    (e: KeyboardEvent) => {
      const currentChar = currentQuestion[charIndex];
      const inputChar = e.key;
      console.log(inputChar);
      const isCorrectInputChar = inputChar === currentChar;
      // 入力が一致しているときの処理
      if (isCorrectInputChar) {
        setCharIndex((prev) => prev + 1);

        // 問題、または問題のindexの変更またはゲーム終了
        const isEndOfCurrentQuestion = charIndex === currentQuestion.length - 1;
        const isLastQuestion = currentQuestionIndex === typingData.length - 1;
        // TODO:ifのネストが嫌だ。
        if (isEndOfCurrentQuestion) {
          if (isLastQuestion) {
            setFinish();
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
      setFinish,
      setCurrentQuestion,
    ]
  );
};
