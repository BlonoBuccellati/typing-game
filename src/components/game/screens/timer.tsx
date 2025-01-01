interface TimerProps {
  remainingGameTime: number;
}

const Timer = ({ remainingGameTime }: TimerProps) => {
  // カウント開始！
  return <div>残り時間:{remainingGameTime}</div>;
};

export default Timer;
