import GameStatus from './game-status';

interface FinishProps {
  message: string;
}
const Finish = ({ message }: FinishProps) => {
  return (
    <>
      <div className='h-screen w-screen relative'>
        <div className='text-3xl font-black text-center'>時間:</div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <GameStatus message={message} />
        </div>
      </div>
    </>
  );
};

export default Finish;
