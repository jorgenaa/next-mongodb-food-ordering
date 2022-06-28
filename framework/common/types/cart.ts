import { Product } from "./product";

export interface Cart {
    cart: Product[] | any,
    quantity: number
  }
