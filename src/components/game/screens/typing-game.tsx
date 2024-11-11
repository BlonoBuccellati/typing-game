// TODO: データをここで全て用意する。localStateでフェッチしたデータを管理。

import useCountDown from '@/hooks/counter';
import Timer from './timer';

// フェッチしたデータはTypingGameの引数にとる？
const TypingGame = () => {
  const gameDuration = 10;
  const { seconds, isCounting } = useCountDown(gameDuration);
  return (
    <>
      {isCounting === false && <div>終了！！</div>}
      <div>
        タイピングゲーム
        <div>
          <Timer remainingGameTime={seconds} />
        </div>
      </div>
    </>
  );
};

export default TypingGame;
