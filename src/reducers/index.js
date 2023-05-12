import { configureStore } from "@reduxjs/toolkit";
import { popularSlice } from "./dataSlice";

export const store = configureStore({
  reducer: {
    recipies: popularSlice.reducer,
  }
})