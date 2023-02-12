import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const getDataCourse = createAsyncThunk("getDataCourse", async () => {
  const response = await axios("http://localhost:8000/course");
  return response.data;
});

export const getDataSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataCourse.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getDataCourse.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(getDataCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = "Data not found";
    });
  },
});

export default getDataSlice.reducer;
