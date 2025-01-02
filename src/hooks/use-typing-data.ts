import { useQuery } from '@tanstack/react-query';

const fetchTypingData = async (): Promise<string[]> => {
  const response = await fetch('/api/typing-data');
  const data = await response.json();
  const typingArray = data.map((item: { name: string }) => item.name);
  return typingArray;
};

export const useTypingData = () => {
  return useQuery({
    queryKey: ['typingData'],
    queryFn: fetchTypingData,
    staleTime: 1000 * 60 * 5, // 5分間キャッシュを有効にする
  });
};
