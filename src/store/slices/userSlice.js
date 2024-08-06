import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "user";

const initialState = {
  fullName: "John Dou",
  userName: "@johndou",
  tweets: 1337,
  following: 561,
  followers: 718,
  gender: "male",
  isFavorite: false,
};

const userSlice = createSlice({
  initialState,
  name: SLICE_NAME,
  reducers: {
    changeIsFavorite: (state) => {
      state.isFavorite = !state.isFavorite;
    },
    addFollower: (state) => {
      state.followers++;
    },
  },
});

const { reducer, actions } = userSlice;

export const { changeIsFavorite, addFollower } = actions;

export default reducer;
