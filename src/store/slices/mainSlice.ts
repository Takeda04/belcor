
import { createSlice } from "@reduxjs/toolkit";

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

export const { main } = Main.actions;
export default Main;
