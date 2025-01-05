import { create } from 'zustand';
import { GameStatusStore } from './slices/useGameStatus';
import useGameStatus from './slices/useGameStatus';

const useBoundStore = create<GameStatusStore>()((...a) => ({
  ...useGameStatus(...a),
}));

export default useBoundStore;
