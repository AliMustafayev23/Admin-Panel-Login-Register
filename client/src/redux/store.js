import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "./slice/getDataCourseSlice";

export const store = configureStore({
  reducer: {
    courses: getDataReducer,
  },
});
