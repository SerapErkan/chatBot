import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFirebase } from "react-redux-firebase";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    loading: "idle",
  },

  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});
