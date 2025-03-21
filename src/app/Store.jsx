import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from "../features/ApiSlice";

export const Store = configureStore({
  reducer: {
    apiReducer: ApiSlice,
  },
});
