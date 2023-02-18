import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
export const login = createAsyncThunk(
  "auth/login",
  async ({ values, navigate, toast }) => {
    try {
      const response = await api.signIn(values);
      const loginSucess = () => toast.success("Login successfully");
      loginSucess();
      navigate("/");
      return response.data;
    } catch (error) {
      const err = () => toast.error("User not found");
      err();
      console.log(error);
    }
  }
);
export const register = createAsyncThunk(
  "auth/register",
  async ({ values, navigate, toast }) => {
    try {
      const response = await api.signUp(values);
      const registerSucess = () => toast.success("Register successfully");
      registerSucess();
      navigate("/");
      return response.data;
    } catch (error) {
      const err = () => toast.error("You have problem");
      err();
      console.log(error);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    student: null,
    error: "",
    loading: false,
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("student", JSON.stringify({ ...action.payload }));
      state.student = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("student", JSON.stringify({ ...action.payload }));
      state.student = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
export default authSlice.reducer;
