import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers/RootReducer";

export const store = configureStore({
  reducer: rootReducers
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
