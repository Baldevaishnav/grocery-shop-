import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

const Shoppingdetail_slice = createSlice({
  name: 'shop' ,
  initialState,
  reducers: {
       procced:(state,actions)=>{
            console.log(actions.payload);
       }
  }  
});

export const {procced} = Shoppingdetail_slice.actions

export default Shoppingdetail_slice.reducer