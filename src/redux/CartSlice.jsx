import { createSlice } from "@reduxjs/toolkit";

const initialState=JSON.parse(localStorage.getItem("cartItem"))??[];

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            state.push(action.payload);
            // state=[];
            // return state;
        },
        deleteFromCart(state,action){
            return state.filter((item)=>item.id!==action.payload.id);
        },
    }
})

export const {addToCart,deleteFromCart} =cartSlice.actions;

export default cartSlice.reducer;