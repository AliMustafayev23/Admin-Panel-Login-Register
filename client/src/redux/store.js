import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "./slice/getDataCourseSlice";
import authReducer from "./slice/authSlice";
export const store = configureStore({
  reducer: {
    courses: getDataReducer,
    auth: authReducer,
  },
});
