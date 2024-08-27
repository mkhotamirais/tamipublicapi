import { create } from "zustand";
import { CartItems } from "./constants";

export type Type = "demo" | "hijja";
export type Sorting = "Lates" | "cheapest" | "expensive";
export type Query = {
  type?: Type;
  search_name?: string;
  sorting?: Sorting;
};

export interface SiskoState {
  cartItems: CartItems[];
  setCartItems: (cartItem: CartItems) => void;
  setCartPlus: (id: string) => void;
  setCartMinus: (id: string) => void;
  clearCartItems: () => void;
}

// let cartItems: CartItems[];
// const storageCart = localStorage.getItem("siskoCartItems");
// if (storageCart) {
//   cartItems = JSON.parse(storageCart);
// } else cartItems = [];

// const saveLocal = (cartItems: CartItems[]) => {
//   localStorage.setItem("siskoCartItems", JSON.stringify(cartItems));
// };

// Inisialisasi cartItems secara default sebagai array kosong
let cartItems: CartItems[] = [];

const saveLocal = (cartItems: CartItems[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("siskoCartItems", JSON.stringify(cartItems));
  }
};

// Memastikan kode dijalankan di sisi klien sebelum mengakses localStorage
if (typeof window !== "undefined") {
  const storageCart = localStorage.getItem("siskoCartItems");
  if (storageCart) {
    cartItems = JSON.parse(storageCart);
  }
}

export const useSisko = create<SiskoState>((set) => ({
  cartItems,
  setCartItems: (cartItem) => {
    set((state) => {
      let cartItems: CartItems[];
      const match = state.cartItems.find((item) => item?.id === cartItem.id);
      if (!match) {
        cartItems = [...state.cartItems, cartItem];
        saveLocal(cartItems);
        return { cartItems };
      }
      const others = state.cartItems.filter((item) => item.id !== cartItem.id);
      const current = { ...match, qty: match.qty + 1 };
      cartItems = [...others, current];
      saveLocal(cartItems);
      return { cartItems };
    });
  },
  setCartPlus: (id) => {
    set((state) => {
      const others = state.cartItems.filter((item) => item.id !== id);
      const match = state.cartItems.find((item) => item.id === id);
      if (match) {
        const current = { ...match, qty: match.qty + 1 };
        const cartItems = [...others, current];
        saveLocal(cartItems);
        return { cartItems };
      }
      return state;
    });
  },
  setCartMinus: (id) => {
    set((state) => {
      let cartItems: CartItems[];
      const others = state.cartItems.filter((item) => item.id !== id);
      const match = state.cartItems.find((item) => item.id === id);
      if (match) {
        const current = { ...match, qty: match.qty - 1 };
        current.qty === 0 ? (cartItems = [...others]) : (cartItems = [...others, current]);
        saveLocal(cartItems);
        return { cartItems };
      }
      return state;
    });
  },
  clearCartItems: () =>
    set(() => {
      saveLocal([]);
      return { cartItems: [] };
    }),
}));
