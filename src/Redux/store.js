import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./HomeSlice";
import shoppingcartSlice from "./shoppingcartSlice";
import productslice from "./productslice";
import loginSlice from "./loginSlice";

const store = configureStore({
       reducer:{
            home: HomeSlice,
            Cart: shoppingcartSlice,
            product: productslice,
            login: loginSlice
       }
})

export default store;
