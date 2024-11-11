interface GameStatus {
  message: string;
}
const GameStatus = ({ message }: GameStatus) => {
  return <div>{message}</div>;
};

export default GameStatus;
