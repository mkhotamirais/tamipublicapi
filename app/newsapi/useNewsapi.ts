import { create } from "zustand";

export type HeadType = "top-headlines" | "everything";

type NewsapiType = {
  head: HeadType;
  setHead: (head: HeadType) => void;
  country: string;
  setCountry: (country: string) => void;
};

export const useNewsapi = create<NewsapiType>((set) => ({
  head: "everything",
  setHead: (head) => set({ head }),
  country: "id",
  setCountry: (country) => set({ country }),
}));
