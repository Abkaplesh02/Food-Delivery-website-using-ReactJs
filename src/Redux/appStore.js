import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/cartSlice"
import userReducer from "../Redux/userSlice"

const appStore=configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer,


    }
});

export default appStore;