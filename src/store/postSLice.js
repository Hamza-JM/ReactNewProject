import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../utils/axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axiosInstance.get("posts/all");
  console.log(response.data);
  return response.data.docs;
});
const initialState = {
  posts: [],
};

export const counterSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.posts = action.payload;
    });
  },
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
