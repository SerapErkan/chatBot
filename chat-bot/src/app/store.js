import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { firebaseReducer } from "react-redux-firebase";

export const store = configureStore({
  reducer: {
    firebase: firebaseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
