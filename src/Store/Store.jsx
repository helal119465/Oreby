import { configureStore } from "@reduxjs/toolkit";
import { addToCart } from "./Slices/addToCart";

export default Store = configureStore({
    reducer: {
        addtocart:addToCart,
    },
  })