import { createSlice } from "@reduxjs/toolkit";
import { Cart } from '../../framework/common/types/cart';

const InitialState = {
  cart: [],
  quantity: 0,
} as Cart;


const cartSlice = createSlice({
    name: "cart",
    initialState: InitialState,
    reducers: {
      addToCart: (state, {payload}) => {
        const itemExists: any | undefined = state.cart.find((item: any) => item._id === payload._id);

        if (itemExists) {
          itemExists.quantity += payload.quantity
        } else {
          return {
            ...state,
              cart: [...state.cart, payload],
              quantity: state.quantity + 1 
          }
        } 
      },
      incrementQuantity: (state, action) => {
        const item: any = state.cart.find((item: any) => item._id === action.payload);
        item.quantity++ 
      },
      decrementQuantity: (state, action) => {
        const item: any = state.cart.find((item: any) => item._id === action.payload);
        if (item.quantity === 1) {
          return {
            ...state,
            cart: state.cart.filter((prod: any) => prod._id !== action.payload),
            quantity: state.quantity < 0 ? state.quantity = 0 : state.quantity - 1, 
          }
        } else {
            item.quantity--     
        }
      },
      removeFromCart: (state, action) => {
        return {
          ...state,
          cart: state.cart.filter((prod: any) => prod._id !== action.payload),
          quantity: state.quantity < 0 ? state.quantity = 0 : state.quantity - 1, 
        }
      },
      reset: () => {
          return {
            cart: [],
            quantity: 0,
          } as Cart;
        }
      }
  });


export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, reset } = cartSlice.actions; 
export default cartSlice.reducer;