import { create } from "zustand";

interface AppStore {
  chatOpen: boolean;

  openChat: () => void;

  closeChat: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
  chatOpen: false,

  openChat: () =>
    set({
      chatOpen: true,
    }),

  closeChat: () =>
    set({
      chatOpen: false,
    }),
}));
