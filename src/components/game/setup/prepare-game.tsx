import { useTypingData } from '@/hooks/use-typing-data';
import GameStarter from './game-starter';

const PrepareGame = () => {
  // データチェック
  const { data, isLoading, error } = useTypingData();
  if (isLoading) {
    return <div className='text-3xl'>ロード中...</div>;
  }
  if (error) {
    return <div>Error:{error.message}</div>;
  }

  if (!data?.length) {
    return <div>データなし</div>;
  } else return <GameStarter />;
};

export default PrepareGame;
