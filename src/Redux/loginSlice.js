import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  userData: [],
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    Login: (state, actions) => {
      const newData = actions.payload;
      const loginItem =
        window.localStorage.getItem("user") !== null
          ? JSON.parse(window.localStorage.getItem("user"))
          : [];

          state.userData = loginItem;
         let filtered = state.userData.some((item) => item.email == newData.email && item.password == newData.password);

         if (filtered == true) {
          window.location.href = 'http://localhost:3000/home';
         }
    },
  },
});

export const { Login } = loginSlice.actions;

export default loginSlice.reducer;
