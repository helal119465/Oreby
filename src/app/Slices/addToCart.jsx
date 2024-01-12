import { createSlice} from "@reduxjs/toolkit";

export const addToCart=createSlice({
    name:"addToCart",
    initialState:{
        cartData:JSON.parse(localStorage.getItem("cartData"))?JSON.parse(localStorage.getItem("cartData")):[],
    },
    reducers:{
        addToCartFun:(state,action)=>{
            let findProduct=state.cartData.findIndex((item)=>item.id==action.payload.id)
            console.log(findProduct)
            if(findProduct!=-1){
                state.cartData[findProduct].quantity++;
                localStorage.setItem('cartData',JSON.stringify(state.cartData))
            }else{
                state.cartData=[...state.cartData,action.payload]
                localStorage.setItem('cartData',JSON.stringify(state.cartData))
            }
        },
        removeToCart:(state,action)=>{
            state.cartData.splice(action.payload,1)
            localStorage.setItem('cartData',JSON.stringify(state.cartData))
        },
        quantityUpdate:(state,action)=>{
            state.cartData[action.payload].quantity+=1;
            localStorage.setItem('cartData',JSON.stringify(state.cartData))
        },
        quantityMinus:(state,action)=>{
            state.cartData[action.payload].quantity-=1
            localStorage.setItem('cartData',JSON.stringify(state.cartData))
        }
    }
})
export const {addToCartFun,removeToCart,quantityUpdate,quantityMinus}=addToCart.actions
export default addToCart.reducer;