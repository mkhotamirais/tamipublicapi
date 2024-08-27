export const url = "https://sistemtoko.com/public";
// src={`https://sistemtoko.com/img/user/${query.type}/product/${single?.product_img}`}
export const urlImg = "https://sistemtoko.com/img/user/hijja/product/";

export interface ProductType {
  id: string;
  name: string;
  photo: string;
  price: string;
  weight: string;
}

export interface CartItems extends ProductType {
  qty: number;
  createdAt: string;
  weight: string;
  checked: boolean;
}

export interface ProductSingle {
  product_id: string;
  product_name: string;
  product_img: string;
  product_price: string;
  product_status: string;
  product_description: string;
  product_code: string;
  product_buy_price: string;
  product_weight: string;
  variant_kewyord_id: number;
  variant_kewyord_value: string;
}
