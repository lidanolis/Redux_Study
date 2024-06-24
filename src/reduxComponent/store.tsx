import { configureStore } from "@reduxjs/toolkit";

//slice
import fruitReducer from "./slice";

export const Store = configureStore({
  reducer: {
    fruit: fruitReducer,
  },
});

//redux type
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
