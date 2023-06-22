import { createSlice } from "@reduxjs/toolkit";
import { parse } from "postcss";
import { json } from "react-router-dom";

let Items =
  window.localStorage.getItem("item") !== null
    ? JSON.parse(localStorage.getItem("item"))
    : [];
let ItemTotal =
  window.localStorage.getItem("total") !== null
    ? JSON.parse(localStorage.getItem("total"))
    : 0;

const initialState = {
  cart: Items,
  total: ItemTotal,
};

const shoppingcartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      let newitem = action.payload;
      let exitingproduct = state.cart.some(
        (item) => item.id == action.payload.id
      );

      let index = state.cart.findIndex((item) => item.id == newitem.id);

      if (exitingproduct !== true) {
        state.cart.push(newitem);
        state.total = state.total + newitem.subtotal;
        localStorage.setItem("item", JSON.stringify(state.cart));
        localStorage.setItem("total", JSON.stringify(state.total));
      } else {
        state.cart[index].qauntity += newitem.qauntity;
        state.cart[index].subtotal = state.cart[index].qauntity * newitem.subtotal;
        state.total = state.total + newitem.subtotal;
        localStorage.setItem("total", JSON.stringify(state.total));
        localStorage.setItem("item", JSON.stringify(state.cart));
      }
    },

    removeQuantity: (state, action) => {
      let newitem = action.payload;
      console.log(newitem.qauntity);
      let index = state.cart.findIndex((item) => item.id == newitem.id);
      let remain = state.cart.some((item) => item.id == action.payload.id);

      if (newitem.qauntity > 1) {
        state.cart[index].qauntity = action.payload.qauntity - 1;
        state.cart[index].subtotal = state.cart[index].subtotal - newitem.price;
        state.total = state.total - newitem.price;
        localStorage.setItem("total", JSON.stringify(state.total));
        localStorage.setItem("item", JSON.stringify(state.cart));
      } else {
        const filter = state.cart.filter(
          (item) => item.id !== action.payload.id
        );

        state.cart = filter;
        state.total = state.total - action.payload.subtotal;
        localStorage.setItem("total", JSON.stringify(state.total));
        localStorage.setItem("item", JSON.stringify(state.cart));
      }
    },
  },
});

export const { addTocart, removeQuantity } = shoppingcartSlice.actions;

export default shoppingcartSlice.reducer;
