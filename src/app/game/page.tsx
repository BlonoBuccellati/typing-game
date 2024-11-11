'use client';
import GameStarter from '@/components/game/setup/game-starter';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function TypingGamePage() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  return isGameStarted ? (
    <GameStarter />
  ) : (
    <Button onClick={() => setIsGameStarted(true)}>Play</Button>
  );
}
