import { configureStore } from "@reduxjs/toolkit";
import campaignSlice from "./slices/campaignSlice";
import adSetSlice from "./slices/adSetSlice";
import adSlice from "./slices/adSlice";
export const store = configureStore({
  reducer: {
    campaignSlice,
    adSetSlice,
    adSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
