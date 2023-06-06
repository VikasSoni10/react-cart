import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemexist = state.cartItems.find((i) => i.id === item.id);

      if (isItemexist) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity += 1;
        });
      } else {
        state.cartItems.push(item);
      }
    },

    decreament: (state, action) => {
      state.cartItems.forEach((i, ind) => {
        if (i.quantity > 1) {
          if (i.id === action.payload) i.quantity -= 1;
        }
      });
    },

    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },

    calculatePrice:(state, action)=>{
    let sum = 0;
    state.cartItems.forEach((i)=>{
    sum+=i.price * i.quantity;
    })
    state.subTotal = sum;
    state.shipping = state.subTotal > 1000 ? 0 : 200;
    state.tax = +(state.subTotal*0.18).toFixed();
    state.total = state.subTotal + state.shipping + state.tax;
    }
  }
);
