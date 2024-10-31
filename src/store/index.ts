//todo Import packages
import { createSlice, configureStore } from "@reduxjs/toolkit";

const Main = createSlice({
  name: "Main",
  initialState: {
    title: "",
    mode: Boolean(
      localStorage.getItem("theme") === "dark"
        ? true
        : localStorage.getItem("theme") === "light"
          ? false
          : true
    ),
  },
  reducers: {
    main: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export const store = configureStore({
  reducer: {
    main: Main.reducer,
  },
});

export const { main } = Main.actions;



