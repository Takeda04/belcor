import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; 
import Main from "./slices/mainSlice"; 

export const store = configureStore({
  reducer: {
    auth: authReducer,
    main: Main.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
