import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    home: {
      hamburgerMenu: false
    }
  },
  reducers: {
    state: (state, action) => {
      state.data.push(action.payload);
    },
    hamburger: (state,action) => {
      state.home.hamburgerMenu = action.payload
    }
  },
});

export const { state, hamburger } = cartSlice.actions;
export default cartSlice.reducer;
