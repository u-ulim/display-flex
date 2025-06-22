import { create } from "zustand";

interface IAutoPlayStore {
  isAutoPlayEnabled: boolean;
  setAutoPlayEnabled: (enabled: boolean) => void;
  toggleAutoPlay: () => void;
  pauseAllAutoPlay: () => void;
  resumeAllAutoPlay: () => void;
}

export const useAutoPlayStore = create<IAutoPlayStore>((set) => ({
  isAutoPlayEnabled: true,

  setAutoPlayEnabled: (enabled: boolean) => set({ isAutoPlayEnabled: enabled }),

  toggleAutoPlay: () =>
    set((state) => ({ isAutoPlayEnabled: !state.isAutoPlayEnabled })),

  pauseAllAutoPlay: () => set({ isAutoPlayEnabled: false }),

  resumeAllAutoPlay: () => set({ isAutoPlayEnabled: true }),
}));
