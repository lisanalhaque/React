import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const items = state.find((p) => p.id === action.payload.id);
      if (items) {
        items.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    },
    incrementQty: (state, action) => {
      console.log("increment...");
      const items = state.find((p) => p.id === action.payload);
      if (items) {
        items.quantity += 1;
      }
    },
    decrementQty: (state, action) => {
      console.log("decrement...");
      const items = state.find((p) => p.id === action.payload);
      if (items) {
        if (items.quantity > 1) {
          items.quantity -= 1;
        } else {
          // if only 1 left ,remove it from cart
          return state.filter((p) => p.id !== action.payload);
        }
      }
    },
    clearCart:()=>{
        return[];
    }
  },
});

export const {addToCart,removeFromCart,incrementQty,decrementQty,clearCart}=
cartSlice.actions
export default cartSlice.reducer;