import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: [],

  reducers: {
    // Add product to cart (but only if not already added)
    addToCart: (state, action) => {
      const itemExists = state.find((item) => item.id === action.payload.id);

      if (!itemExists) {
        state.push(action.payload);
      }
      // else do nothing (item already exists)
    },

    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
