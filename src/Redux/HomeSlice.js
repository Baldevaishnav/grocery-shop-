import { createSlice } from "@reduxjs/toolkit";
import { DataProduct } from "../componets/DataProduct";

const initialState = {
  
  ProductItems: DataProduct,
};

const HomeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getall:(state, actions)=>{
      let item = DataProduct.filter(
        (item) => item.type == item.type
      )
      state.ProductItems = item;
    },

    getorange: (state, actions) => {
      let itemorange = DataProduct.filter(
        (item) => item.type == "orange"
      )
      state.ProductItems = itemorange;
    },
    getmeat: (state, actions) => {
      let itemfruits = DataProduct.filter(
        (item) => item.type == "fruits"
      )
      state.ProductItems = itemfruits;
    },
    getvegetable: (state, actions) => {
      let itemvegetable = DataProduct.filter(
        (item) => item.type == "vegetable"
      )
      state.ProductItems = itemvegetable;
    },
    getfood: (state, actions) => {
      let itemfood = DataProduct.filter(
        (item) => item.type == "food"
      )
      state.ProductItems = itemfood;
    },

  },
});

export const { getall, getorange,getmeat,getvegetable,getfood } = HomeSlice.actions;

export default HomeSlice.reducer;
