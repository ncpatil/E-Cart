import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/CartSlice";
import productReducer from "../store/productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
