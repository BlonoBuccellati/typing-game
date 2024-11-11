// TODO: データをここで全て用意する。localStateでフェッチしたデータを管理。
import { useState } from 'react';
import useCountDown from '@/hooks/counter';

import { Input } from '@/components/ui/input';
import Timer from './timer';
import Finish from './finish';

// フェッチしたデータはTypingGameの引数にとる？
const TypingGame = () => {
  // ゲーム時間
  const gameDuration = 10;
  const { seconds, isCounting } = useCountDown(gameDuration);

  // タイピング
  // TODO:DBからフェッチしたデータに修正
  const typingData = ['hello', 'world', 'React', 'Typing', 'game'];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isAllCompleted, setIsAllCompleted] = useState(false);

  //現在の問題文
  const currentQuestion = typingData[currentQuestionIndex];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const inputChar = newValue[newValue.length - 1];
    const currentChar = currentQuestion[currentCharIndex];

    const isMatchInputChar = inputChar === currentChar;
    if (isMatchInputChar) {
      // 入力が一致しているときの処理
      setCurrentCharIndex((prev) => ++prev);
      setInputValue(newValue);
      const isLastIndex = currentCharIndex === currentQuestion.length - 1;
      if (isLastIndex) {
        const maxTypingDataIndex = typingData.length - 1;
        const hasNextData: boolean = currentQuestionIndex < maxTypingDataIndex;
        if (hasNextData) {
          setCurrentQuestionIndex((prev) => ++prev);
          setCurrentCharIndex(0);
          setInputValue('');
        } else {
          setIsAllCompleted(true);
        }
      }
    } else {
      // 入力が一致していないときの処理
    }
  };

  return (
    <>
      {/** TODO:オーバーレイするように実装 */}
      {isCounting === false && <Finish />}
      {/**メイン画面 */}
      <div>
        タイピングゲーム
        <Timer remainingGameTime={seconds} />
        <div>
          {isAllCompleted ? (
            <div>Congratulation! You've completed the typing game!</div>
          ) : (
            <>
              <p>
                <span className='text-green-400 font-bold'>
                  {currentQuestion.slice(0, currentCharIndex)}
                </span>
                <span>{currentQuestion.slice(currentCharIndex)}</span>
              </p>
              <Input
                onChange={handleInputChange}
                placeholder={currentQuestion}
                value={inputValue}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TypingGame;
