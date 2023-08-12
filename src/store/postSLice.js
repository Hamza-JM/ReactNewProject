import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      title: "First post",
      content: "First post content",
      description: "First post description",
      published: true,
    },
    {
      title: "Second post",
      content: "Second post content",
      description: "Second post description",
      published: false,
    },
    {
      title: "Third post",
      content: "Third post content",
      description: "Third post description",
      published: true,
    },
    {
      title: "Fourth post",
      content: "Fourth post content",
      description: "Fourth post description",
      published: false,
    },
  ],
};

export const counterSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
