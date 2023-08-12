import { configureStore } from "@reduxjs/toolkit";
import postSLice from "./postSLice";

export const store = configureStore({
  reducer: {
    posts: postSLice,
  },
});
