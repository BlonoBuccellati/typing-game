// TODO: データをここで全て用意する。localStateでフェッチしたデータを管理。
import { useState } from 'react';
import useCountDown from '@/hooks/counter';

import { Input } from '@/components/ui/input';
import Timer from './timer';
import Finish from './finish';

// ゲーム時間
const GAME_DURATION = 10; //後でグローバルにするかも

// フェッチしたデータはTypingGameの引数にとる？
const TypingGame = () => {
  const { seconds: remainingTime, isCounting } = useCountDown(GAME_DURATION);
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
    } else {
      // 入力が一致していないときの処理
    }
  };

  const renderGameContent = () => {
    if (isGameCompleted) {
      return <div>ゲームクリア！</div>;
    }
    return (
      <>
        <p>
          <span className='text-green-400 font-bold'>
            {currentQuestion.slice(0, charIndex)}
          </span>
          <span>{currentQuestion.slice(charIndex)}</span>
        </p>
        <Input
          onChange={handleInputChange}
          placeholder={currentQuestion}
          value={inputText}
        />
      </>
    );
  };

  return (
    <>
      {/** TODO:オーバーレイするように実装 */}
      {!isCounting && <Finish />}
      {/**メイン画面 */}
      <div>
        <h2>タイピングゲーム</h2>
        <Timer remainingGameTime={remainingTime} />
        <div>{renderGameContent()}</div>
      </div>
    </>
  );
};

export default TypingGame;
