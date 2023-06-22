import { createSlice } from '@reduxjs/toolkit'
import { json } from 'react-router-dom';
// import { DataProduct } from '../componets/DataProduct';

// const getItem = localStorage.getItem("item") !== null ? JSON.parse(localStorage.getItem("item")) : []
const initialState = {
       cart1: [],
       total: 0,
       
}

const productslice = createSlice({
  name: "product",
  initialState,
  reducers:{

     
  }
});

export const {} = productslice.actions

export default productslice.reducer