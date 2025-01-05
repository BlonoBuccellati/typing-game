interface TimerProps {
  remainingGameTime: number;
}

const Timer = ({ remainingGameTime }: TimerProps) => {
  // カウント開始！
  return <span className='text-2xl'>残り時間:{remainingGameTime}</span>;
};

export default Timer;
