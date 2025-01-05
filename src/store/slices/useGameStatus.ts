import { StateCreator } from 'zustand';

export interface GameStatusStore {
  status: 'running' | 'finish' | 'complete';
  setRunning: () => void;
  setFinish: () => void;
  setComplete: () => void;
}

const useGameStatus: StateCreator<GameStatusStore> = (set) => ({
  status: 'running',
  setRunning: () => set({ status: 'running' }),
  setFinish: () => set({ status: 'finish' }),
  setComplete: () => set({ status: 'complete' }),
});

export default useGameStatus;
