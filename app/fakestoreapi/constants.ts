export const url = "https://fakestoreapi.com";

export type FksProductType = {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: string;
    count: string;
  };
};
