import { createSlice } from "@reduxjs/toolkit";

export const addToCart=createSlice({
    name:'cartList',
    initialState:{
        cartData:[]
    },
    reducers:{
        addToCartFun:(state,action)=>{

        }
    }
})