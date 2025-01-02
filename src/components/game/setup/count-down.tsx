import { useEffect, useRef } from 'react';

interface CountDownProps {
  count: number;
}
const CountDown = ({ count }: CountDownProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // 再生位置を先頭にリセット
      audioRef.current
        .play()
        .catch((error) => console.error('再生エラー：', error));
    }
  });
  return (
    <div className='flex items-center justify-center h-screen'>
      <audio ref={audioRef}>
        <source src='/audio/count.mp3' type='audio/mp3' />
      </audio>
      <div className='text-9xl font-black'>{count}</div>
    </div>
  );
};

export default CountDown;
