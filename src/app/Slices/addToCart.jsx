import { createSlice} from "@reduxjs/toolkit";

export const addToCart=createSlice({
    name:"addToCart",
    initialState:{
        cartData:[]
    },
    reducers:{
        addToCartFun:(state,action)=>{
            state.cartData=[...state.cartData,action.payload]
        }
    }
})
export const {addToCartFun}=addToCart.actions
export default addToCart.reducer;