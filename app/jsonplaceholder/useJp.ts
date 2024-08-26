import { create } from "zustand";

interface JsState {
  nav: boolean;
  openNav: () => void;
  closeNav: () => void;
}

export const useJp = create<JsState>((set) => ({
  nav: false,
  openNav: () => set({ nav: true }),
  closeNav: () => set({ nav: false }),
}));
