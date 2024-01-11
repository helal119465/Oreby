import { configureStore } from "@reduxjs/toolkit";
import addToCart from "./Slices/addToCart";


export default configureStore({
    reducer:{
        addtocart:addToCart,
    },
});
