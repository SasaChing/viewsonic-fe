import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterReducer";
import tabReducer from "./slice/tabReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tabs: tabReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
