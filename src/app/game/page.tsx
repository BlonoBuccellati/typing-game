'use client';
import PrepareGame from '@/components/game/setup/prepare-game';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// データがなければデータなし。データがあればStarter。
export default function TypingGamePage() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  return isGameStarted ? (
    <PrepareGame />
  ) : (
    <div>
      <div className='flex items-center justify-center h-screen'>
        <Button
          className='size-20 w-48 text-3xl font-black'
          onClick={() => setIsGameStarted(true)}
        >
          Play
        </Button>
      </div>
    </div>
  );
}
