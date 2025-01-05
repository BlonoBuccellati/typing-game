// オーバーレイする実装にしたい？？？

// 今の所、終了と、完了がある。ただのメッセージか。完了と終了のオーバーレイは、異なるデザインにするかも。
interface GameStatus {
  message: string;
}
const GameStatus = ({ message }: GameStatus) => {
  return (
    <div className='text-center w-screen'>
      <span className='text-6xl font-black'>{message}</span>
    </div>
  );
};

export default GameStatus;
